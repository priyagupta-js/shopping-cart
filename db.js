const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async () => {

  // load env configuration
  dotenv.config();
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

  module.exports = connectDB;