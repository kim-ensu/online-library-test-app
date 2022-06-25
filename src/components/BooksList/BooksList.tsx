import React, { FC } from "react";
import { useAppSelector } from "app/hooks";

type Props = {};

const BooksList: FC<Props> = (props) => {
  const booksList = useAppSelector((state) => state.books.booksArray);

  return (
    <>
      {booksList.length ? (
        <h1>Search and read your favourite books</h1>
      ) : (
        booksList.map((book) => (
          <div key={book.id}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            <span>{book.volumeInfo.categories[0]}</span>
            <span>{book.volumeInfo.title}</span>
            <ul>
              {book.volumeInfo.authors.map((author) => (
                <li>{author}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </>
  );
};

export default BooksList;
