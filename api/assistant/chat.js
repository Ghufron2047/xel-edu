import { SessionsClient } from '@google-cloud/dialogflow';
import { v4 as uuidv4 } from 'uuid';

const projectId = process.env.DIALOGFLOW_PROJECT_ID;
const privateKey = process.env.DIALOGFLOW_PRIVATE_KEY?.replace(/\\n/g, '\n');
const clientEmail = process.env.DIALOGFLOW_CLIENT_EMAIL;

const client = new SessionsClient({
  credentials: {
    private_key: privateKey,
    client_email: clientEmail,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message is required' });

  const sessionId = uuidv4();
  const sessionPath = client.projectAgentSessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'id', // atau 'en-US' sesuai setup agent
      },
    },
  };

  try {
    const responses = await client.detectIntent(request);
    const result = responses[0].queryResult;

    res.status(200).json({
      reply: result.fulfillmentText,
    });
  } catch (error) {
    res.status(500).json({ error: 'Dialogflow error', detail: error.message });
  }
}
