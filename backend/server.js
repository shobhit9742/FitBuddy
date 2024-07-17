const express = require('express');
const connectToDB = require('./src/config/db');
const app = express();
require('dotenv').config();


const port = process.env.PORT || 9090
const db_url = process.env.MONGO_URL;


app.listen(port , async () =>{
    try{
       await connectToDB(db_url);
        console.log(`Server is running at port ${port}`);
    }catch(err){
        console.log(err);
    }
})