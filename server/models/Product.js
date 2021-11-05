const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: String,
    category: String,
    company: String,
  },
  { timestamps: true }
);

module.exports = model("Products", ProductSchema);
