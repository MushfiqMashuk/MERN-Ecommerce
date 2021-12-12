const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const cors = require("cors");

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

/* To fix a server error. (...has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource) */
app.use(
  cors({
    origin: "*",
  })
);

// Mounting sub apps to their respective routes
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening to port ${process.env.PORT}...`);
});
