const mongoose = require('mongoose');

const acceptedBookingSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    address: { type: String, required: true },
    pinCode: { type: String, required: true },
    serviceType: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
}, {
    timestamps: true,
});

const AcceptedBooking = mongoose.model('AcceptedBooking', acceptedBookingSchema);
module.exports = AcceptedBooking;
