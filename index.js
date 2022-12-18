//import express
const express = require("express");
//import dotenv
const dotenv = require("dotenv");
//define path to file
dotenv.config({ path: "./config.env" });

//import mongoose
const mongoose = require("mongoose");

//import signup and sigin routes
const authRoutes = require("./routes/authRoutes");
//import productROutes
const productRoutes = require("./routes/productRoutes");
//userRouts
const userRoutes = require("./routes/userRoutes");

//create express app
const app = express();
// define port
const port = process.env.PORT || 2000;
// used to get data from req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connection url
//connect to mongodbAtlas
mongoose
  .connect(process.env.db_Url)
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log(err);
  });
//routes
// auth routes
app.use(authRoutes);
app.use(userRoutes);
app.use(productRoutes);

// listen to app
app.listen(port, () => {
  console.log(`Server running at port:http://localhost:${port}`);
});
