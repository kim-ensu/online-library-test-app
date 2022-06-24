import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BOOKS_API_KEY: string = process.env.REACT_APP_LIBRARY_API_KEY!;

interface BooksList {
  items: Array<Book>;
}

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    categories: string[];
    imageLinks: {
      thumbnail: string;
    };
  };
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://www.googleapis.com/books/v1`,
  }),
  endpoints(builder) {
    return {
      fetchBooks: builder.query<BooksList, number | void>({
        query(limit = 30) {
          return `volumes?key=${BOOKS_API_KEY}&maxResults=${limit}&q=flowers`;
        },
      }),
      fetchCategory: builder.query<BooksList, string | void>({
        query(category = "all") {
          return `&q=subject:${category}`;
        },
      }),
    };
  },
});

export const { useFetchBooksQuery, useFetchCategoryQuery } = apiSlice;

// interface BooksState {
//   booksArray: { name: string; author: string }[];
// }

// const initialState: BooksState = {
//   booksArray: [
//     { name: "Сага о Форсайтах", author: "John Galsworthy" },
//     { name: "Martin Iden", author: "Jack London" },
//   ],
// };

// const booksSlice = createSlice({
//   name: "books",
//   initialState,
//   reducers: {
//     getBooks: (state) => {},
//   },
// });

// export const { getBooks } = booksSlice.actions;
// export default booksSlice.reducer;
