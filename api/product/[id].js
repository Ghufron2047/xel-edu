import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import { verifyToken, isAdmin } from '@/utils/authMiddleware';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === 'GET') {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    return res.status(200).json(product);
  }

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded || !isAdmin(decoded)) return res.status(401).json({ error: 'Unauthorized' });

  if (req.method === 'PUT') {
    const { name, description, price, category } = req.body;
    try {
      const updated = await Product.findByIdAndUpdate(id, { name, description, price, category }, { new: true });
      return res.status(200).json({ message: 'Updated', product: updated });
    } catch {
      return res.status(500).json({ error: 'Failed to update product' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      await Product.findByIdAndDelete(id);
      return res.status(200).json({ message: 'Deleted' });
    } catch {
      return res.status(500).json({ error: 'Failed to delete product' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
