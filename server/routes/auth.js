const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Register a user
router.post("/register", async (req, res) => {
  if (req.body.username && req.body.email && req.body.password) {
    const userModel = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    try {
      const savedUser = await userModel.save();
      
      res.status(200).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(500).json({
      error: "Please fill-up all the fields!",
    });
  }
});

module.exports = router;
