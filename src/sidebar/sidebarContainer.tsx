import React from "react";
import * as S from "./styled";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";

const fonts = [
  ["Arial"], // Sans-serif
  ["Verdana"], // Sans-serif
  ["Helvetica"], // Sans-serif
  ["Times New Roman"], // Serif
  ["Georgia"], // Serif
  ["Garamond"], // Serif
  ["Courier New"], // Monospace
  ["Lucida Console"], // Monospace
  ["Comic Sans MS"], // Cursive
  ["Brush Script MT"], // Script
];

function SidebarContainer() {
  const [font, setFont] = useState("Arial");

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setFont(event.target.value);
  };

  return (
    <S.sideBarContainerDiv>
      <S.sidebarContainerInnerDiv>
        <S.sideBarTitle>Syntax Tree Creator</S.sideBarTitle>
        <S.divider />
        <S.sideBarSubHeader>Enter Your Tree:</S.sideBarSubHeader>
        <TextField
          id="outlined-basic"
          label="Enter your tree..."
          variant="outlined"
          sx={{
            width: "100%",
            backgroundColor: "white",

            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#d4a373",
              },
            },

            "& .MuiInputLabel-root.Mui-focused": {
              color: "black",
            },

            "& .MuiInputBase-input": {
              backgroundColor: "white",
            },
          }}
        />
        <S.sideBarSmallSubHeader>Enter Your Font:</S.sideBarSmallSubHeader>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={fonts}
          sx={{
            width: "100%",
            backgroundColor: "white", // Sets the background color of the container
            "& .MuiOutlinedInput-root": {
              width: "100%", // Ensures the input field itself also takes full width
              backgroundColor: "white", // Ensures the input field has a white background
              "&.Mui-focused fieldset": {
                borderColor: "#d4a373",
              },
              "& fieldset": {
                borderColor: "grey", // Optional: sets a default border color
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "black",
            },
            "& .MuiInputBase-input": {
              backgroundColor: "white",
            },
            "& .MuiAutocomplete-popupIndicator": {
              color: "grey", // Optional: Adjust the dropdown indicator color
            },
          }}
          renderInput={(params) => (
            <TextField {...params} label="Enter a differnt font..." variant="outlined" />
          )}
        />
      </S.sidebarContainerInnerDiv>
    </S.sideBarContainerDiv>
  );
}

export default SidebarContainer;
