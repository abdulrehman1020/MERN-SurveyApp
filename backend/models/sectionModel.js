
// const { AnswerOptionSchema } =  require('./answer-option-schema.js');
const mongoose = require('mongoose');
// const validator = require("validator");

const QuestionSchema = new mongoose.Schema({
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
  
//     validate: {
//       validator: function(answerOptions) {
//         return answerOptions && answerOptions.length === 2;
//       },
//       message: 'Answer options should be 4.'
//     }
  }
],
// validate: validator.isLength(answerOptions, 1, 2),
}, {
  timestamps: true
});

module.exports = mongoose.model('Question', QuestionSchema);