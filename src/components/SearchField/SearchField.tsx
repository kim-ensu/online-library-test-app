import React, { FC } from "react";
import "./SearchField.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};

const SearchField: FC<Props> = (props) => {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Books"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchField;
