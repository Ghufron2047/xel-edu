import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { verifyToken } from '@/utils/authMiddleware';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ error: 'Unauthorized' });

  const { newEmail } = req.body;

  if (!newEmail) return res.status(400).json({ error: 'Email cannot be empty' });

  try {
    await User.findByIdAndUpdate(decoded.id, { email: newEmail });
    res.status(200).json({ message: 'Email updated successfully' });
  } catch {
    res.status(500).json({ error: 'Failed to update email' });
  }
}
