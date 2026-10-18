const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      console.log("URI is not available");
      return;
    }
    await mongoose.connect(uri);
    console.log("DB connected successfully!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
