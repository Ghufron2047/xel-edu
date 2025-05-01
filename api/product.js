import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import { authMiddleware, isAdmin } from '@/lib/authMiddleware';
import nc from 'next-connect';

const handler = nc()
  .get(async (req, res) => {
    await dbConnect();
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: products });
  })
  .use(authMiddleware)
  .use(isAdmin)
  .post(async (req, res) => {
    await dbConnect();
    const { title, description, price, imageUrl } = req.body;
    const product = await Product.create({ title, description, price, imageUrl });
    res.status(201).json({ success: true, data: product });
  })
  .delete(async (req, res) => {
    await dbConnect();
    const { id } = req.body;
    const result = await Product.findByIdAndDelete(id);
    if (!result) return res.status(404).json({ success: false, message: 'Product not found' });
    res.status(200).json({ success: true, message: 'Product deleted' });
  });

export default handler;
