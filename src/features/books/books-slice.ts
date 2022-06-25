import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "./books-api-slice";

interface BooksState {
  booksArray: Array<Book>;
}

const initialState: BooksState = {
  booksArray: [],
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
