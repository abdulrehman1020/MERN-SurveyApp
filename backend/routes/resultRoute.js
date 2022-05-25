const express = require("express");
const { saveResult } = require("../controller/resultController");

const router = express.Router();



router.route('/save').post(saveResult)

module.exports = router;