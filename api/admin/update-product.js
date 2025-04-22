import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import verifyAdmin from '@/lib/verifyAdmin';

export default async function handler(req, res) {
  if (req.method !== 'PUT') return res.status(405).json({ error: 'Method not allowed' });

  const auth = await verifyAdmin(req, res);
  if (auth?.error) return res.status(403).json(auth);

  const { id, title, description, price } = req.body;

  await dbConnect();

  try {
    const updated = await Product.findByIdAndUpdate(id, { title, description, price }, { new: true });
    if (!updated) return res.status(404).json({ error: 'Product not found' });

    res.status(200).json({ message: 'Product updated', product: updated });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update product' });
  }
}
