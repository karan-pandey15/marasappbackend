// // routes/orderRoutes.js

// const express = require('express');
// const { createOrder } = require('../controllers/orderController');

// const router = express.Router();

// // Route to place an order
// router.post('/checkout', createOrder);

// module.exports = router;



const express = require("express");
const { createOrder, createRazorpayOrder } = require("../controllers/orderController");

const router = express.Router();

router.post("/checkout", createOrder);
router.post("/create-order", createRazorpayOrder); // New endpoint to create Razorpay order

module.exports = router;
