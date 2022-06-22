import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BooksState {
  booksArray: Array<object>;
}

const initialState: BooksState = {
  booksArray: [{name: "Сага о Форсайтах", author: "John Galsworthy"}]
}

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooks: state => {}
  }
})

export const { getBooks } = booksSlice.actions;
export default booksSlice.reducer;