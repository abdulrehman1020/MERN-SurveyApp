const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResultSchema = new Schema([{
    quizId: {
        type: Schema.Types.ObjectID,
        required: true
    },
    answerId: {
        type: Schema.Types.ObjectID,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectID,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
}]);

module.exports = Results = mongoose.model("Result", ResultSchema);