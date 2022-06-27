import React, { FC } from "react";
import "./LoadMoreButton.css";
import Button from "@mui/material/Button";
import { useAppDispatch } from "app/hooks";
import { setMaxLoaded } from "features/books/books-search-fields";

type Props = {
  maxLoaded: number;
};

const LoadMoreButton: FC<Props> = ({ maxLoaded }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setMaxLoaded(maxLoaded));
  };
  return (
    <Button onClick={handleClick} variant="contained">
      Load More
    </Button>
  );
};

export default LoadMoreButton;
