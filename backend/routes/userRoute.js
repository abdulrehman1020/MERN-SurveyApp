const express = require('express')
const { isAuthenticatedUser } = require('../controller/auth')
const { createUser, loginUser, logout, getUserDetails } = require('../controller/userController')
const router = express.Router()


router.route('/create').post(createUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logout)
router.route('/me').get(isAuthenticatedUser, getUserDetails)

module.exports = router