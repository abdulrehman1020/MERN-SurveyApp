
// const { AnswerOptionSchema } =  require('./answer-option-schema.js');
const mongoose = require('mongoose');
// const validator = require("validator");

const surveySchema = new mongoose.Schema([{
  
  question: {
    type: String,
    minlength: 10,
    maxlength: 1000,
  },
  answerOptions: [{
    answerBody: {
        type: String,
        minlength: 1,
        maxlength: 200,
      },
    optionNumber: {
    type: Number
  },
       
  }
],

}]);

module.exports = mongoose.model('Survey', surveySchema);