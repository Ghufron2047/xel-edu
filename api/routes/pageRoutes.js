const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');

// Landing page
router.get('/', (req, res) => {
  res.render('home');
});

// Produk
router.get('/products', (req, res) => {
  // nanti tarik data dari DB
  res.render('products/list', { products: [] }); // sementara kosong
});

// Produk detail
router.get('/products/:id', (req, res) => {
  res.render('products/detail');
});

// Checkout
router.get('/checkout', protect, (req, res) => {
  res.render('checkout/index');
});

// Profil
router.get('/profile', protect, (req, res) => {
  res.render('profile/index');
});

// Admin Dashboard
router.get('/admin', protect, (req, res) => {
  res.render('dashboard/index');
});
router.get('/admin/products', protect, (req, res) => {
  res.render('dashboard/products');
});

// Auth Pages
router.get('/login', (req, res) => {
  res.render('auth/login');
});
router.get('/register', (req, res) => {
  res.render('auth/register');
});
router.get('/reset', (req, res) => {
  res.render('auth/reset');
});

module.exports = router;
