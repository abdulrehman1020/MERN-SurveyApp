import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    c: 0,
}

export const customReducer = createReducer(initialState,{
    increment: (state) =>{
        state.c += 1
    }
})