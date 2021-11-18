const express = require("express");
const Product = require("../models/Product");

const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");
const { hash } = require("../utilities/hash");

const router = express.Router();

// Create product

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = Product(req.body);

  try {
    const savedProduct = await newProduct.save();

    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true } // this will return us the updated user
    );

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Delete Product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json("Product deleted successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// // find a product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    product
      ? res.status(200).json(product)
      : res.status(404).json("Product Not Found!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Get all products
router.get("/", async (req, res) => {
  const newQuery = req.query.new;
  const categoryQuery = req.query.category;

  try {
    let products;

    if (newQuery) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (categoryQuery) {
      products = await Product.find({
        categories: { $in: [categoryQuery] }, // If the field is an Array
      });
    } else {
      console.log("normal");
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Get stats

// router.get("/stats", async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//   try {
//     const data = await User.aggregate([
//       { $match: { createdAt: { $gte: lastYear } } },

//       //select * from users where createdAt >= lastYear groupBy month

//       { $project: { month: { $month: "$createdAt" } } }, // Created a new variable called month

//       { $group: { _id: "$month", totalUser: { $sum: 1 } } },
//     ]);

//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
