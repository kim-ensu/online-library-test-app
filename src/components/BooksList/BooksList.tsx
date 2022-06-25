import React, { FC } from "react";
import { useAppSelector } from "app/hooks";

type Props = {};

const BooksList: FC<Props> = (props) => {
  const booksList = useAppSelector((state) => state.books.booksArray);
  console.log(booksList);

  return (
    <>
      <span>Total Result {booksList.length}</span>
      {booksList.length ? (
        <ul>
          {booksList.map((book) => (
            <li key={book.id}>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />

              {book.volumeInfo.categories === undefined ? (
                <div></div>
              ) : (
                <span>{book.volumeInfo.categories[0]}</span>
              )}

              <span>{book.volumeInfo.title}</span>

              {book.volumeInfo.authors === undefined ? (
                <div></div>
              ) : (
                <ul>
                  {book.volumeInfo.authors.map((author, index) => (
                    <li key={book.volumeInfo.title}>{author}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <h1>Search and read your favourite books</h1>
      )}
    </>
  );
};

export default BooksList;
