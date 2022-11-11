import React from "react";
import Input from "@mui/material/Input";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function InputTime(props) {
  return (
    <Box
      sx={{
        maxWidth: 450,
        backgroundColor: "white",

        padding: "0px 50px",
      }}
    >
      <Typography variant="body2">NOTE</Typography>
      <Input
        name="note"
        onChange={props.handleChange}
        value={props.value}
        type="text"
        placeholder="Shopping ..."
        sx={{
          width: "100%",
          height: "150px",
          border: "2px solid #438883",
          borderRadius: 2,
          padding: "0 20px",
          mt: 1,
          overflowWrap: "break-word",
          color: "#438883",
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
