// controllers/bookingController.js
const AcceptedBooking = require('../models/acceptedBookingModel');
const Booking = require('../models/bookingModel');

// Create Booking
const createBooking = async (req, res) => {
    const { address, pinCode, serviceType, date, time } = req.body;

    try {
        const booking = await Booking.create({
            userId: req.user.id,
            address,
            pinCode,
            serviceType,
            date,
            time,
        });

        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ message: 'Error creating booking', error });
    }
};


// Get All Bookings
const getAllBookings = async (req, res) => {
    try { 
        const bookings = await Booking.find(); 
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
};


const deleteBooking = async (req, res) => {
    const { id } = req.params; // Get the booking id from the URL parameters

    try {
        // Find the booking by ID and delete it
        const booking = await Booking.findByIdAndDelete(id);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting booking', error });
    }
};
 

module.exports = { createBooking ,getAllBookings,deleteBooking};
