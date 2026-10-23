const express = require("express");
const userModel = require("../models/user");

const router = express.Router();

router.post("/name", async (req, res) => {
  const { name } = req.body;
  try {
    const isUserAlreadyExist = await userModel.findOne({ name });
    if (isUserAlreadyExist) {
      return res.status(401).json({
        success: false,
        msg: "User already exist",
      });
    }
    const user = await userModel.create({
      name: name,
    });
    await user.save();
    return res.status(201).json({
      success: true,
      msg: "User created",
    });
  } catch (error) {
    console.log("I am error : ", error);
  }
});

module.exports = router;
