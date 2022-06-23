import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BOOKS_API_KEY = process.env.REACT_APP_LIBRARY_API_KEY;

interface Book {
  id: string;
  name: string;
  author: string;
  image: {
    url: string;
  };
}

interface BooksState {
  booksArray: { name: string; author: string }[];
}

const initialState: BooksState = {
  booksArray: [
    { name: "Сага о Форсайтах", author: "John Galsworthy" },
    { name: "Martin Iden", author: "Jack London" },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooks: (state) => {},
  },
});

export const { getBooks } = booksSlice.actions;
export default booksSlice.reducer;
