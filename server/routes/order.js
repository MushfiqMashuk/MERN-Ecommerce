const express = require("express");
const Order = require("../models/Order");

const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

const router = express.Router();

// Create Order

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const newOrder = Order(req.body);

  try {
    const savedOrder = await newOrder.save();

    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Order
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true } // this will return us the updated user
    );

    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.status(200).json("Order deleted successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// find User Orders
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.id });

    orders
      ? res.status(200).json(orders)
      : res.status(404).json("There is no Order!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all the Orders

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();

    orders
      ? res.status(200).json(orders)
      : res.status(404).json("There is no Order!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Monthly Income

router.get("/income", async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(lastMonth.setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      { $project: { month: "$createdAt", sales: "$amount" } },
      { $group: { _id: "$month", total: { $sum: "$sales" } } },
    ]);

    income
      ? res.status(200).json(income)
      : res.status(404).json("No income to show!");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
