const express = require("express");
const { getSurvey } = require("../controller/surveyController");
const router = express.Router();



router.route('/survey').get(getSurvey)

module.exports = router;