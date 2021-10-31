const express = require("express");
const User = require("../models/User");
const { hash, decrypt } = require("../utilities/hash");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Register a user
router.post("/register", async (req, res) => {
  if (req.body.username && req.body.email && req.body.password) {
    const userModel = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash(req.body.password),
    });

    try {
      const savedUser = await userModel.save();

      res.status(200).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(500).json("Please fill-up all the fields!");
  }
});

// login route
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (user && user._id) {
      console.log(user);
      console.log(decrypt(user.password));
      if (req.body.password === decrypt(user.password)) {
        // Removing the password
        const { password, ...others } = user._doc;

        const signedToken = jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT.SECRET,
          {
            expiresIn: "3d",
          }
        );

        res.status(200).json({ ...others, signedToken });
      } else {
        res.status(401).json("Incorrect Password!");
      }
    } else {
      res.status(401).json("Incorrect Username!");
    }
  } catch (err) {
    res.status(500).json("There is a problem in the server side!");
  }
});

module.exports = router;
