import { GoogleAuth } from 'google-auth-library';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { query } = req.body;
  const auth = new GoogleAuth({ scopes: 'https://www.googleapis.com/auth/cloud-platform' });
  const client = await auth.getClient();

  const projectId = await auth.getProjectId();
  const url = `https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/123456789:detectIntent`;

  const response = await client.request({
    url,
    method: 'POST',
    data: {
      queryInput: {
        text: {
          text: query,
          languageCode: 'id',
        },
      },
    },
  });

  res.status(200).json(response.data);
}
