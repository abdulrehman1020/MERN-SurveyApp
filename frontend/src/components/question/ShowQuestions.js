import React from 'react'
import { useGetAllQuestionQuery } from "../../post";


const ShowQuestions = () => {
    const responseInfo = useGetAllQuestionQuery()

    // const {question} = responseInfo
    // const {question} = responseInfo
    console.log(responseInfo.data)
    // console.log(post.answerOptions)
  return (
    <div>
        {/* <h1>Redux Toolkit - RTK Query (Get All Data)</h1> */}
        {/* {responseInfo.currentData.section} */}
      {
        responseInfo.data.section.map((post, i) =>
          <div key={i}>
            <h2>{post.question}</h2>
            {/* <p>{post.answerOptions.map((ans, i)=>{
                <li key={i}>{ans.answerBody}</li>
            })}</p> */}
            
            <hr />
          </div>
        )
      }
    </div>
  )
}

export default ShowQuestions