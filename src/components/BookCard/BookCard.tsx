import React, { FC } from "react";
import "./BookCard.css";

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
      <img src={imageLinks.thumbnail} alt={title} />

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
            <li key={id + author}>{author}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default BookCard;
