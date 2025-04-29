const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.getProfile = (req, res) => {
  res.json(req.user);
};

exports.updateEmail = async (req, res) => {
  const { email } = req.body;
  try {
    req.user.email = email;
    await req.user.save();
    res.json({ message: 'Email updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const isMatch = await req.user.comparePassword(currentPassword);
  if (!isMatch) return res.status(400).json({ message: 'Current password incorrect' });

  req.user.password = newPassword;
  await req.user.save();
  res.json({ message: 'Password updated' });
};
