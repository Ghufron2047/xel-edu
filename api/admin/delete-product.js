import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import verifyAdmin from '@/lib/verifyAdmin';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') return res.status(405).json({ error: 'Method not allowed' });

  const auth = await verifyAdmin(req, res);
  if (auth?.error) return res.status(403).json(auth);

  const { id } = req.query;

  await dbConnect();

  try {
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Product not found' });

    res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
}
