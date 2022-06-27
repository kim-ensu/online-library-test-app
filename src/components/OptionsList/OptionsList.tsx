import React, { FC, useState } from "react";
import "./OptionsList.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  name: string;
  id: string;
  label: string;
  values: Array<string>;
  handleChangeOptions: (e: SelectChangeEvent) => void;
};

const OptionsList: FC<Props> = ({ id, label, values, name, handleChangeOptions }) => {
  const [currentValue, setCurrentValue] = useState<string>(values[0]);

  const handleChange = (event: SelectChangeEvent): void => {
    setCurrentValue(event.target.value);
    handleChangeOptions(event);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <FormControl id={id} sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}>
        <Select
          name={name}
          value={currentValue}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}>
          {values.map((value) => (
            <MenuItem value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default OptionsList;
