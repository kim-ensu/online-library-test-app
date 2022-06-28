import { useAppSelector } from "app/hooks";
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import "./BookPage.css";

type Props = {};

const BookPage: FC<Props> = (props) => {
  let params = useParams();
  const bookinfo = useAppSelector((state) =>
    state.books.booksArray.find((item) => item.id === params.name)
  );

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
