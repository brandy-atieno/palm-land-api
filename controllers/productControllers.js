// import bcrypt to hash passwrord
const CryptoJS = require("crypto-js");
//import env
const dotenv = require("dotenv");
dotenv.config();
// import userModel
const productModel = require("../models/productModel");
// define controllers
module.exports = {
  postProducts: async (req, res) => {
    const product = new productModel(req.body);
    try {
      const savedProduct = await product.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateProduct: async (req, res) => {
    try {
      const updatedProduct = await productModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await productModel.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await productModel.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(404).json(err);
    }
  },
  getProducts: async (req, res) => {
    const categoryQuery = req.query.category;
    try {
      let products;
      if (categoryQuery) {
        products = await productModel.find({
          category: {
            $in: [categoryQuery],
          },
        });
      } else {
        products = await productModel.find({});
      }
      res.status(200).json(products);
      console.log(products);
    } catch (err) {
      res.status(404).json(err);
    }
  },
 
};
