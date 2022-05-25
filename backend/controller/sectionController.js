const expressAsyncHandler = require('express-async-handler')
const Question = require('../models/sectionModel')

//CREATE SECTION
exports.createQuestion = expressAsyncHandler(async(req, res, next) =>{
    const section = await Question.create(req.body)
    const {answerOptions} = req.body
    // console.log(answerOptions.length)
    if(answerOptions.length > 3){
        res.status(400).json({
            success: false
        })
    }
    res.status(200).json({
        success: true,
        section
    })
})

//GET ALL SECTIONS
exports.getAllQuestions = expressAsyncHandler(async (req, res, next)=>{
    const section = await Question.find()
    if(!section){
        res.status(400).json({message:"Question not found"})
    }
    res.status(200).json({
        success: true,
        section
    })
})

exports.randomQuestions = expressAsyncHandler(async(req, res)=>{
    const option = Question[2]
    console.log(option)
    const questions = await Question.findOne([3])
    if(!questions){
        res.status(400).json({message:"Question not found"})
    }
    res.status(200).json({
        success: true,
        questions
    })
    // Model.count().exec(function(err, count){

    //     var random = Math.floor(Math.random() * count);
      
    //     Model.findOne().skip(random).exec(
    //       function (err, result) {
      
    //         // result is random 
      
    //     });
      
    //   });
})

//DELETE SECTION
exports.deleteQuestion = expressAsyncHandler(async(req, res, next)=>{
    let section = await Question.findById(req.params.id)
    if(!section){
        res.status(400).json({message:"Question not found"})
    }
    await section.remove()
    res.status(200).json({
        success: true,
        message:"Question deleted"
    })

})

//UPDATE SECTION
exports.updateQuestion = expressAsyncHandler(async(req, res, next)=>{
    let section = await Question.findById(req.params.id)
    if (!section){
        res.status(400).json({message:"Question not found"})
    }
    section = await Question.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
    
      res.status(200).json({
        success: true,
        section,
      });
})

//GET SINGLE SECTION
exports.singleQuestion = expressAsyncHandler(async(req,res)=>{
    const section = await Question.findById(req.params.id)
    if(!section){
        res.status(400).json({message:"Question not found"})
    }
    res.status(200).json({
        success: true,
        section
    })
})