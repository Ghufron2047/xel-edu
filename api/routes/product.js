const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const protect = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/isAdmin');

router.post('/', protect, isAdmin, productController.createProduct);
router.put('/:id', protect, isAdmin, productController.updateProduct);
router.delete('/:id', protect, isAdmin, productController.deleteProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);

module.exports = router;
