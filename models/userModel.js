// import mongoose
const mongoose = require("mongoose");
// define mongoose schema
const Schema = mongoose.Schema;
// create user schema
const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Schema.Types.Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
// create model
const User = mongoose.model("users", userSchema);
// import model
module.exports = User;
