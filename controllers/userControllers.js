// import bcrypt to hash passwrord
const CryptoJS = require("crypto-js");
//import env
const dotenv = require("dotenv");
dotenv.config();
// import userModel
const userModel = require("../models/userModel");
// define controllers
module.exports = {
  updateProfile: async (req, res) => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASSWORD_SECRET
      ).toString();
    }

    try {
      const updatedUser = await userModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteById: async (req, res) => {
    try {
      const deletedUser = await userModel.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete user", deletedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getById: async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      const { password, ...details } = user._doc;
      res.status(200).json({ ...details });
    } catch (err) {
      res.status(500).json(err);
    }
  },

};
