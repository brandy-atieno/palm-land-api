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
    try{
        const savedProduct=  await product.save()
        res.status(200).json(savedProduct)

    }
    catch(err){
        res.status(500).json(err);

    }

  },
  getAllProducts: async (req, res) => {
    try{
        const products= await productModel.find({});
        res.status(200).json(products);

}
  catch(err){
    res.status(404).json(err);
}
},
getById: async (req,res)=>{
  const {id}=req.params;
  try{
    const product = await productModel.findBById(id);
    res.status(200).json(product);
  }
  catch(err){
    res.status(404).json(err);
  }
}
}