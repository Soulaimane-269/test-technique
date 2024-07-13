const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productController');

// get all Products
router.get('/', productsController.getAllProducts); 

// get one Product  
router.get('/:id', productsController.getOneProduct);

// create Product
router.post('/', productsController.createProduct)

// modify Product
router.put('/:id', productsController.editProduct)

// delete Product
router.delete('/:id', productsController.deleteProduct)

module.exports = router

