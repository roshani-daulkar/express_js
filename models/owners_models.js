const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname: {
        type:String,
        min_length:10,
        trim:true,
    },
    email: String,
    password: String,
    isadmin: Boolean,
    products: {
        type:Array,
        defaults:[]
    },
    gstin: String,
    picture: String,
})

module.exports = mongoose.model("product" , ownerSchema);