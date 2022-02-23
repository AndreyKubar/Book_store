import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../../types/user/user.types";
import {
  signinAction,
  signupAction,
  signoutAction,
  tokenAuthAction,
  errorAction,
} from "./userAuthActions";

export const initialState: IUserState = {
  user: {
    name: "",
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
  extraReducers: {
    [`userAuth/tokenCheck/fulfilled`]: (state, action) => {
      return { ...state, isCompleted: true };
    },
    [`userAuth/tokenCheck/pending`]: (state, action) => {
      return { ...state, isCompleted: false };
    },
    [`userAuth/signup/pending`]: (state, action) => {
      return { ...state, isCompleted: false };
    },
    [`userAuth/signup/fulfilled`]: (state, action) => {
      return { ...state, isCompleted: true };
    },
  },
});

export const { signin, signup, signout, error, tokenAuth } =
  userAuthSlice.actions;
export default userAuthSlice.reducer;