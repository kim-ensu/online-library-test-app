import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/books-slice";
import { apiSlice } from "features/books/books-api-slice";
import booksSearchFields from "features/books/books-search-fields";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    booksSearchFields: booksSearchFields,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
