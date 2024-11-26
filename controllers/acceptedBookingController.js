const AcceptedBooking = require("../models/acceptedBookingModel");

 
// Create Accepted Booking
const acceptBooking = async (req, res) => {
    const { userId, address, pinCode, serviceType, date, time } = req.body;

    try {
        const acceptedBooking = await AcceptedBooking.create({
            userId,
            address,
            pinCode,
            serviceType,
            date,
            time,
        });

        res.status(201).json(acceptedBooking);
    } catch (error) {
        res.status(400).json({ message: 'Error accepting booking', error });
    }
};

// Get All Accepted Bookings (optional, if needed)
const getAllAcceptedBookings = async (req, res) => {
    try {
        const acceptedBookings = await AcceptedBooking.find();
        res.status(200).json(acceptedBookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching accepted bookings', error });
    }
};

module.exports = { acceptBooking, getAllAcceptedBookings };
