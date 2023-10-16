import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    maxLength: [200, "Product name can not exceed 200 characters"],
  },
});
