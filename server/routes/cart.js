const express = require("express");
const Cart = require("../models/Cart");

const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

const router = express.Router();

// Create Cart

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();

    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Cart
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true } // this will return us the updated user
    );

    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Cart
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json("Cart deleted successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a User Cart
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });

    cart
      ? res.status(200).json(cart)
      : res.status(404).json("There is no Cart!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all the carts

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();

    carts
      ? res.status(200).json(carts)
      : res.status(404).json("There is no Cart!");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
