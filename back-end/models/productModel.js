const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
    name: {
      type : String,
      required : true
    },
    price : {
      type : Number,
      required : true
    },
    rating : {
      type : Number,
      required : true
    },
    warranty_years : {
      type : Number,
      required : true
    },
    available : {
      type : Boolean,
      required : true
    }
      
    },
    {timestamps: true}
  )
  
  const product = mongoose.model('Product', productSchema);
  module.exports = product;