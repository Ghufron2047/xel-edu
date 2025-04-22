import dbConnect from '@/lib/dbConnect';
import Transaction from '@/models/Transaction';
import { verifyToken } from '@/utils/authMiddleware';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded || decoded.role !== 'admin') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { transactionId, status } = req.body;

  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  try {
    await Transaction.findByIdAndUpdate(transactionId, { status });
    res.status(200).json({ message: 'Transaction updated' });
  } catch {
    res.status(500).json({ error: 'Failed to update transaction' });
  }
}
