import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function AddProductForm({ open, onClose, onAdd }) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    rating: '',
    warranty_years: '',
    available: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAdd = () => {
    onAdd(newProduct);
    setNewProduct({
      name: '',
      price: '',
      rating: '',
      warranty_years: '',
      available: false,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Product</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter the details of the new product below.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Product Name"
          type="text"
          fullWidth
          value={newProduct.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="price"
          label="Price"
          type="number"
          fullWidth
          value={newProduct.price}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="rating"
          label="Rating"
          type="number"
          fullWidth
          value={newProduct.rating}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="warranty_years"
          label="Warranty Years"
          type="number"
          fullWidth
          value={newProduct.warranty_years}
          onChange={handleChange}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={newProduct.available}
              onChange={handleChange}
              name="available"
              color="primary"
            />
          }
          label="Available"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddProductForm;
