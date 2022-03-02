import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../../types/user/user.types";
import {
  signinAction,
  signupAction,
  signoutAction,
  tokenAuthAction,
  errorAction,
} from "./userAuthActions";
import { signinThunk, signupThunk, tokenAuthThunk } from "./userAuthThunk";

export const initialState: IUserState = {
  user: {
    fullname: "",
    email: "",
    token: "",
  },
  // isSignIn: false,
  isCompleted: false,
  error: {
    type: "",
    value: "",
  },
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    signin: signinAction,
    signup: signupAction,
    signout: signoutAction,
    error: errorAction,
    tokenAuth: tokenAuthAction,
  },
    extraReducers: (builder) => {
      builder.addCase(tokenAuthThunk.fulfilled, (state, action) => {
        return { ...state, isCompleted: true };
      })
      builder.addCase(tokenAuthThunk.pending, (state, action) => {
        return { ...state, isCompleted: false };
      })
      builder.addCase(tokenAuthThunk.rejected, (state, action) => {
        return { ...state, isCompleted: false };
      })
      builder.addCase(signupThunk.fulfilled, (state, action) => {
        return { ...state, isCompleted: true };
      })
      builder.addCase(signupThunk.pending, (state, action) => {
        return { ...state, isCompleted: false };
      })
      builder.addCase(signupThunk.rejected, (state, action) => {
        return { ...state, isCompleted: false };
      })
      builder.addCase(signinThunk.fulfilled, (state, action) => {
        return {...state, isCompleted: true}
      })
      builder.addCase(signinThunk.pending, (state, action) => {
        return {...state, isCompleted: false}
      })
      builder.addCase(signinThunk.rejected, (state, action) => {
        return {...state, isCompleted: false}
      })
    }, 
  })

      

export const { signin, signup, signout, error, tokenAuth } =
  userAuthSlice.actions;
export default userAuthSlice.reducer;