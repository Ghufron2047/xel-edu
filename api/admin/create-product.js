import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import verifyAdmin from '@/lib/verifyAdmin';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const auth = await verifyAdmin(req, res);
  if (auth?.error) return res.status(403).json(auth);

  await dbConnect();

  const { title, description, price } = req.body;

  try {
    const newProduct = new Product({ title, description, price });
    await newProduct.save();

    res.status(201).json({ message: 'Product created', product: newProduct });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create product' });
  }
}
