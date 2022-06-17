const bcrypt = require('bcryptjs')
const expressAsyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const sendToken = require('./jwtToken')



exports.createUser = expressAsyncHandler(async(req, res) =>{
    let {password, name, email} = req.body
    const userr = await User.findOne({ email });
    if(userr){
      res.status(400).json({message:"email already registered"})
    }
    password = await bcrypt.hash(password, 10)
    let user = await User.create({
        name,
        email,
        password
    })
    // console.log(req.user)
    sendToken(user, 201, res); 

})

exports.loginUser = expressAsyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has entered email and pass both
    if (!email || !password) {
        res.status(400).json({message:"Please Enter email and password"})
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
        res.status(400).json({message:"User not  found"})
    }
  
    const isPasswordMatched =await user.comparePassword(password);
  
    // console.log(isPasswordMatched);
  
    if (!isPasswordMatched) {
        res.status(400).json({message:"Incorrect Password"})
    }
  
    sendToken(user, 200, res);
  });

  // Logout User
exports.logout = expressAsyncHandler(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "logged out",
    });
  });

  exports.forgotPassword = expressAsyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
  
    if (!user) {
      res.status(400).json({message:"User not found"})
    }
  
    // Get ResetPassword Token From UserMOdel
    const resetToken = user.getResetPasswordToken();
  
    await user.save({ validateBeforeSave: false });
  
    // const resetPasswordUrl = `${req.protocol}://${req.get(
    //   "host"
    // )}/api/v1/password/reset/${resetToken}`;
    // const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;
    const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;
    const message = `Your Password reset token is TEMP :- \n\n ${resetPasswordUrl} \n\n If you have not requestedthis email then please ignore it`;
  
    try {
        await sendEmail({
          email: user.email,
          subject:`OneMoreStep password recovery`,
          message,
        });
        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} succesfully`,
        })
        
    } catch (error) {
        user.getResetPasswordToken = undefined;
        user.resetPasswordUrl = undefined;
  
        await user.save({ validateBeforeSave: false });
  
        return res.status(400).json(`${error.message}`)
    }
  });


  // Get user detail

exports.getUserDetails = expressAsyncHandler(async (req,res,next) => {
  const user = await User.findById(req.user.id);
  // const user = req.user.id;
// 
  res.status(200).json({
    success: true,
    user,
  });
});
  