// server/db.js
require('dotenv').config();
const mongoose = require('mongoose');

const { MONGO_URI } = process.env;
if (!MONGO_URI) {
  console.error('❌  Missing MONGO_URI in .env');
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser:    true,
      useUnifiedTopology: true,
    });
    console.log('🔗 MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
