
// const { AnswerOptionSchema } =  require('./answer-option-schema.js');
const mongoose = require('mongoose');
// const validator = require("validator");

const surveySchema = new mongoose.Schema([{
  
  surveyName: {
    type: String,
    minlength: 10,
    maxlength: 1000,
  },
  Questions: [{
    question: {
        type: String,
        minlength: 10,
        maxlength: 200,
      },
    answerOtions:{
      type: Array,
      // 
      // 
    }, 
  }
],
// validate: validator.isLength(answerOptions, 1, 2),
}]);
  
// module.exports = mongoose.model('Survey', surveySchema);