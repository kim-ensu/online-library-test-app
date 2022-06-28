import BookPage from "components/BookPage/BookPage";
import BooksList from "components/BooksList/BooksList";
import React, { FC } from "react";
import { Routes as Routers, Route } from "react-router-dom";

type Props = {};

const Routes: FC<Props> = () => {
  return (
    <Routers>
      <Route path="/" element={<BooksList />} />
      <Route path="/book/:id" element={<BookPage />} />
    </Routers>
  );
};

export default Routes;
