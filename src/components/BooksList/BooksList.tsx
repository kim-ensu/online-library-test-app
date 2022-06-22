import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";

type Props = {};

const BooksList: FC<Props> = (props) => {
  const booksArray = useAppSelector((state) => state.books.booksArray);

  return (
    <div>
      {booksArray.map((book) => (
        <div>
          <h1>{book.name}</h1>
          <span>{book.author}</span>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
