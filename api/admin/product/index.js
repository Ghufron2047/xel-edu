import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import { verifyToken } from '@/utils/authMiddleware';

export default async function handler(req, res) {
  await dbConnect();

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded || !decoded.isAdmin) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.status(200).json(products);
  }

  if (req.method === 'POST') {
    const { name, description, price, imageUrl } = req.body;
    if (!name || !price) return res.status(400).json({ error: 'Missing name or price' });

    try {
      const newProduct = await Product.create({ name, description, price, imageUrl });
      return res.status(201).json(newProduct);
    } catch {
      return res.status(500).json({ error: 'Failed to create product' });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
}
