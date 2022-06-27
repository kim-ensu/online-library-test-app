import React, { FC } from "react";
import "./LoadMoreButton.css";
import Button from "@mui/material/Button";
import { useAppDispatch } from "app/hooks";
import { setStartIndexForLoad } from "features/books/books-search-fields";

type Props = {
  startIndex: number;
};

const LoadMoreButton: FC<Props> = ({ startIndex }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setStartIndexForLoad(startIndex + 30));
  };
  return (
    <Button onClick={handleClick} variant="contained">
      Load More
    </Button>
  );
};

export default LoadMoreButton;
