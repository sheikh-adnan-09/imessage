const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Mongo DB Connection Error: ${err.message}`);
    // 1 -> failure, 0 -> success
    process.exit(1);
  }
}

module.exports = { connectDB };
