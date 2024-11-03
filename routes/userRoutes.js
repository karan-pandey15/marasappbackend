// routes/userRoutes.js
const express = require('express');
const { registerUser, authUser, getUserProfile, logoutUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.get('/cust_logout', logoutUser);
module.exports = router;
