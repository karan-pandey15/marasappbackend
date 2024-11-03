const express = require('express');
const { registerUser, authUser, getAttendedProfile } = require('../controllers/attendedController');
const { protect } = require('../middleware/attendedMiddleware');
const router = express.Router();

// Register route
router.post('/attendregister', registerUser);


// Login route
router.post('/attendedlogin', authUser);

// Get user profile
router.get('/AttendedProfile',protect, getAttendedProfile);

module.exports = router;
