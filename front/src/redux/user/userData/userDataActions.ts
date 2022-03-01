import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IResError, IUser, IUserState } from "../../../types/user/user.types";
import { initialState } from "../userData/userDataSlice";

export const userDataChangeAction: CaseReducer<
  IUserState,
  PayloadAction<IUser>
> = (state, action) => ({
  ...state,
  user: action.payload,
});

export const passwordChangeAction: CaseReducer<
  IUserState,
  PayloadAction<IResError>
> = (state, action) => ({
  ...state,
  error: action.payload,
});

export const avatarChangeAction: CaseReducer<{}, PayloadAction<unknown>> = (
  state,
  action
) => ({
  ...state,
});

export const getUserDataAction: CaseReducer<IUserState, PayloadAction<IUserState>> = (
  state,
  action
) => ({
  ...state,
  user: action.payload.user,
  avatarPath: action.payload.avatarPath,
});

export const clearDataAction: CaseReducer<IUserState> = (state) => ({
  user: initialState.user,
  avatarPath: initialState.avatarPath,
  isCompleted: initialState.isCompleted,
  error: initialState.error,
});