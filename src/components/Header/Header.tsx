import React, { FC, useState, useEffect, ChangeEvent } from "react";
import "./Header.css";
import SearchField from "components/SearchField/SearchField";
import OptionsList from "components/OptionsList/OptionsList";
import { ISearchFields, IOptionsList } from "interfaces";
import { useFetchSearchedBooksQuery } from "features/books/books-api-slice";
import { useAppDispatch } from "app/hooks";
import { getBooks } from "features/books/books-slice";

const categories: IOptionsList = {
  id: "categories",
  label: "Categories",
  values: ["all", "art", "biography", "computers", "history", "medical", "poetry"],
};

const sortingBy: IOptionsList = {
  id: "sortingBy",
  label: "SortingBy",
  values: ["relevance", "newest"],
};

type Props = {};

const Header: FC<Props> = (props) => {
  const dispatch = useAppDispatch();

  const [searchValues, setSearchValues] = useState<ISearchFields>({
    searchField: "flowers",
    category: "all",
    sortingBy: "relevance",
    booksLoaded: 30,
  });

  const { data, isFetching } = useFetchSearchedBooksQuery(searchValues);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchValues({
      ...searchValues,
      [name]: value,
    });
  };

  useEffect(() => {
    if (!isFetching) {
      dispatch(getBooks(data!));
    }
  }, [data]);

  return (
    <div className="header">
      <div className="header-content-wrp">
        <SearchField name="searchField" />

        <div className="header-filters">
          <OptionsList
            name="category"
            id={categories.id}
            label={categories.label}
            values={categories.values}
          />
          <OptionsList
            name="sortingBy"
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
