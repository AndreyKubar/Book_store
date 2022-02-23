import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../../types/user/user.types";
import {
  clearDataAction,
  getUserDataAction,
  passwordChangeAction,
  userDataChangeAction,
} from "./userDataActions";

export const initialState: IUserState = {
  user: {
    name: "",
    surname: "",
    dob: "",
    email: "",
  },
  avatarPath: "",
  error: {
    type: "",
    value: "",
  },
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    dataChange: userDataChangeAction,
    passwordChange: passwordChangeAction,
    avatarChange: (state, { payload }: { payload: string }) => ({
      ...state,
      avatarPath: payload,
    }),
    getData: getUserDataAction,
    clearData: clearDataAction,
  },
  extraReducers: {
    [`userData/getData`]: (state, action) => {
      return {
        ...state,
        isCompleted: true,
      };
    },
    [`userData/getData/fulfilled`]: (state, action) => {
      return {
        ...state,
        isCompleted: true,
      };
    },
    [`userData/getData/pending`]: (state, action) => {
      return {
        ...state,
        isCompleted: false,
      };
    },
  },
});

export const { dataChange, passwordChange, avatarChange, getData, clearData } =
  userDataSlice.actions;
export default userDataSlice.reducer;