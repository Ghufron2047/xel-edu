import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  if (method === 'POST') {
    const { mode, email, password } = req.body;
    if (!mode || !email || !password) return res.status(400).json({ success: false, message: 'Incomplete' });

    if (mode === 'login') {
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
      return res.status(200).json({ success: true, token, user });
    } else if (mode === 'register') {
      const exists = await User.findOne({ email });
      if (exists) return res.status(409).json({ success: false, message: 'Email taken' });

      const hashed = await bcrypt.hash(password, 10);
      const user = await User.create({ email, password: hashed });
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
      return res.status(201).json({ success: true, token, user });
    }
  } else if (method === 'PUT') {
    // reset password / update profile
    const { token, newEmail, newPassword } = req.body;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) return res.status(404).json({ success: false, message: 'User not found' });

      if (newEmail) user.email = newEmail;
      if (newPassword) user.password = await bcrypt.hash(newPassword, 10);
      await user.save();
      return res.status(200).json({ success: true, user });
    } catch {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }
  }

  res.status(405).json({ success: false, message: 'Method not allowed' });
}
