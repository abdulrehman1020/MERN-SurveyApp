import React, {useState} from "react";
import { useCreateQuestionMutation } from "../../post";
import './CreateQuestion.css'


const CreateQuestion = () => {

    const [createQuestion] = useCreateQuestionMutation()
    // const [createQuestion, responseInfo] = useCreateQuestionMutation()

    const [question, setQuestion] = useState("")
    const [answer1, setAnswer1] = useState("")
    const [answer2, setAnswer2] = useState("")
    const [answer3, setAnswer3] = useState("")
    // console.log(question)
    // console.log(answer)

    const imc = (e) =>{
      e.preventDefault();
      let post = {
        question: question,
        answerOptions:[
          {answerBody: answer1,},
          {answerBody: answer2,},
          {answerBody: answer3,}
        ]
        // answerBody: answer1,
        // answerBody: answer2,
        // answerBody: answer3,
      }
        createQuestion(post)
        
    }

  return (
    <div className="new-question-form">
      <input
        className="input"
        placeholder="Question"
        value={question}
        onChange={(e) =>{
            setQuestion(e.target.value)
        }}
      />
      <div className="heading">
      <div>Answers</div>
      {/* {this.state.answers.map((ans, idx) => ( */}
      <div className="answer-form">
        {/* <input
          type="radio"
          value={this.state.ans}
          onChange={(e) => this.setState({ correctAnswer: ans })}
          name="answer"
        /> */}
        <input
          className="answer"
          type="text"
          placeholder="Answer"
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
        />
        <input
          className="answer"
          type="text"
          placeholder="Answer"
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
        />
        <input
          className="answer"
          type="text"
          placeholder="Answer"
          value={answer3}
          onChange={(e) => setAnswer3(e.target.value)}
        />
      </div>
      </div>
      {/* ))} */}
      {/* <div className="add-answer">Add Answer</div> */}
      <div className="btn-wrapper">
        {/* <div
                    className="btn"
                    onClick={() => this.setState({ addQuestion: false })}
                  >
                    Close
                  </div> */}
        <div className="btn" onClick={imc}>Save</div>
      </div>
    </div>
  );
};

export default CreateQuestion;
