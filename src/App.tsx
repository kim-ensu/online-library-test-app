import React from "react";
import "./App.css";
import Routes from "Routes";
import Header from "./components/Header/Header";
import BooksList from "components/BooksList/BooksList";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      {/* <BooksList /> */}
    </div>
  );
}

export default App;
