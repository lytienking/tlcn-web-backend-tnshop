const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    userID: String,
    totalPrice: { Number, default: 0 },
    feeDelivery: Number,
    productList: Array,
});
const Cart = mongoose.model("Cart", cartSchema, "carts");
module.exports = Cart;