import React, { FC } from "react";
import { useAppSelector } from "app/hooks";
import BookCard from "components/BookCard/BookCard";

type Props = {};

const BooksList: FC<Props> = (props) => {
  const booksList = useAppSelector((state) => state.books.booksArray);
  console.log(booksList);

  return (
    <>
      <span>Total Result {booksList.length}</span>
      {booksList.length ? (
        <ul className="bookslist">
          {booksList.map(({ id, etag, volumeInfo }) => (
            <BookCard key={id + etag} id={id} bookInfo={volumeInfo} />
          ))}
        </ul>
      ) : (
        <h1>Search and read your favourite books</h1>
      )}
    </>
  );
};

export default BooksList;
