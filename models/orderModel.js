// import mongoose
const mongoose = require("mongoose");
// define mongoose schema
const Schema = mongoose.Schema;

// create cart schema
const orderSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,

    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);
// create model
const Order = mongoose.model("orders", orderSchema);
// import model
module.exports = Order;
