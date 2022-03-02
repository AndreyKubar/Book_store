import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { userDataChange, userGetData, userPasswordChange, userSetAvatar } from "../../../api/user.api";
import {
  dataChange,
  passwordChange,
  avatarChange,
  getData,
} from "./userDataSlice";
import {
  IPasswordChangeData,
  IResError,
  IUser,
  IUserState,
} from "../../../types/user/user.types";
import { error } from "../userAuth/userAuthSlice";

export const getUserDataThunk = createAsyncThunk<boolean, IUserState>(
  "userData/getData",
  async (data, {dispatch, rejectWithValue}) => {
    const res: AxiosResponse<IUserState> = await userGetData();
    
    if (res.data.error.type === 'error') {
      dispatch(error(res.data.error));
      return false
    } else {
      dispatch(getData(res.data));
      return rejectWithValue(true)
    }
  }
)

export const dataChangeThunk = createAsyncThunk<any, IUser>(
  "userData/datachange",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const res: AxiosResponse<IUserState> = await userDataChange(data);

      if (res.data.error.type === 'error') {
        dispatch(error(res.data.error));
        return false
      } else {
        dispatch(dataChange(res.data.user));
      }
      return true


    } catch (error) {
      rejectWithValue(false)
      console.log("Thunk data change error: ", error);
    }
  }
);

export const passwordChangeThunk = createAsyncThunk<any, IPasswordChangeData>(
  "userData/passwordchange",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const res: AxiosResponse<IResError> = await userPasswordChange(data);
      if (res.data.type === "error") {
        dispatch(error(res.data));
        return false
      } else {
        dispatch(passwordChange(res.data));
      }
      return true
    } catch (error: any) {
      rejectWithValue(false)
      console.log("Thunk password change error: ", error);
    }
  }
);

export const avatarUploadThunk = createAsyncThunk<any, FormData>(
  "userData/avatarchange",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const res: AxiosResponse<string> = await userSetAvatar(data);
      dispatch(avatarChange(res.data))
      return true
      
    } catch (error) {
      rejectWithValue(false)
      console.log("Thunk password change error: ", error);
    }
  }
);