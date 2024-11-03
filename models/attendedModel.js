const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const attendedSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  userId: { type: String, unique: true }, // userId generated from name and phone
  password: { type: String, required: true },
  fatherName: { type: String },
  qualification: { type: String },
  address: { type: String },
  panNumber: { type: String },
  aadharNumber: { type: String },
  gender: { type: String },
  religion: { type: String },
  city: { type: String },
  state: { type: String },
  pinCode: { type: String },
  accountDetails: {
    bankName: { type: String },
    accountNumber: { type: String },
    branchName: { type: String },
    ifscCode: { type: String }
  },
  createdAt: { type: Date, default: Date.now },
});

// Password hashing middleware
attendedSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to check password
attendedSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Attended = mongoose.model('Attended', attendedSchema);
module.exports = Attended;
