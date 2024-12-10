const mongoose = require("mongoose");

 const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, default: 0 }, // Ensure default value is set
  smallPrice: { type: Number, default: 0 },
  mediumPrice: { type: Number, default: 0 },
  largePrice: { type: Number, default: 0 },
  specialPrice: { type: Number, default: 0 },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
