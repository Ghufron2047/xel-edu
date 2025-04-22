import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import { verifyToken, isAdmin } from '@/utils/authMiddleware';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const products = await Product.find({});
    return res.status(200).json(products);
  }

  if (req.method === 'POST') {
    const token = req.headers.authorization?.split(' ')[1];
    const decoded = verifyToken(token);
    if (!decoded || !isAdmin(decoded)) return res.status(401).json({ error: 'Unauthorized' });

    const { name, description, price, category } = req.body;

    try {
      const product = new Product({ name, description, price, category });
      await product.save();
      return res.status(201).json({ message: 'Product created', product });
    } catch {
      return res.status(500).json({ error: 'Failed to create product' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
