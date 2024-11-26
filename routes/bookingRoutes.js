// // routes/bookingRoutes.js
// const express = require('express');
// const { createBooking, getAllBookings, acceptBooking } = require('../controllers/bookingController');
// const { protect } = require('../middleware/authMiddleware');

// const router = express.Router();

// router.post('/', protect, createBooking);
// // Get all bookings
// router.get('/', getAllBookings);

 

// module.exports = router;


// routes/bookingRoutes.js
const express = require('express');
const { createBooking, getAllBookings, deleteBooking } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Route to create a booking
router.post('/', protect, createBooking);

// Route to get all bookings
router.get('/', getAllBookings);

// Route to delete a booking
router.delete('/:id', deleteBooking);

module.exports = router;
