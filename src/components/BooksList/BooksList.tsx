import React, { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "app/hooks";
import BookCard from "components/BookCard/BookCard";
import { setBooks } from "features/books/books-slice";
import { useFetchSearchedBooksQuery } from "features/books/books-api-slice";
import LoadMoreButton from "components/LoadMoreButton/LoadMoreButton";

type Props = {};

const BooksList: FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const booksList = useAppSelector((state) => state.books.booksArray);
  const booksSearchValues = useAppSelector((state) => state.booksSearchFields);
  const { data, isFetching } = useFetchSearchedBooksQuery(booksSearchValues);

  useEffect(() => {
    if (booksSearchValues.searchField || !isFetching) {
      dispatch(setBooks(data!));
    }
  }, [data]);

  return (
    <>
      {booksList.length ? (
        <>
          <span>Total Result {booksList.length}</span>
          <ul className="bookslist">
            {booksList.map(({ id, etag, volumeInfo }) => (
              <BookCard key={id + etag} id={id} bookInfo={volumeInfo} />
            ))}
          </ul>
          {booksList.length && !isFetching ? (
            <LoadMoreButton maxLoaded={booksSearchValues.booksLoaded} />
          ) : null}
        </>
      ) : (
        <h1>Search and read your favourite books</h1>
      )}
    </>
  );
};

export default BooksList;
