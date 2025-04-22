import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import verifyAdmin from '@/lib/verifyAdmin';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const auth = await verifyAdmin(req, res);
  if (auth?.error) return res.status(403).json(auth);

  await dbConnect();

  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
