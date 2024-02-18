const mongoose = require("mongoose")


const cartSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    productid: {
        type: Object,
        required: true
    },
    quantity: {
        type: Number
    }
}, { timestamps: true });
const cartDb = new mongoose.model("carts", cartSchema)
module.exports = cartDb