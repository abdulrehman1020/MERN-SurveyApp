import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    // The unique key that defines where the Redux store will store our cache.
    reducerPath: 'postApi',
   
    // The base query to request data.
    // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
    baseQuery: fetchBaseQuery({
     baseUrl: 'http://localhost:4000/api/',
    }),
       endpoints: (builder) => ({
        createQuestion: builder.mutation({
         query: (newPost) => {
          console.log("Create Post: ", newPost)
          return {
           url: `survay/create`,
           method: 'POST',
           body: newPost,
           headers: {
            'Content-type': 'application/json; charset=UTF-8',
           }
          }
         }
        }),

        getAllQuestion: builder.query({
             query: () => ({
              url: 'survay/sections',
              method: 'GET'
             })
            }),
      
       
        
       }),

})    

export const { useCreateQuestionMutation, useGetAllQuestionQuery, } = postApi