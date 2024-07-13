const express = require('express');

const router = express.Router();

const productRoutes = require('./routes/productRoutes'); 

router.get('/' , (req,res) =>{
    res.send('welcome to API')
})

router.use('/products', productRoutes);

module.exports = router;