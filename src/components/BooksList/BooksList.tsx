import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useFetchBooksQuery, useFetchCategoryQuery } from "features/books/books-slice";
import { Book } from "features/books/books-slice";

type Props = {};

const BooksList: FC<Props> = (props) => {
  const { data, isFetching } = useFetchBooksQuery();
  console.log(data);

  // const booksArray = useAppSelector((state) => state.books.booksArray);
  return (
    <>
      {data?.items ? (
        <div>
          <p>Number of books fetched: {data?.items.length}</p>
          <div className="testList">
            {data?.items.map((book: Book) => (
              <div key={book.id}>
                <p>{book.id}</p>
                <h1>{book.volumeInfo.title}</h1>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="" height={250} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Wait...</p>
      )}
    </>
  );
};

export default BooksList;
