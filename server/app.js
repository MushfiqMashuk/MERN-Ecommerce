const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_CONNECTION_URL)
  .then(() => console.log("Database connection succeded!"))
  .catch((err) => console.log(err));

const app = express();

app.use("/user", userRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening to port ${process.env.PORT}...`);
});
