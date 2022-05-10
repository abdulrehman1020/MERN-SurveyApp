// import { Schema } from 'mongoose';
const  mongoose = require('mongoose')

const AnswerOptionSchema = new mongoose.Schema({
    answerBody: {
        type: String,
        minlength: 1,
        maxlength: 200,
      },
    optionNumber: {
    type: Number
  },
  
  isCorrectAnswer: { // you can store the correct answer with question id in another model.
    type: Boolean,
    default: false
  }
}, {
  _id: false
});

module.exports = mongoose.model('AnswerOptionSchema', AnswerOptionSchema)