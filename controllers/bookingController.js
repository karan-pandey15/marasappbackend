// controllers/bookingController.js
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

module.exports = { createBooking };
