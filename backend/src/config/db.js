const mongoose = require('mongoose');

const connectDatabase = async (url) => {
    try{
       await mongoose.connect(url);
        console.log("Database connected successfully");
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDatabase;