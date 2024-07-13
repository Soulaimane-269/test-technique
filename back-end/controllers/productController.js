const Product = require("../models/productModel");

exports.getAllProducts = async (req, res) => {
    try {
      const Products = await Product.find();
      res.status(200).json(Products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

exports.getOneProduct = async (req, res) => {
    try {
        const Product = await Product.findById(req.params.id);
        if (!Product) return res.status(404).json("Product not found.");
        res.status(200).json(Product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
      const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        rating: req.body.rating,
        warranty_years: req.body.warranty_years,
        available: req.body.available,
      });
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

exports.editProduct = async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true});
        if (!updatedProduct) return res.status(404).json("Product not found.");
        res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) return res.status(404).json("Product not found.");
      res.status(200).json('Product deleted successfully');
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};