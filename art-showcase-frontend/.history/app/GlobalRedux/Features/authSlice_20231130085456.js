import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    userId: null,
    name: null,
    title: null,
    profilePicUrl: null,
    backgroundImgUrl: null,
}

const authSlice = createSlice({
    name: ''
    initialState,
    reducers: {
        login(state, payload){

        }
    }
})