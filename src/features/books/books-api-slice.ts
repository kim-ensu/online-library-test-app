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
        query({ searchField, category, sortingBy, startIndexForLoad, amountToLoad }) {
          return `volumes?q=${searchField}${
            category === "all" ? "" : `+subject:${category}`
          }&orderBy=${sortingBy}&startIndex=${startIndexForLoad}&maxResults=${amountToLoad}&key=${BOOKS_API_KEY}`;
        },
      }),
    };
  },
});

export const { useFetchSearchedBooksQuery } = apiSlice;
