const mongoose = require("mongoose");
var slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    slug: { type: String, slug: "title", unique: true },
    thumbnail: String,
    status: String,
    position: Number,
    deleted: Boolean
})
const Product = mongoose.model("Product", productSchema, "products")
module.exports = Product 