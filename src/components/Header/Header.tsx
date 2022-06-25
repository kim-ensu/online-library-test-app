import React, { FC } from "react";
import "./Header.css";
import SearchField from "components/SearchField/SearchField";
import OptionsList from "components/OptionsList/OptionsList";

interface IOptionsList {
  id: string;
  label: string;
  values: Array<string>;
}

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
  return (
    <div className="header">
      <div className="header-content-wrp">
        <SearchField />

        <div className="header-filters">
          <OptionsList id={categories.id} label={categories.label} values={categories.values} />
          <OptionsList id={sortingBy.id} label={sortingBy.label} values={sortingBy.values} />
        </div>
      </div>
    </div>
  );
};

export default Header;
