import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { verifyToken } from '@/utils/authMiddleware';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const user = await User.findById(decoded.id).select('email');
    res.status(200).json(user);
  } catch {
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
}
