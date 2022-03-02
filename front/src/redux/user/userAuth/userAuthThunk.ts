import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { signinApi, signupApi, tokenAuthApi } from "../../../api/user.api";
import {
  IResAuthForToken,
  IUserSigninDataApi,
  IUserSignupDataApi,
  IUserState,
  tokenType,
} from "../../../types/user/user.types";
import { signin, signup, error, tokenAuth } from "./userAuthSlice";



export const signinThunk = createAsyncThunk<boolean, IUserSigninDataApi>(
  "userAuth/signin",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const res: AxiosResponse<IUserState> = await signinApi(data);

      if (res.data.error.type === "error") {
        dispatch(error(res.data.error));
        return false
      }
      if (res.data.error.type === "success") {
        localStorage.setItem("token", res.data.user.token || "");
        dispatch(signin(res.data));
      }
      return true;

    } catch (error: any) {
      return rejectWithValue(false);
      console.log("signinThunk err", error.response.message);
    }
  },
);

export const signupThunk = createAsyncThunk<boolean, IUserSignupDataApi>(
  "userAuth/signup",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const res: AxiosResponse<IUserState> = await signupApi(data);

      if (res.data.error.type === "error") {
        dispatch(error(res.data.error));
        return true
      }
      if (res.data.error.type === "success") {
        localStorage.setItem('token', res.data.user.token!);
        dispatch(signup(res.data));
      }

      return true

    } catch (error: any) {
      return rejectWithValue(true)
      console.log("signupThunk error", error.response.message);
    }
  }

);

export const tokenAuthThunk = createAsyncThunk<boolean, tokenType>(
  "userAuth/tokenCheck",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const res: AxiosResponse<IResAuthForToken> = await tokenAuthApi(data);
      if (localStorage.getItem("token")) {
        dispatch(tokenAuth(res.data));
      }
      return true
    } catch (error: any) {
      return rejectWithValue(false)
      console.log("tokenAccessCheck error", error.response.message);
    }
  }
);