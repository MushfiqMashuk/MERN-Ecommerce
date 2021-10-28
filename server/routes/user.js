const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("This is a middleware!");
  
  next();
});

router.get("/usertest", (req, res) => {
  res.send("Successfull!");
});



module.exports = router;
