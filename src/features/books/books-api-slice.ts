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

interface SearchFields {
  searchField: string;
  category: string;
  sortingBy: string;
  booksLoaded: number;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://www.googleapis.com/books/v1`,
  }),
  endpoints(builder) {
    return {
      fetchSearchedBooks: builder.query<BooksList, SearchFields>({
        query({ searchField, category, sortingBy, booksLoaded }) {
          return `volumes?key=${BOOKS_API_KEY}&q=${searchField}+subject:${category}&orderBy:${sortingBy}&maxResults=${booksLoaded}`;
        },
      }),
      // fetchMoreBooks: builder.query<BooksList, number>({
      //   query(limit = 30) {
      //     return `&maxResults=${limit + 30}`;
      //   },
      // }),
      // fetchCategory: builder.query<BooksList, string>({
      //   query(category = "all") {
      //     return `&subject:${category}`;
      //   },
      // }),
      // fetchSortingBy: builder.query<BooksList, string>({
      //   query(sortingBy = "relevance") {
      //     return `&orderBy:${sortingBy}`;
      //   },
      // }),
    };
  },
});

export const { useFetchSearchedBooksQuery } = apiSlice;
