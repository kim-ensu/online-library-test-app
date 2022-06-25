import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBooksState } from "interfaces";

const initialState: IBooksState = {
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
