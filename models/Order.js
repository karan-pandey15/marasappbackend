// models/Order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    { 
      productId: String,  // or mongoose.Schema.Types.ObjectId if you have a products collection
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  gstAmount: {
    type: Number,
    required: true,
  },
  grandTotal: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);
