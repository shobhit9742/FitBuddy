const express = require('express');
const userRouter = require('./src/routes/userRouter');
const connectDatabase = require('./src/config/db');
const app = express();
require('dotenv').config()

const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);

app.listen(port,async()=>{
    try{
        console.log(`port is running at ${port}`)
        await connectDatabase(process.env.mongo_url)

    }catch(err){
        console.log(err);
    }
})