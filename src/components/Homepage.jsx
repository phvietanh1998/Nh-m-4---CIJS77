import React from "react";
import { Box, IconButton } from "@mui/material";
import BottomNav from "./BottomNav";
import TotalBalance from "./TotalBalance";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import logo from "./image/roundedRect.png";
import { useBudgets } from "./context/BudgetsContext";

export default function Homepage() {
  const { transaction } = useBudgets();
  const navigate = useNavigate();
  return (
    <Box
      className="specific"
      sx={{
        padding: 5,
        paddingTop: 5,

        marginTop: 0,
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 200px",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
        // boxShadow: "3px 0 4px -4px #999, -3px 0 4px -4px #999",
        // mozBoxShadow: "6px 0 4px -4px #999, -6px 0 4px -4px #999",
        // webkitBoxShadow: "6px 0 4px -4px #999, -6px 0 4px -4px #999",
      }}
    >
      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          width: "550px",
          height: "120px",
          textAlign: "center",
          zIndex: 2,
          margin: "0 auto",
          backgroundImage: `url(${logo})`,
          backgroundColor: "#cccccc",
          borderBottomLeftRadius: "50px 20px",
        }}
      ></Box> */}
      <TotalBalance />
      <Box
        className="width-homepage"
        sx={{
          width: "100%",

          margin: 0,
          color: "black",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Grid item xs={8}>
            <Typography sx={{ fontWeight: "bold" }} variant="body1">
              Transaction history
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: "right" }}>
            <IconButton
              sx={{ paddingRight: 0 }}
              onClick={() => navigate("/alltransaction")}
            >
              <Typography align="right">
                <Link color="text.secondary" variant="body2" underline="none">
                  See all
                </Link>
              </Typography>
            </IconButton>
          </Grid>
        </Grid>
        <Box className="scrollBar">
          {transaction
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((item) => {
              return (
                <Card
                  key={item.key}
                  amount={item.amount}
                  date={item.date}
                  note={item.note}
                  name={item.name === "income" ? true : false}
                />
              );
            })}
        </Box>
      </Box>

      <BottomNav />
    </Box>
  );
}
