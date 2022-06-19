const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResultSchema = new Schema([{
    surveyId: {
        type: Schema.Types.ObjectID,
        ref: "Survey",
        required: true
    },
    userId: {
        type: Schema.Types.ObjectID,
        ref: "User",
        required: true
    },
    response: [{
        // questionId: {
        //     type: Schema.Types.ObjectID,
        //     ref: "Survey"
        // },
        question: {
                type: String,
                minlength: 10,
                maxlength: 200,   
        },
        selectedOption: {
            type: String,
            required: true,
        }
    }]
    
}]);

module.exports = Results = mongoose.model("Result", ResultSchema);