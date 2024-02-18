// productBrandModel.js

const mongoose = require('mongoose');

// Define the schema for a product brand
const productBrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  products: [
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductModel"
    }
  ],
  
 
},{timestamps:true});

// Create the Mongoose model for a product brand
const brandDb = mongoose.model('ProductBrand', productBrandSchema);

module.exports = brandDb;
