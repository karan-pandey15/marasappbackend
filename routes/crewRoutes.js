// routes/crewRoutes.js
const express = require('express');
const { createCrewBooking } = require('../controllers/crewController');
const router = express.Router();

// POST /api/bookings
router.post('/', createCrewBooking);

module.exports = router;
