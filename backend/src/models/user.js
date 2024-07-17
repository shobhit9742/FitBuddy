const mongoose = require('mongosse');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: null,
    },
    age: {
        type: Number,
    },
   
}, {timestamps});


const userCollections = mongoose.model("users", userSchema)
module.exports = userCollections;