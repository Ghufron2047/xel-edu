const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

router.get('/profile', protect, userController.getProfile);
router.put('/profile/email', protect, userController.updateEmail);
router.put('/profile/password', protect, userController.updatePassword);

module.exports = router;
