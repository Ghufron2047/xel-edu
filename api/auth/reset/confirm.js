import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  await dbConnect();

  const { token, newPassword } = req.body;
  if (!token || !newPassword) return res.status(400).json({ error: 'All fields required' });

  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ error: 'Invalid or expired token' });

    const hashed = await bcrypt.hash(newPassword, 12);
    user.password = hashed;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to reset password' });
  }
}
