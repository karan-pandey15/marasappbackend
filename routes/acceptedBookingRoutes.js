const express = require('express'); 
const { acceptBooking, getAllAcceptedBookings } = require('../controllers/acceptedBookingController');

const router = express.Router();

// Save accepted booking
router.post('/', acceptBooking);

// (Optional) Get all accepted bookings
router.get('/', getAllAcceptedBookings);

module.exports = router;
