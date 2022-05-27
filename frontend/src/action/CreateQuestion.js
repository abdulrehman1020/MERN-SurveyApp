import axios from 'axios'

const {
    CREATE_QUESTION_SUCCESS,
    CREATE_QUESTION_REQUEST,
    CREATE_QUESTION_FAIL,
    CLEAR_ERRORS
  } = require("../constants/questionConstant");

// Create Product
export const CreateQuestion = (questionData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_QUESTION_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(
        `http://localhost:4000/api/survay/create`,
        questionData,
        config
      );
  
      dispatch({
        type: CREATE_QUESTION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_QUESTION_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  