import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../../types/user/user.types";
import {
  clearDataAction,
  getUserDataAction,
  passwordChangeAction,
  userDataChangeAction,
} from "./userDataActions";
import { getUserDataThunk } from "./userDataThunk";

export const initialState: IUserState = {
  user: {
    fullname: "",
    dob: "",
    email: "",
  },
  isCompleted: true,
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
    extraReducers: (builder) => {
      builder.addCase(getData, (state, action) => {
        return { ...state, isCompleted: true };
      })
      builder.addCase(getUserDataThunk.fulfilled, (state, action) => {
        return { ...state, isCompleted: true };
      })
      builder.addCase(getUserDataThunk.pending, (state, action) => {
        return { ...state, isCompleted: false };

      })
    }
});

export const { dataChange, passwordChange, avatarChange, getData, clearData } =
  userDataSlice.actions;
export default userDataSlice.reducer;