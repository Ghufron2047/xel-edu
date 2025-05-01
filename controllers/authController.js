// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    res.status(400).json({ message: 'Registration failed', error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });
    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Login error', error: err.message });
  }
};

exports.resetPassword = async (req, res) => {
  res.json({ message: 'Reset password belum diimplementasi' });
};
