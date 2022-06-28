import React, { FC, useState, ChangeEvent, KeyboardEvent, FormEvent } from "react";
import "./SearchField.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "app/hooks";
import { setSearchField } from "features/books/books-search-fields";
import { useNavigate } from "react-router-dom";

type Props = {};

const SearchField: FC<Props> = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchField(value));
    navigate("../", { replace: true });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(setSearchField(value));
      navigate("../", { replace: true });
    }
  };

  return (
    <Paper onSubmit={handleSubmit} component="form" className="search-field">
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Books"
        inputProps={{ "aria-label": "search google maps" }}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchField;
