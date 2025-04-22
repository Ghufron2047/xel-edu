const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const protect = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/isAdmin');

router.put('/promote/:id', protect, isAdmin, adminController.makeAdmin);

module.exports = router;
