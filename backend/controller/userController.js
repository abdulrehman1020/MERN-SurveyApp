const bcrypt = require('bcryptjs')
const expressAsyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const sendToken = require('./jwtToken')



exports.createUser = expressAsyncHandler(async(req, res) =>{
    let {password, name, email} = req.body
    password = await bcrypt.hash(password, 10)
    let user = await User.create({
        name,
        email,
        password
    })

    sendToken(user, 201, res); 

})

exports.loginUser = expressAsyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has entered email and pass both
    if (!email || !password) {
        res.status(400).json({message:"Question not found"})
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
        res.status(400).json({message:"Question not found"})
    }
  
    const isPasswordMatched =await user.comparePassword(password);
  
    // console.log(isPasswordMatched);
  
    if (!isPasswordMatched) {
        res.status(400).json({message:"Question not found"})
    }
  
    sendToken(user, 200, res);
  });