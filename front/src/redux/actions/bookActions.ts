import axios from "axios";
import { Dispatch } from "redux";
import { api } from "../../api/axios"
import { BookAction, BookActionTypes } from "../../types/book/book.types";

export const fetchBooks = (searchParams: URLSearchParams) => {
  return async (dispatch: Dispatch<BookAction>) => {
    try {
      dispatch({ type: BookActionTypes.FETCH_BOOKS });

      let url = "api/book/?" + searchParams.toString();

      const response = await api.get("api/book", {
        params: Object.fromEntries(searchParams),
      });

      dispatch({
        type: BookActionTypes.FETCH_BOOKS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);

      dispatch({
        type: BookActionTypes.FETCH_BOOKS_ERROR,
        payload: "An error occurred loading the list of books",
      });
    }
  };
};