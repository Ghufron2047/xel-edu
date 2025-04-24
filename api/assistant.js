import { SessionsClient } from '@google-cloud/dialogflow';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ success: false, message: 'Message is required' });
    }

    const sessionId = uuidv4();
    const sessionClient = new SessionsClient({
      projectId: process.env.DIALOGFLOW_PROJECT_ID,
      credentials: {
        client_email: process.env.DIALOGFLOW_CLIENT_EMAIL,
        private_key: process.env.DIALOGFLOW_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
    });

    const sessionPath = sessionClient.projectAgentSessionPath(
      process.env.DIALOGFLOW_PROJECT_ID,
      sessionId
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: message,
          languageCode: 'id', // Ubah jika perlu
        },
      },
    };

    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;

    return res.status(200).json({
      success: true,
      reply: result.fulfillmentText || '(Tidak ada respons)',
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}
