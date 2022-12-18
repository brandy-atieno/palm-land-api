// import bcrypt to hash passwrord
const CryptoJS = require("crypto-js");
//import env
const dotenv = require("dotenv");
dotenv.config();
//import jwt
const jwt=require('jsonwebtoken');
// import userModel
const userModel = require("../models/userModel");
// define controllers
module.exports = {
  signUp: async (req, res) => {
    const newUser = new userModel({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(req.body.password,process.env.PASSWORD_SECRET).toString()
    });
    try{
        const savedUser=  await newUser.save()
res.status(200).json(savedUser)

    }
    catch(err){
        res.status(500).json(err);

    }

  },
  logIn: async (req, res) => {
    try{
    const user = await userModel.findOne({ email : req.body.email});
   if( !user ){res.status(401).json("Wrong email");}

  const hashedPassword = CryptoJS.AES.decrypt(user.password,process.env.PASSWORD_SECRET);
  const initialPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
  const inputPassword = req.body.password;
   if( initialPassword != inputPassword ){
     res.status(401).json("Wrong Password");
    }
    const accessToken= jwt.sign({
      id:user._id,
      isAdmin:user.isAdmin
    },
      process.env.JWT_KEY,
      {expiresIn:'24hrs'})
     const {password, ...details } = user._doc; 
          res.status(200).json({...details,accessToken});
}
  catch(err){
    console.log(err);
  }
},
getAll: async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
},
}