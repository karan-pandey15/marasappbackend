// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bookingRoutes = require("./routes/bookingRoutes")
const userRoutes = require('./routes/userRoutes');
const attendedRoutes = require('./routes/attendedRoutes');
const orderRoutes = require("./routes/orderRoutes");
const crewRoutes = require("./routes/crewRoutes")
const otpRoutes = require("./routes/otpRoutes")
dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/attended', attendedRoutes);
app.use('/api/crewbookings', crewRoutes);

app.use('/api/orders', orderRoutes);  

app.use('/api/otp', otpRoutes);
const PORT = process.env.PORT || 6001;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
