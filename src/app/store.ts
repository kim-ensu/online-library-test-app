import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/books-slice";
import { apiSlice } from "features/books/books-api-slice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
