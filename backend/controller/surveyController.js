const expressAsyncHandler = require('express-async-handler')
const Question = require('../models/sectionModel')
const Survey = require('../models/surveyModel')

exports.getSurvey = (expressAsyncHandler(async(req, res)=>{
    // const arr = [{
    //     id :"627d593d597d1ee9a602bc4a"
    // },
    // {
    //     id:"627d56339c823a2d58b9d39e"
    // },
    // {
    //     id:"627d56029c823a2d58b9d398"
    // }
    // ]
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i].id)
//     const findQuestion = await Question.findById(arr[i].id)
//     // console.log(findQuestion)
    

//     const {question, answerOptions } = findQuestion
  
//     const newSurvey = {
//         question,
//         answerOptions
//     }

//     // console.log(newSurvey)
 
//     var survey = await Survey.create(newSurvey)
//     // console.log(survey)
    
// }
// res.status(200).json({
//     success: true,
//     // survey
// })

const {questionid} = req.body

const findQuestion = await Question.findById(questionid)

    
}))