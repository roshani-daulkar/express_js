const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        defaults:[]
    },
    isadmin: Boolean,
    orders: {
        type:Array,
        defaults:[]
    },
    contact: Number,
    picture: String,
})

module.exports = mongoose.model("user" , userSchema);