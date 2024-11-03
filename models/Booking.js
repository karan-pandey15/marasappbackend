 // models/Attended.js
const mongoose = require('mongoose');

const attendedSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  pickupAddress: {
    type: String,
    required: true,
  },
  dropAddress: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Attended', attendedSchema);
