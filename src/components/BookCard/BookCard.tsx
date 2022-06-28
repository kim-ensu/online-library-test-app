import React, { FC } from "react";
import "./BookCard.css";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  bookInfo: {
    imageLinks: {
      thumbnail: string;
    };
    title: string;
    categories?: string[];
    authors: string[];
  };
};

const BookCard: FC<Props> = ({ id, bookInfo: { imageLinks, title, categories, authors } }) => {
  return (
    <li key={id} className="bookcard">
      <Link className="bookcard-link" to={"/book/" + id}>
        {imageLinks === undefined ? (
          <i>PLACEHOLDER</i>
        ) : (
          <img className="bookcard-img" src={imageLinks.thumbnail} alt={title} />
        )}
        <div className="bookcard-text-container">
          {categories === undefined ? (
            <div></div>
          ) : (
            <span className="bookcard-category">{categories[0]}</span>
          )}

          <span className="bookcard-title">{title}</span>

          {authors === undefined ? (
            <div></div>
          ) : (
            <ul>
              {authors.map((author, index) => (
                <li className="bookcard-author" key={id + author}>
                  {author}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </li>
  );
};

export default BookCard;
