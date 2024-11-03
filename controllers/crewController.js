// controllers/crewController.js
const CrewBooking = require('../models/CrewBooking');

// POST /api/crewbookings
exports.createCrewBooking = async (req, res) => {
  const { title, price, rating, reviews, description, address, date, time } = req.body;

  try {
    const booking = await CrewBooking.create({
      title,
      price,
      rating,
      reviews,
      description,
      address,
      date,
      time,
    });

    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
