const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: Array,
    size: String,
    color: String,
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = model("Products", ProductSchema);
