import connectDB from '../utils/db';
import Product from '../models/Product';
import User from '../models/User';
import jwt from 'jsonwebtoken';

connectDB();

export default async function handler(req, res) {
  const { method } = req;

  // === GET ALL PRODUCTS (PUBLIC) ===
  if (method === 'GET') {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, products });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  // === TAMBAH / HAPUS HANYA ADMIN ===
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
    return res.status(403).json({ success: false, message: 'Hanya admin yang diizinkan' });
  }

  // === TAMBAH PRODUK ===
  if (method === 'POST') {
    const { title, description, price } = req.body;
    if (!title || !description || !price) {
      return res.status(400).json({ success: false, message: 'Field tidak lengkap' });
    }

    try {
      const newProduct = await Product.create({ title, description, price });
      return res.status(201).json({ success: true, product: newProduct });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  // === HAPUS PRODUK ===
  if (method === 'DELETE') {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ success: false, message: 'ID produk diperlukan' });
    }

    try {
      await Product.findByIdAndDelete(id);
      return res.status(200).json({ success: true, message: 'Produk dihapus' });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  return res.status(405).json({ success: false, message: 'Method tidak diizinkan' });
}
