const express = require('express')
const { createUser, loginUser, logout } = require('../controller/userController')
const router = express.Router()


router.route('/create').post(createUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logout)

module.exports = router