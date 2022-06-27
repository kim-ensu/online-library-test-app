import React, { FC, useState, useEffect, ChangeEvent } from "react";
import "./Header.css";
import SearchField from "components/SearchField/SearchField";
import OptionsList from "components/OptionsList/OptionsList";
import { ISearchFields, IOptionsList } from "interfaces";
import { useFetchSearchedBooksQuery } from "features/books/books-api-slice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { setBooks } from "features/books/books-slice";
import { SelectChangeEvent } from "@mui/material/Select";

const categories: IOptionsList = {
  name: "category",
  id: "categories",
  label: "Categories",
  values: ["all", "art", "biography", "computers", "history", "medical", "poetry"],
};

const sortingBy: IOptionsList = {
  name: "sortingBy",
  id: "sortingBy",
  label: "SortingBy",
  values: ["relevance", "newest"],
};

type Props = {};

const Header: FC<Props> = (props) => {
  return (
    <div className="header">
      <div className="header-content-wrp">
        <SearchField />

        <div className="header-filters">
          <OptionsList
            name={categories.name}
            id={categories.id}
            label={categories.label}
            values={categories.values}
          />
          <OptionsList
            name={sortingBy.name}
            id={sortingBy.id}
            label={sortingBy.label}
            values={sortingBy.values}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
