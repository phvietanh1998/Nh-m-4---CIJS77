import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import CardContent from "@mui/material/CardContent";
import EuroIcon from "@mui/icons-material/Euro";
import { useBudgets } from "./context/BudgetsContext";

export default function TotalBalance() {
  const { transaction } = useBudgets();

  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: 450,
        margin: "40px auto",
        marginTop: 0,
        backgroundColor: "#438883",
        color: "white",
        borderRadius: 5,
        boxShadow: "1px 2px 9px gray",
      }}
    >
      <CardContent sx={{ padding: "10px" }}>
        <Typography gutterBottom variant="body1" sx={{ fontWeight: "bold" }}>
          Total Balance
        </Typography>
        <EuroIcon
          sx={{ color: "white", verticalAlign: "middle", marginRight: 1 }}
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            display: "inline-block",
            verticalAlign: "middle",
            paddingTop: 0.4,
          }}
        >
          {transaction
            .filter((item) => item.name === "income")
            .map((item) => item.amount)
            .reduce(
              (preValue, curValue) => parseInt(preValue) + parseInt(curValue),
              0
            ) -
            transaction
              .filter((item) => item.name === "expense")
              .map((item) => item.amount)
              .reduce(
                (preValue, curValue) => parseInt(preValue) + parseInt(curValue),
                0
              )}
        </Typography>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginTop: 3 }}
        >
          <Grid item xs={3.2} sx={{ textAlign: "left" }}>
            <ArrowCircleUpRoundedIcon
              sx={{ verticalAlign: "middle", marginRight: 1, color: "#25A969" }}
            />

            <Typography
              sx={{ verticalAlign: "middle" }}
              display="inline-block"
              variant="body1"
            >
              Incomes
            </Typography>
            <EuroIcon
              fontSize="small"
              sx={{
                color: "white",
                marginTop: 1,
                marginRight: 1,
                verticalAlign: "middle",
              }}
            />
            <Typography
              sx={{ verticalAlign: "middle", marginTop: 1, paddingTop: 0.1 }}
              display="inline-block"
              variant="body1"
            >
              {transaction
                .filter((item) => item.name === "income")
                .map((item) => item.amount)
                .reduce(
                  (preValue, curValue) =>
                    parseInt(preValue) + parseInt(curValue),
                  0
                )}
            </Typography>
          </Grid>
          <Grid item xs={3.5} sx={{ textAlign: "right" }}>
            <ArrowCircleDownRoundedIcon
              sx={{ verticalAlign: "middle", marginRight: 1, color: "red" }}
            />
            <Typography
              sx={{ verticalAlign: "middle", textAlign: "right" }}
              display="inline-block"
              variant="body1"
            >
              Expenses
            </Typography>
            <EuroIcon
              fontSize="small"
              sx={{
                marginRight: 1,
                color: "red",
                marginTop: 1,
                verticalAlign: "middle",
              }}
            />
            <Typography
              sx={{
                verticalAlign: "middle",
                marginTop: 1,
                fontWeight: "bold",
                paddingTop: 0.1,
              }}
              display="inline-block"
              variant="body1"
              color="red"
            >
              {transaction
                .filter((item) => item.name === "expense")
                .map((item) => item.amount)
                .reduce(
                  (preValue, curValue) =>
                    parseInt(preValue) + parseInt(curValue),
                  0
                )}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
