import React, { FC, useState } from "react";
import "./Header.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {};

const Header: FC<Props> = (props) => {
  const [category, setCategory] = useState<string>("all");
  const [sortingBy, setsortingBy] = useState<string>("relevance");

  const handleChangeCategory = (event: SelectChangeEvent): void => {
    setCategory(event.target.value);
  };

  const handleChangeSortingBy = (event: SelectChangeEvent): void => {
    setsortingBy(event.target.value);
  };

  return (
    <div className="header">
      <div className="header-content-wrp">
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

        <div className="header-filters">
          <label htmlFor="categories">Categories</label>
          <FormControl id="categories" sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}>
            <Select
              value={category}
              onChange={handleChangeCategory}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}>
              <MenuItem value="all">all</MenuItem>
              <MenuItem value="art">art</MenuItem>
              <MenuItem value="biography">biography</MenuItem>
              <MenuItem value="computers">computers</MenuItem>
              <MenuItem value="history">history</MenuItem>
              <MenuItem value="medical">medical</MenuItem>
              <MenuItem value="poetry">poetry</MenuItem>
            </Select>
          </FormControl>

          <label htmlFor="sortingBy">Sorting By</label>
          <FormControl id="sortingBy" sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}>
            <Select
              value={sortingBy}
              onChange={handleChangeSortingBy}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}>
              <MenuItem value="relevance">relevance</MenuItem>
              <MenuItem value="newest">newest</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Header;
