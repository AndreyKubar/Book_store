import {
  IPasswordChangeData,
  IUser,
  IUserSigninDataApi,
  IUserSignupDataApi,
  // IUserState,
  tokenType,
} from "../types/user/user.types";
import api from "./axios";

export const signinApi = async (data: IUserSigninDataApi) => {
  const response = await api.post("/auth/signin", { data });

  return response;
};

export const signupApi = async (data: IUserSignupDataApi) => {
  const response = await api.post("/auth/signup", { data });

  return response;
};

export const tokenAuthApi = async (data: tokenType) => {
  const response = await api.get("/auth/tokenauth", { data });

  return response;
};

export const userDataChange = async (data: IUser) => {
  const response = await api.put("/userdata/update", { data });

  return response;
};

export const userPasswordChange = async (data: IPasswordChangeData) => {
  const response = await api.put("/userdata/passwordchange", { data });

  return response;
};

export const userSetAvatar = async (data: FormData) => {
  const response = await api.post("/userdata/avatarchange", data);

  return response;
};

export const userGetData = async () => {
  const response = await api.get("/user");

  return response;
};