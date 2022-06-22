import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BooksState {
  booksArray: {name: string, author: string}[];
}

const initialState: BooksState = {
  booksArray: [
    {name: "Сага о Форсайтах", author: "John Galsworthy"},
    {name: "Martin Iden", author: "Jack London"}
  ]
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