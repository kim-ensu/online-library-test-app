import React, { FC } from "react";
import "./BookPage.css";

type Props = {};

const BookPage: FC<Props> = (props) => {
  return (
    <div className="bookpage">
      <div className="bookpage-image-container">
        <img src="" alt="" />
      </div>
      <div className="bookpage-info-container">
        <span className="bookpage-categories"></span>
        <h1 className="bookpage-title"></h1>
        <span className="bookpage-authors"></span>
        <p className="bookpage-description"></p>
      </div>
    </div>
  );
};

export default BookPage;
