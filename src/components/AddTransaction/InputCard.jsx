import React from "react";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import EuroIcon from "@mui/icons-material/Euro";
import InputAdornment from "@mui/material/InputAdornment";

export default function InputCard(props) {
  return (
    <Box
      sx={{
        maxWidth: 450,
        backgroundColor: "white",

        padding: "10px 50px",
      }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <Typography variant="body2">AMOUNT</Typography>
      <Input
        name="amount"
        placeholder="48.00"
        type="number"
        onChange={props.handleChange}
        value={props.value}
        startAdornment={
          <InputAdornment position="start">
            <EuroIcon sx={{ color: "#438883" }} />
          </InputAdornment>
        }
        endAdornment={
          <IconButton
            sx={{
              visibility: props.value ? "visible" : "hidden",
              color: "#438883",
            }}
            onClick={props.handleClearClick}
          >
            <ClearIcon />
          </IconButton>
        }
        sx={{
          width: "100%",
          color: "#438883",
          border: "2px solid #438883",
          borderRadius: 2,
          padding: "5px 20px",
          mt: 1,
          pr: 1.25,
          "&::before": { borderBottom: "none" },
          "&::after": { borderBottom: "none" },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
        }}
      />
      {!props.isValid && (
        <Typography variant="subtitle2" color="red">
          Require
        </Typography>
      )}
    </Box>
  );
}
