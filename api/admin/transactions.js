import dbConnect from '@/lib/dbConnect';
import Transaction from '@/models/Transaction';
import { verifyToken } from '@/utils/authMiddleware';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded || decoded.role !== 'admin') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const transactions = await Transaction.find()
      .populate('userId', 'email')
      .populate('productId', 'title price')
      .sort({ createdAt: -1 });

    res.status(200).json(transactions);
  } catch {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
}
