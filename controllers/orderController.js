// // controllers/orderController.js

// const Order = require('../models/Order');

// exports.createOrder = async (req, res) => {
//   try {
//     const { items, totalPrice, gstAmount, grandTotal } = req.body;

//     if (!items || !totalPrice || !gstAmount || !grandTotal) {
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     const newOrder = new Order({
//       items,
//       totalPrice,
//       gstAmount,
//       grandTotal,
//     });

//     const savedOrder = await newOrder.save();

//     res.status(201).json({ message: 'Order placed successfully', order: savedOrder });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error creating order', error });
//   }
// };


const Razorpay = require("razorpay"); // Import Razorpay
const Order = require('../models/Order');

// Order creation for database entry
exports.createOrder = async (req, res) => {
  try {
    const { items, totalPrice, gstAmount, grandTotal } = req.body;

    if (!items || !totalPrice || !gstAmount || !grandTotal) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newOrder = new Order({
      items,
      totalPrice,
      gstAmount,
      grandTotal,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully', order: savedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating order', error });
  }
};

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: "rzp_live_5PPrr1z0Y5RqDP",
  key_secret: "e9ECp41GXpsAhkozANAvwUCS",
});

// Razorpay order creation for payment
exports.createRazorpayOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount: amount * 100, // Amount in paise (1 INR = 100 paise)
      currency: "INR",
      receipt: `receipt_order_${Math.floor(Math.random() * 1000)}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json({ order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating Razorpay order", error });
  }
};
