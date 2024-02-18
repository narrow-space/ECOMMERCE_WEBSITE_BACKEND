const mongoose = require("mongoose");
const productCategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    catimage: {
      type: String,
      require: true,
    },
    products: [
      {
        type: Object,
        ref: "ProductModel",
      },
    ],
    description: {
      type: String,
      required: true,
    },

    brands: [
      { 
      type: Object,
      
      ref: "ProductBrand" }], // Reference to Brand model
  },

  { timestamps: true }
);

////modal
const categorydb = new mongoose.model("categoryModels", productCategorySchema);

module.exports = categorydb;
