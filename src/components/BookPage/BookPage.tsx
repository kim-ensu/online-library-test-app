import { useAppSelector } from "app/hooks";
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import "./BookPage.css";

type Props = {};

const BookPage: FC<Props> = (props) => {
  let params = useParams();
  const bookinfo = useAppSelector((state) =>
    state.books.booksArray.find((item) => item.id === params.id)
  );

  return (
    <div className="bookpage">
      <div className="bookpage-image-container">
        <img src={bookinfo?.volumeInfo.imageLinks.thumbnail} alt={bookinfo?.volumeInfo.title} />
      </div>
      <div className="bookpage-info-container">
        <span className="bookpage-categories">Categories</span>
        <h1 className="bookpage-title">Title</h1>
        <span className="bookpage-authors">Authors</span>
        <p className="bookpage-description">Description</p>
      </div>
    </div>
  );
};

export default BookPage;
