import React, { FC } from "react";
import "./Header.css";

type Props = {};

const Header: FC<Props> = (props) => {
  return (
    <div className="header">
      <div className="header-content-wrp">
        <h1>Search for books</h1>
        <input type="text" />
        <div className="header-filters">
          <label htmlFor="categories">Categories</label>
          <select id="categories" required>
            <option value="all">all</option>
            <option value="art">art</option>
            <option value="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
          </select>
          <label htmlFor="sortingBy">Sorting By</label>
          <select id="sortingBy" required>
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
