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

// добавить типизацию
export const signinThunk = createAsyncThunk<void, IUserSigninDataApi>(
  "userAuth/signin",
  async (data, { dispatch }) => {
    try {
      const res: AxiosResponse<IUserState> = await signinApi(data);

      if (res.data.error.type === "error") {
        dispatch(error(res.data.error));
      }
      if (res.data.error.type === "success") {
        localStorage.setItem("token", res.data.user.token || "");
        dispatch(signin(res.data));
      }
    } catch (error: any) {
      console.log("signinThunk err", error.response.message);
    }
  }
);

export const signupThunk = createAsyncThunk<void, IUserSignupDataApi>(
  "userAuth/signup",
  async (data, { dispatch }) => {
    try {
      const res: AxiosResponse<IUserState> = await signupApi(data);

      if (res.data.error.type === "error") {
        dispatch(error(res.data.error));
      }
      if (res.data.error.type === "success") {
        localStorage.setItem('token', res.data.user.token!);
        dispatch(signup(res.data));
      }
    } catch (error: any) {
      console.log("signupThunk error", error.response.message);
    }
  }
);

export const tokenAuthThunk = createAsyncThunk<void, tokenType>(
  "userAuth/tokenCheck",
  async (data, { dispatch }) => {
    try {
      const res: AxiosResponse<IResAuthForToken> = await tokenAuthApi(data);
      if (localStorage.getItem("token")) {
        dispatch(tokenAuth(res.data));
      }
    } catch (error: any) {
      console.log("tokenAccessCheck error", error.response.message);
    }
  }
);