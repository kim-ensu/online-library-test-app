import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/books-slice";
import { apiSlice } from "features/books/books-api-slice";
import booksSearchFieldsReducer from "features/books/books-search-fields";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [apiSlice.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, booksReducer);

export const store = configureStore({
  reducer: {
    books: persistedReducer,
    booksSearchFields: booksSearchFieldsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
