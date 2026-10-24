const express = require("express");
const userModel = require("../models/user");
const connectDB = require("../db/db");

const router = express.Router();

router.post("/name", async (req, res) => {
  try {
    
    await connectDB();
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        msg: "Name is required",
      });
    }

    const existingUser = await userModel.findOne({ name });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        msg: "User already exists",
      });
    }

    await userModel.create({ name });

    return res.status(201).json({
      success: true,
      msg: "User created",
    });
  } catch (error) {
    console.error("User route error:", error.message);

    return res.status(500).json({
      success: false,
      msg: "Request failed",
    });
  }
});

module.exports = router;
