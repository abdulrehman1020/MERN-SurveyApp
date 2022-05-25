const express = require('express')
const expressAsyncHandler = require('express-async-handler');
const Result = require('../models/resultModel');
const Question = require('../models/sectionModel')

exports.saveResult = (expressAsyncHandler(async(req, res)=>{
    const result = await Result.create(req.body)
    res.status(200).json({
        success: true,
        result
    })
}))