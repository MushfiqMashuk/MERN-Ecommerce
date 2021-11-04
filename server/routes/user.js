const express = require("express");
const User = require("../models/User");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");
const { hash } = require("../utilities/hash");

const router = express.Router();

// Update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = hash(req.body.password);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true } // this will return us the updated user
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete user
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json("User deleted successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one user
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json("Error");
  }
});

module.exports = router;
