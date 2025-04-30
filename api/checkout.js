import connectDB from '../utils/db';
import Checkout from '../models/Checkout';

connectDB();

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    const { proofUrl } = req.body;

    if (!proofUrl) {
      return res.status(400).json({ success: false, message: 'URL bukti wajib diisi' });
    }

    try {
      const newCheckout = await Checkout.create({
        proofUrl,
        status: 'Pending',
        createdAt: new Date(),
      });

      return res.status(201).json({ success: true, message: 'Checkout berhasil dikirim', data: newCheckout });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  return res.status(405).json({ success: false, message: 'Method tidak diizinkan' });
}
import Notification from "@/models/Notification";
await Notification.create({ message: `Transaksi baru dari ${user.email}` });
