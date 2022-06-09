import React, { useState } from "react";
import { useCreateQuestionMutation } from "../../post";
import { useForm } from "react-hook-form";
import "./CreateQuestion.css";

const CreateQuestion = () => {
  const [createQuestion] = useCreateQuestionMutation();
  // const [createQuestion, responseInfo] = useCreateQuestionMutation()

  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const imc = (e) => {
    e.preventDefault();
    let post = {
      question: question,
      answerOptions: [
        { answerBody: answer1 },
        { answerBody: answer2 },
        { answerBody: answer3 },
      ],
    };
    createQuestion(post);
  };

  const onSubmit = (data) => {
    console.log(data);
    let post = {
      question: question,
      answerOptions: [
        { answerBody: answer1 },
        { answerBody: answer2 },
        { answerBody: answer3 },
      ],
    };
    createQuestion(post);
    
  };

  return (
    <div className="new-question-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          placeholder="Question"
          value={question}
          {...register("Question", { required: true })}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        {errors.Question && "Question is required"}
        <div className="heading">
          <div>Answers</div>
          <div className="answer-form">
            <input
              className="answer"
              type="text"
              placeholder="Option"
              value={answer1}
              {...register("Option1", { required: true })}
              onChange={(e) => setAnswer1(e.target.value)}
            />
            <input
              className="answer"
              type="text"
              placeholder="Option"
              value={answer2}
              {...register("Option2", { required: true })}
              onChange={(e) => setAnswer2(e.target.value)}
            />
            <input
              className="answer"
              type="text"
              placeholder="Option"
              value={answer3}
              {...register("Option3", { required: true })}
              onChange={(e) => setAnswer3(e.target.value)}
            />
            <input type="submit" />
          </div>
        </div>
      </form>
      {/* <input
        className="input"
        placeholder="Question"
        value={question}
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
      />
      <div className="heading">
        <div>Answers</div>
        <div className="answer-form">
          <input
            className="answer"
            type="text"
            placeholder="Option"
            value={answer1}
            onChange={(e) => setAnswer1(e.target.value)}
          />
          <input
            className="answer"
            type="text"
            placeholder="Option"
            value={answer2}
            onChange={(e) => setAnswer2(e.target.value)}
          />
          <input
            className="answer"
            type="text"
            placeholder="Option"
            value={answer3}
            onChange={(e) => setAnswer3(e.target.value)}
          />
        </div>
      </div>
      <div className="btn-wrapper">
        <div className="button" onClick={imc}>
          Save
        </div>
      </div> */}
    </div>
  );
};

export default CreateQuestion;
