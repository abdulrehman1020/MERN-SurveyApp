import React from "react";
import { useGetAllQuestionQuery, useDeleteQuestionMutation } from "../../post";
import "./ShowQuestion.css";

const ShowQuestions = () => {
  // const responseInfo = useGetAllQuestionQuery();
  const { data, isLoading, error } = useGetAllQuestionQuery({
    onError(data){
      console.log(data)
      }
  });
  const [deleteQuestion] = useDeleteQuestionMutation()
  // console.log(responseInfo)
  // let id = "627ab8559ac865797bf45beb"
  const deleteQue = (id) =>{
    // e.preventDefault()
     deleteQuestion(id)
  }
  // console.log(responseInfo)
  // console.log(data.section.map(item => item._id))

  // console.log(isLoading)
  // const {question} = responseInfo
  // const {question} = responseInfo
  // console.log(responseInfo.data.section[55].answerOptions[0].answerBody)
  // console.log(
  //   responseInfo.data.section.map((item) =>
  //     item.answerOptions.map((item) => item.answerBody)
  //   )
  // );

  // console.log(
  //   responseInfo.data.section.map((item) =>
  //     item.answerOptions.map((item) => {return item.answerBody})
  //   )
  // );
  // console.log(
  //   responseInfo.data.section.map((item) =>
  //     item.answerOptions.map((item) => {return item.answerBody})
  //   )
  // );
  // console.log(responseInfo)
  // const ar = [1, 2, 3];
  // const arr = ar.map((item) => {
  //   // console.log(item);
  //   return item;
  // });
  // console.log(arr)

  return (
    <>
      {isLoading ? (
        <div>
          <h1>loading.....</h1>
        </div>
      ) : (
        <div className="question-box">
          {/* <h1>Redux Toolkit - RTK Query (Get All Data)</h1> */}

          {data.section.map((post) => (
            <div className="questions">
              <div>
                <h5>{post.question}</h5>
                <ul className="options-link">
                  {post.answerOptions.map((item) => (
                    <li className="link-items">
                      <input
                        type="radio"
                        id="check"
                        // value={this.state.ans}
                        // onChange={(e) => this.setState({ correctAnswer: ans })}
                        // name="answer"
                      />
                      <label for="check">{item.answerBody}</label>
                      {/* <input
                        className="answer"
                        // type="text"
                        placeholder="Answer"
                        value={item.answerBody}
                        // onChange={(e) => setAnswer2(e.target.value)}
                      /> */}
                    </li>
                    // {item._id}
                  ))}
                </ul>
                {/* <button className="button" onClick={deleteQue(post._id)}>Delete</button> */}
              </div>
            </div>
          ))}
        </div> 
      )}
    </> 
  );
};

export default ShowQuestions;
