import React from "react";

import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

import Select from "@mui/material/Select";
import { useLanguageContext } from "../context/context";

export default function BottomNav() {
  const { language, selectLanguage } = useLanguageContext();

  function selectChange(e) {
    selectLanguage(e.target.value);
  }

  return (
    <Box
      sx={{
        backgroundColor: "gray",
        textAlign: "center",
      }}
    >
      <Select
        value={language}
        onChange={selectChange}
        sx={{
          backgroundColor: "white",
          height: 30,
          width: 100,
          margin: "20px auto",
        }}
      >
        <MenuItem value={"en"}>en</MenuItem>
        <MenuItem value={"vi"}>vi</MenuItem>
      </Select>
    </Box>
  );
}
