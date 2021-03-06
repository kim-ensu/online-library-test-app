import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearchFields } from "interfaces";

const initialState: ISearchFields = {
  searchField: "",
  category: "all",
  sortingBy: "relevance",
  startIndexForLoad: 0,
  amountToLoad: 30,
};

const booksSearchFieldsSlice = createSlice({
  name: "booksSearchFields",
  initialState,
  reducers: {
    setSearchField: (state, action: PayloadAction<string>) => {
      state.searchField = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setOrderBy: (state, action: PayloadAction<string>) => {
      state.sortingBy = action.payload;
    },
    setStartIndexForLoad: (state, action: PayloadAction<number>) => {
      state.startIndexForLoad = action.payload;
    },
  },
});

export const { setSearchField, setCategory, setOrderBy, setStartIndexForLoad } =
  booksSearchFieldsSlice.actions;
export default booksSearchFieldsSlice.reducer;
