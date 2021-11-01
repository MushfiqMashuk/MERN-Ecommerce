const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: "Please enter your username",
      unique: true,
    },
    email: {
      type: String,
      required: "Please enter your email",
      unique: true,
    },
    password: { type: String, required: "Please enter your password" },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Users", userSchema);
