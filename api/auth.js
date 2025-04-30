import connectDB from '../utils/db';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

connectDB();

export default async function handler(req, res) {
  const { method, url } = req;

  // === REGISTER ===
  if (method === 'POST' && url.includes('/register')) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Lengkapi semua field!' });
    }

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'Email sudah digunakan.' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, email, password: hashedPassword });

      return res.status(201).json({ success: true, message: 'Berhasil registrasi', user: newUser });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  // === LOGIN ===
  if (method === 'POST' && url.includes('/login')) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ success: false, message: 'Email tidak ditemukan' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ success: false, message: 'Password salah' });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      });

      return res.status(200).json({ success: true, token, user });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  // === RESET PASSWORD ===
  if (method === 'POST' && url.includes('/reset-password')) {
    const { email } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ success: false, message: 'User tidak ditemukan' });
      }

      const newPassword = Math.random().toString(36).slice(-8);
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Reset Password - Xel-Edu',
        html: `<p>Password baru kamu: <b>${newPassword}</b></p>`,
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json({ success: true, message: 'Password baru telah dikirim ke email.' });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  // === LOGOUT (dummy - frontend only) ===
  if (method === 'POST' && url.includes('/logout')) {
    return res.status(200).json({ success: true, message: 'Logout berhasil' });
  }

  return res.status(404).json({ success: false, message: 'Route tidak ditemukan' });
}
