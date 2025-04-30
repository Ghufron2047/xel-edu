import connectDB from '../utils/db';
import Checkout from '../models/Checkout';
import User from '../models/User';
import jwt from 'jsonwebtoken';

connectDB();

export default async function handler(req, res) {
  const { method } = req;

  // === HANYA PATCH YANG DIPERBOLEHKAN ===
  if (method !== 'PATCH') {
    return res.status(405).json({ success: false, message: 'Method tidak diizinkan' });
  }

  // === VERIFIKASI TOKEN ADMIN ===
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Token tidak tersedia' });
  }

  const token = authHeader.split(' ')[1];
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Token tidak valid' });
  }

  const user = await User.findById(decoded.userId);
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Hanya admin yang boleh mengubah status' });
  }

  // === UBAH STATUS ===
  const { id, status } = req.body;
  if (!id || !status) {
    return res.status(400).json({ success: false, message: 'ID dan status wajib diisi' });
  }

  try {
    const checkout = await Checkout.findById(id);
    if (!checkout) {
      return res.status(404).json({ success: false, message: 'Transaksi tidak ditemukan' });
    }

    checkout.status = status;
    await checkout.save();

    return res.status(200).json({ success: true, message: 'Status transaksi diperbarui' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}
