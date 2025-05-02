import dbConnect from '@/lib/dbConnect';
import Checkout from '@/models/Checkout';
import { authMiddleware, isAdmin } from '@/lib/authMiddleware';
import nc from 'next-connect';

const handler = nc()
  .use(authMiddleware)
  .use(isAdmin)
  .put(async (req, res) => {
    await dbConnect();
    const { id, status } = req.body;
    const trx = await Checkout.findByIdAndUpdate(id, { status }, { new: true });
    if (!trx) return res.status(404).json({ success: false, message: 'Not found' });

    res.status(200).json({ success: true, data: trx });
  })
  .get(async (req, res) => {
    await dbConnect();
    const allTrx = await Checkout.find().populate('user').sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: allTrx });
  });

export default handler;
