import React, { FC, useEffect } from "react";
import "./BooksList.css";
import { useAppSelector, useAppDispatch } from "app/hooks";
import BookCard from "components/BookCard/BookCard";
import { addBooks, setBooks } from "features/books/books-slice";
import { useFetchSearchedBooksQuery } from "features/books/books-api-slice";
import Button from "@mui/material/Button";
import { setStartIndexForLoad } from "features/books/books-search-fields";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

type Props = {};

const BooksList: FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const booksList = useAppSelector((state) => state.books.booksArray);
  const booksSearchValues = useAppSelector((state) => state.booksSearchFields);
  const { data, isFetching } = useFetchSearchedBooksQuery(booksSearchValues);

  useEffect(() => {
    if (booksSearchValues.startIndexForLoad === 0 && booksSearchValues.searchField && !isFetching) {
      dispatch(setBooks(data!));
    } else if (booksSearchValues.startIndexForLoad && booksList.length && !isFetching) {
      dispatch(addBooks(data!));
      console.log(isFetching);
    }
  }, [booksSearchValues, data]);

  const handleClick = () => {
    dispatch(setStartIndexForLoad(booksSearchValues.startIndexForLoad + 30));
  };

  return (
    <main className="main">
      {booksList.length ? (
        <>
          <span>Found {booksList.length} Results</span>
          <ul className="bookslist">
            {booksList.map(({ id, etag, volumeInfo }) => (
              <BookCard key={id + etag} id={id} bookInfo={volumeInfo} />
            ))}
          </ul>
          {booksList.length ? (
            isFetching ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            ) : (
              <Button onClick={handleClick} variant="contained">
                Load More
              </Button>
            )
          ) : null}
        </>
      ) : isFetching ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <h1 className="bookslist-header">Search and read your favourite books</h1>
      )}
    </main>
  );
};

export default BooksList;
