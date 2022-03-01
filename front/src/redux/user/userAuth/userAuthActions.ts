import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  IResAuthForToken,
  IResError,
  IUserAuth,
  IUserState,
} from "../../../types/user/user.types";
import { initialState } from "./userAuthSlice";

// user auth actions
export const signinAction: CaseReducer<IUserState, PayloadAction<IUserAuth>> = (
  state,
  action
) => ({
  ...state,
  user: action.payload.user,
  isSignIn: true,
  error: action.payload.error,
});

export const signupAction: CaseReducer<IUserState, PayloadAction<IUserAuth>> = (
  state,
  action
) => ({
  ...state,
  user: action.payload.user,
  isSignIn: true,
  error: action.payload.error,
});

export const signoutAction: CaseReducer<IUserState> = (state) => {
  localStorage.clear();
  return {
    ...state,
    user: initialState.user,
    isSignIn: false,
    error: initialState.error,
  };
};

export const errorAction: CaseReducer<IUserState, PayloadAction<IResError>> = (
  state,
  action
) => ({
  ...state,
  error: action.payload,
});

export const tokenAuthAction: CaseReducer<
  IUserState,
  PayloadAction<IResAuthForToken>
> = (state, action) => ({
  ...state,
  user: action.payload.user,
  isSignIn: true,
  error: action.payload.error,
});