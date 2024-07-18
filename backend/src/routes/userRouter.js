const express = require('express');
const userModel = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRouter = express.Router();

userRouter.post("/register", async (req, res) =>{
    const {username, email, password} = req.body;
    const saltRound = 10;
    try{
        const hashPassword = await bcrypt.hash(password, saltRound);
        const newUser = new userModel({username, email, password: hashPassword}) 
        await newUser.save();
        res.status(200).json({message:"User Registered Successfully"})
    }catch(err){
        console.log(err);
    }

})

userRouter.post("/login", async(req, res) =>{
    const { email, password } = req.body;
    const privateKey = "masai";
    try{
        const user = userModel.findOne({email})
        if(user){
            const isMatch = bcrypt.compare(password, user.password);
            if(isMatch){
                const token = jwt.sign({ userId: user.id }, privateKey, { expiresIn: '1h' });
                res.status(201).json({message:"Login Succesfully", token});
            }else{
                res.json({message: "Invalid Password"});
            }
        }else{
            res.json({message: "User not found try to register"});
        }
    }catch(err){
        console.log(err);
    }
})

module.exports = userRouter;