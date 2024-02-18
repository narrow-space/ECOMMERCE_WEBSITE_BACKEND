const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        require: true
    },




    images: [{
        type: String,
        require:true
       
    }]

    ,
    type: {
        type: String,
        required: true
    },
    sizes: {
        type: [String],
        // enum:["S","L","M","XL","XXL","3XL"],
        // enum:["40","41","42","43","44","45"],
        required: true
    },

    colors: {
        type: [String],
        required: true
    },

    discount: {
        type: Number,
        rquired: true
    },
    quantity: {
        type: Number,
        rquired: true
    },
    description: {
        type: String,
        rquired: true
    },
    categoryid: {
        type: String,
   
        rquired: true,
    },
    // category:{
    //     type:String,
    //     ref:"categoryModels",
    //     rquired: true
    // }
}, { timestamps: true })


const productDb = new mongoose.model("ProductModel", productSchema)


module.exports = productDb