import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { verifyToken } from '@/utils/authMiddleware';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  await dbConnect();

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ error: 'Unauthorized' });

  const userId = decoded.id;

  if (req.method === 'GET') {
    try {
      const user = await User.findById(userId).select('-password');
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.status(200).json(user);
    } catch {
      res.status(500).json({ error: 'Something went wrong' });
    }
  }

  else if (req.method === 'PUT') {
    const { email, password } = req.body;

    if (!email && !password) {
      return res.status(400).json({ error: 'Nothing to update' });
    }

    try {
      const updateData = {};
      if (email) updateData.email = email;
      if (password) updateData.password = await bcrypt.hash(password, 12);

      const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true }).select('-password');
      res.status(200).json({ message: 'Profile updated', user: updatedUser });
    } catch {
      res.status(500).json({ error: 'Failed to update profile' });
    }
  }

  else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
