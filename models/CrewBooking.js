// models/CrewBooking.js
const mongoose = require('mongoose');

const crewBookingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  }
});

const CrewBooking = mongoose.model('CrewBooking', crewBookingSchema);

module.exports = CrewBooking;
