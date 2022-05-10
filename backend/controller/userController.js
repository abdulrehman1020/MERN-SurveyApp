const bcrypt = require('bcryptjs')
const expressAsyncHandler = require('express-async-handler')
const User = require('../models/userModel')


exports.createUser = expressAsyncHandler(async(req, res) =>{
    let {password, name, email} = req.body
    password = await bcrypt.hash(password, 10)
    let user = await User.create({
        name,
        email,
        password
    })

    res.status(200).json({
        success: true,
        user
    })

})