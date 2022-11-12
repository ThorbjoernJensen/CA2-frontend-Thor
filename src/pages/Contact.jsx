import React, { useEffect, useState } from "react";
import ComboBox from "../components/Dropdown";

// import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const cities = ["Paris", "London", "Copenhagen", "Berlin"];

function Contact({ address, onGetCity }) {
  const [value, setValue] = useState(cities[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      <h1>Contacts</h1>
      <h3>{address.name}</h3>
      <p>{address.street}</p>
      <p>{address.town}</p>
      <p>{address.country}</p>
      {/* <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br /> */}
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          onGetCity(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          // onGetCity(newInputValue);
        }}
        id="controllable-states-demo"
        options={cities}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />{" "}
    </div>
  );
}

export default Contact;
