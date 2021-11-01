const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");

// configure dotenv file
dotenv.config();

// Database connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_URL)
  .then(() => console.log("Database connection succeded!"))
  .catch((err) => console.log(err));

const app = express();

// Preparing my app to take json object
app.use(express.json());

// Mounting sub apps to their respective routes
app.use("/auth", authRouter);
app.use("/user", userRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening to port ${process.env.PORT}...`);
});
