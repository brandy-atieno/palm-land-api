// import mongoose
const mongoose = require("mongoose");
// define mongoose schema
const Schema = mongoose.Schema;
//revies schema

  

// create cart schema
const cartSchema = new Schema(
  {
    userId: {
      type: String,
    },
    products:[ {
      productId:{  
      type: String,
      },
      quantity:{
        type: Number,
        default:1
      }

    }]
},
  { timestamps: true }
);
// create model
const Cart = mongoose.model("cart", cartSchema);
// import model
module.exports = Cart;
