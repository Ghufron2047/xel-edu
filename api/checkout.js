import dbConnect from '@/lib/dbConnect';
import Checkout from '@/models/Checkout';
import { authMiddleware } from '@/lib/authMiddleware';
import nc from 'next-connect';

const handler = nc()
  .use(authMiddleware)
  .post(async (req, res) => {
    await dbConnect();
    const { fileUrl, totalAmount } = req.body;

    const checkout = await Checkout.create({
      user: req.user._id,
      fileUrl,
      totalAmount,
      status: 'Pending'
    });

    res.status(201).json({ success: true, data: checkout });
  })
  .get(async (req, res) => {
    await dbConnect();
    const transactions = await Checkout.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: transactions });
  });

export default handler;