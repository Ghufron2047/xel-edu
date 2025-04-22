import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { id } = req.query;

  await dbConnect();

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
}
