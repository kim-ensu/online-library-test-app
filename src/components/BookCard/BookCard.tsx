import React, { FC } from "react";

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
    <li key={id}>
      <img src={imageLinks.thumbnail} alt={title} />

      {categories === undefined ? <div></div> : <span>{categories[0]}</span>}

      <span>{title}</span>

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
