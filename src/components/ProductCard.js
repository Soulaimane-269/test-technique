import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ProductDialog from './ProductDialog';

function ProductCard({ product, onSave, onDelete }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Price: ${product.price}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Warranty Years: {product.warranty_years}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Available: {product.available ? 'Yes' : 'No'}
        </Typography>
        <Button onClick={handleDialogOpen} variant="outlined" color="primary">
          Edit
        </Button>
        <Button onClick={() => onDelete(product._id)} variant="outlined" color="secondary">
          Delete
        </Button>
      </CardContent>
      <ProductDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        product={product}
        onSave={onSave}
        onDelete={onDelete}
      />
    </Card>
  );
}

export default ProductCard;
