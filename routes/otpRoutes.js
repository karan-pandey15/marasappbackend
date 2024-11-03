// routes/otpRoutes.js
const express = require('express');
require('dotenv').config();
const router = express.Router();
const { sendOTP, verifyOTP } = require('../controllers/otpController');

router.post('/send', sendOTP);
router.post('/verify', verifyOTP);

module.exports = router;
