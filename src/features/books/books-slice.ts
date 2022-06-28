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
    addBooks: (state, action: PayloadAction<IBooksData>) => {
      state.booksArray = state.booksArray.concat(action.payload.items);
    },
  },
});

export const { setBooks, addBooks } = booksSlice.actions;
export default booksSlice.reducer;
