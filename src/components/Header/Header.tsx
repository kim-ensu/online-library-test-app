import React, { FC } from "react";
import "./Header.css";
import SearchField from "components/SearchField/SearchField";
import OptionsList from "components/OptionsList/OptionsList";
import { IOptionsList } from "interfaces";

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
        <h1 className="header-text">Search for books</h1>
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
