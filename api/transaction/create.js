// api/transaction/create.js
import dbConnect from '@/lib/dbConnect';
import Transaction from '@/models/Transaction';
import { verifyToken } from '@/utils/authMiddleware';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { productId, imageUrl } = req.body;

  if (!productId || !imageUrl) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const newTransaction = await Transaction.create({
      userId: decoded.id,
      productId,
      imageUrl,
    });

    res.status(201).json({ message: 'Transaction created', transaction: newTransaction });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create transaction' });
  }
}
