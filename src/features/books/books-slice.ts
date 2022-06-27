import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBooksState, IBooksData } from "interfaces";

const initialState: IBooksState = {
  booksArray: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IBooksData>) => {
      state.booksArray = action.payload.items;
    },
  },
});

export const { setBooks } = booksSlice.actions;
export default booksSlice.reducer;
