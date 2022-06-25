import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBooksData, ISearchFields } from "interfaces";

const BOOKS_API_KEY: string = process.env.REACT_APP_LIBRARY_API_KEY!;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://www.googleapis.com/books/v1`,
  }),
  endpoints(builder) {
    return {
      fetchSearchedBooks: builder.query<IBooksData, ISearchFields>({
        query({ searchField, category, sortingBy, booksLoaded }) {
          return `volumes?key=${BOOKS_API_KEY}&q=${searchField}+subject:${category}&orderBy:${sortingBy}&maxResults=${booksLoaded}`;
        },
      }),
    };
  },
});

export const { useFetchSearchedBooksQuery } = apiSlice;
