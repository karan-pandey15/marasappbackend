const Attended = require('../models/attendedModel');
const jwt = require('jsonwebtoken');

// Helper function to generate a userId
const generateUserId = (name, phone) => {
  return name.toLowerCase() + phone.substring(0, 4);
};

// Helper function to generate a JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Register a new user
exports.registerUser = async (req, res) => {
  const { name, email, phone, password, qualification, address, panNumber, aadharNumber, gender, religion, city, state, pinCode, fatherName, accountDetails } = req.body;

  try {
    const userExists = await Attended.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Generate a unique userId
    const userId = generateUserId(name, phone);

    const user = await Attended.create({
      name,
      email,
      phone,
      password,
      userId,
      qualification,
      address,
      panNumber,
      aadharNumber,
      gender,
      religion,
      city,
      state,
      pinCode,
      fatherName,
      accountDetails,
    });

    res.status(201).json({
      _id: user._id,
      userId: user.userId,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Login user with userId/email and password
exports.authUser = async (req, res) => {
  const { login, password } = req.body;

  try {
    const user = await Attended.findOne({
      $or: [{ email: login }, { userId: login }],
    });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        userId: user.userId,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid login or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get user profile
exports.getAttendedProfile = async (req, res) => {
  try {
    const user = await Attended.findById(req.user.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
