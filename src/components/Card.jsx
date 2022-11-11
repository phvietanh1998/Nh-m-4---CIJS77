import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ReactTimeAgo from "react-time-ago";
import EuroIcon from "@mui/icons-material/Euro";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function Card(props) {
  return (
    <Box
      sx={{
        margin: "5% auto",
      }}
    >
      <Grid container direction="row" justifyContent="space-between">
        <Grid item xs={4}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {props.note}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ReactTimeAgo date={Date.parse(props.date)} locale="en-US" />
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ textAlign: "right", marginTop: 1 }}
          color={props.name ? "#25A969" : "red"}
        >
          {props.name ? (
            <AddIcon
              sx={{
                verticalAlign: "middle",
                fontSize: "15px",
              }}
            />
          ) : (
            <RemoveIcon
              sx={{
                verticalAlign: "middle",
                fontSize: "15px",
              }}
            />
          )}

          <EuroIcon
            sx={{
              verticalAlign: "middle",
              fontSize: "15px",
            }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              verticalAlign: "middle",
              display: "inline-block",
            }}
            align="right"
            variant="body1"
          >
            {props.amount}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
