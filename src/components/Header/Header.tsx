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
          <input type="text" id="categories" />
          <label htmlFor="categories">Categories</label>
          <input type="text" id="categories" />
        </div>
      </div>
    </div>
  );
};

export default Header;
