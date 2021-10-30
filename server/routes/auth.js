const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  const userModel = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await userModel.save();

    res.status(200).json(savedUser);
  } catch (err) {
    res.status(5000).json(err);
  }
});

module.exports = router;
