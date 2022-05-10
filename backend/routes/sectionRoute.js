const express = require('express')

const router = express.Router()
const { createQuestion, getAllQuestions, deleteQuestion, updateQuestion, singleQuestion } = require('../controller/sectionController')
router.route('/create').post(createQuestion)
router.route('/sections').get(getAllQuestions)
router.route('/sections/:id').delete(deleteQuestion).put(updateQuestion).get(singleQuestion)


module.exports = router