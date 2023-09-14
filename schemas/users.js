const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    purchased_products: {type: Array, required: false}
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;