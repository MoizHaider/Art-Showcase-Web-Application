import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    userId: null,
    name: null,
    title: null,
    profilePicUrl: null,
    backgroundImgUrl: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, payload){

        }
    }
})

export const {login} = authSlice.