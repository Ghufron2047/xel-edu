const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController');
const upload = require('../middleware/upload');

router.post('/', upload.single('proof'), checkoutController.submitCheckout);

module.exports = router;
