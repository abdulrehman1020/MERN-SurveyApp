import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    // The unique key that defines where the Redux store will store our cache.
    reducerPath: 'userApi',
   
    // The base query to request data.
    // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
    baseQuery: fetchBaseQuery({
     baseUrl: 'http://localhost:4000/api/',
    }),
       endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (newUser) => {
            //  console.log("Create Post: ", newPost)
             return {
              url: `user/create`,
              method: 'POST',
              body: newUser,
              headers: {
               'Content-type': 'application/json; charset=UTF-8',
              }
             }
            },
            // onQueryStarted
           }),

           loginUser: builder.mutation({
            query: (user) => {
            //  console.log("Create Post: ", newPost)
             return {
              url: `user/login`,
              method: 'POST',
              body: user,
              credentials: 'include',
              headers: {
               'Content-type': 'application/json; charset=UTF-8',
              }
             }
            }
           }),

           getDetail: builder.query({
            query: () => ({
             url: 'user/me',
             method: 'GET',
             credentials: 'include'
            })
           }),
        
       }),

})    

export const { useCreateUserMutation, useLoginUserMutation, useGetDetailQuery } = userApi
