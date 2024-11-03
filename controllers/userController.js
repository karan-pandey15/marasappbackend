// controllers/userController.js
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// Generate unique userId (based on name and phone)
const generateUserId = (name, phone) => {
    const shortName = name.substring(0, 4).toLowerCase();
    const shortPhone = phone.substring(0, 4);
    return `${shortName}${shortPhone}`;
};

// Register User
const registerUser = async (req, res) => {
    const { name, email, phone, address, city, pin, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const userId = generateUserId(name, phone);

    const user = await User.create({
        name, email, phone, address, city, pin, password, userId,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            userId: user.userId,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
};

// Login User
const authUser = async (req, res) => {
    const { emailOrUserId, password } = req.body;

    let user;

    if (emailOrUserId.includes('@')) {
        user = await User.findOne({ email: emailOrUserId });
    } else {
        user = await User.findOne({ userId: emailOrUserId });
    }

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            userId: user.userId,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
};

const logoutUser = async (req, res) => {
    try {  
        res.clearCookie('token'); // Assuming the JWT is stored in a cookie named 'token'

        // Respond with a success message
        res.json({
            Status: 'Success',
            Message: 'Logout successful',
        });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({
            Status: 'Failed',
            Message: 'Internal server error',
        });
    }
};
// Get User Profile
const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user.id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            city: user.city,
            pin: user.pin,
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

module.exports = { registerUser, authUser, getUserProfile ,logoutUser};
