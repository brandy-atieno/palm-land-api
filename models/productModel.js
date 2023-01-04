// import mongoose
const mongoose = require("mongoose");
// define mongoose schema
const Schema = mongoose.Schema;
//revies schema
const reviewsSchema= new Schema({
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment :{
        type: String,
        required: true,
      },
      userId:{
        type: String,
             }
})
// create product schema
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews:[reviewsSchema],
    rating: {
      type: Number,
      required: true,
      default:0
    },
    numReviews: {
        type: Number,
        required: true,
        default:0
      },
      category: 
        {
        type: Array,
        required: true,
      },
    price: {
        type: Number,
        required: true,
        default:0
      },
    amountInStock: {
      type: Number,
      required: true,
      default:0
    },
  },
  { timestamps: true }
);
// create model
const Product = mongoose.model("products", productSchema);
// import model
module.exports = Product;
