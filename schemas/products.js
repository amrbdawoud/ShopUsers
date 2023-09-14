const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    rating: {type: Number, required: true},
    number_of_stocks: {type: Number, required: true}
});

const Products = mongoose.model('products', productSchema);

module.exports = Products;