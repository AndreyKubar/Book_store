import { api } from "./axios";
import jwt_decode from "jwt-decode";

export const signup = async (
  email: string,
  password: string,
  name: string
) => {
  const response = await api.post("api/user/signup", {
    email,
    password,
    name,
  });
  localStorage.setItem("accessToken", response.data.token);
  const { data } = response;
  const token_decode: any = jwt_decode(data.token);
  return token_decode.user;
};

export const signin = async (email: string, password: string) => {
  const response = await api.post("api/user/signin", {
    email,
    password,
  });
  localStorage.setItem("accessToken", response.data.token);
  const { data } = response;
  const token_decode: any = jwt_decode(data.token);
  return token_decode.user;
};

export const check = async () => {
  const response = await api.get("api/user/auth");
  const { data } = response;
  const token_decode: any = jwt_decode(data.token);
  return token_decode.user;
};

export const updatePassword = async (
  oldPassword: string,
  newPassword: string
) => {
  console.log(oldPassword, newPassword);

  const reqData = new FormData();
  reqData.append("oldPassword", oldPassword);
  reqData.append("newPassword", newPassword);
  const response = await api.put("api/user/updatepassword", reqData);

  console.log(response);
  localStorage.setItem("accessToken", response.data.token);
  const { data } = response;
  const token_decode: any = jwt_decode(data.token);
  return token_decode.user;
};

export const updateUser = async (name: string, file: File) => {
  console.log(file);
  const reqData = new FormData();
  reqData.append("name", name);
  reqData.append("file", file);
  const response = await api.put("api/user/update", reqData);
  localStorage.setItem("accessToken", response.data.token);
  const { data } = response;
  const token_decode: any = jwt_decode(data.token);
  return token_decode.user;
};