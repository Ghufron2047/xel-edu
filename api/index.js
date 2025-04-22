const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files (tidak disarankan untuk di-serve langsung di serverless function, tapi untuk testing bisa)
app.use('/public', express.static(path.join(__dirname, '../public')));

// View engine tidak dibutuhkan di serverless, kecuali kamu render dari backend (jarang di Vercel)

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB Error:', err));

// Routes
const authRoutes = require('../routes/authRoutes');
const productRoutes = require('../routes/productRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);

// Export sebagai handler untuk Vercel
module.exports = app;
