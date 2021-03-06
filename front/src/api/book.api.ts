import { api } from "./axios";
import jwt_decode from "jwt-decode";


export const updateBookRating = async (
  bookId: number,
  userId: number,
  rate: number | null
) => {
  const reqData = new FormData();
  reqData.append("bookId", `${bookId}`);
  reqData.append("userId", `${userId}`);
  reqData.append("rate", `${rate}`);
  const response = await api.post("api/book/rating", reqData);
  const { data } = response;
  return data;
};

export const fetchOneBook = async (id: string) => {
  const response = await api.get("api/book/" + id);
  return response.data;
};