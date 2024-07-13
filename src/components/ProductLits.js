import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ProductCard from './ProductCard';
import AddProductForm from './AddProductForm';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../api';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [addFormOpen, setAddFormOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        setError('Failed to fetch products.');
      }
    };

    fetchProducts();
  }, []);

  const handleSave = async (updatedProduct) => {
    try {
      const savedProduct = await updateProduct(updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === savedProduct._id ? savedProduct : product
        )
      );
    } catch (error) {
      setError('Failed to update product.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
    } catch (error) {
      setError('Failed to delete product.');
    }
  };

  const handleAdd = async (newProduct) => {
    try {
      const addedProduct = await createProduct(newProduct);
      setProducts((prevProducts) => [...prevProducts, addedProduct]);
    } catch (error) {
      setError('Failed to add product.');
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button variant="contained" color="primary" onClick={() => setAddFormOpen(true)}>
        Add Product
      </Button>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={4}>
            <ProductCard product={product} onSave={handleSave} onDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
      <AddProductForm open={addFormOpen} onClose={() => setAddFormOpen(false)} onAdd={handleAdd} />
    </div>
  );
}

export default ProductList;
