import React, { FC, useState } from "react";
import "./OptionsList.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch } from "app/hooks";
import { setCategory, setOrderBy, setStartIndexForLoad } from "features/books/books-search-fields";

type Props = {
  name: string;
  id: string;
  label: string;
  values: Array<string>;
};

const OptionsList: FC<Props> = ({ id, label, values, name }) => {
  const [currentValue, setCurrentValue] = useState<string>(values[0]);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent): void => {
    setCurrentValue(event.target.value);
    event.target.name === "category"
      ? dispatch(setCategory(event.target.value))
      : dispatch(setOrderBy(event.target.value));
    setStartIndexForLoad(0);
  };

  return (
    <div className="filter-wrap">
      <label className="filter-label" htmlFor={id}>
        {label}
      </label>
      <FormControl id={id} className="form-control">
        <Select
          name={name}
          value={currentValue}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}>
          {values.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default OptionsList;
