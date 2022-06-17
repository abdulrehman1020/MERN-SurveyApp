const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


exports.isAuthenticatedUser = expressAsyncHandler(async (req, res, next) => {
  const { token } = req.cookies;
  // console.log(token);

  if (!token) {
    return res.status(401).json({message:"Please Login to access this resource"})
  }

  const decodedData = jwt.verify(token, "dbkfashdnsdbkksdhmdjfnld");

  req.user = await User.findById(decodedData.id);

  next();
});



// Authorize Roles --admin

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
      console.log(req)
    if (!roles.includes(req.user.role)) {
        res.status(401).json({message:`Role: ${req.user.role} is not allowed to access this resource`})
    }
    
    next();
  };
};
