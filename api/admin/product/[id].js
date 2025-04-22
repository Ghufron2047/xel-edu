import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import { verifyToken } from '@/utils/authMiddleware';

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded || !decoded.isAdmin) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    if (req.method === 'GET') {
      const product = await Product.findById(id);
      return res.status(200).json(product);
    }

    if (req.method === 'PUT') {
      const { name, description, price, imageUrl } = req.body;
      const updated = await Product.findByIdAndUpdate(id, { name, description, price, imageUrl }, { new: true });
      return res.status(200).json(updated);
    }

    if (req.method === 'DELETE') {
      await Product.findByIdAndDelete(id);
      return res.status(200).json({ message: 'Deleted successfully' });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch {
    res.status(500).json({ error: 'Failed to process request' });
  }
}
