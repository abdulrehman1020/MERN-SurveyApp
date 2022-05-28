import React from "react";
import { useGetAllQuestionQuery } from "../../post";

const ShowQuestions = () => {
  const responseInfo = useGetAllQuestionQuery();
  const {data, isLoading} = useGetAllQuestionQuery()

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
  const ar = [1, 2, 3];
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
    ) : (<div>
      <h1>Redux Toolkit - RTK Query (Get All Data)</h1>
      {/* {responseInfo.currentData.section} */}
      {
        data.section.map((post) =>
          <div>
            <h2>{post.question}</h2>
            <ul>
              {post.answerOptions.map((item) => 
              <li>{item.answerBody}</li>
            )}
            </ul>
            {/* <p>{post.answerOptions.map((opt, j)=>{
                <li key={j}>{opt.answerBody.map((ans, k)=>{
                  <li key={k}>{ans.answerBody}</li>
                })}</li>
            })}</p> */}
            <hr />
          </div>
        )
      }
    </div>)}
    
    </>
  );
};

export default ShowQuestions;
