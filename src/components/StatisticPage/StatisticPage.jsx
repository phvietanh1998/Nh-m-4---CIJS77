import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useBudgets } from "../context/BudgetsContext";
import Card from "../Card";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import Select from "@mui/material/Select";
import BottomNav from "../BottomNav";
import ChartTransaction from "./ChartTransaction";
export default function StatisticPage() {
  const [age, setAge] = useState(2022);
  const { transaction, getTotalInMonth } = useBudgets();
  const [isDec, setDec] = useState(true);
  const [incomeTrueExpenseFalse, setIncomeexpense] = useState(true);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const dataChart = getTotalInMonth({
    year: age,
    type: incomeTrueExpenseFalse ? "income" : "expense",
  });
  function handleClickIncomeexpense(event) {
    const { name } = event.target;
    setIncomeexpense(() => {
      if (name === "expense") {
        return false;
      } else if (name === "income") {
        return true;
      }
    });
  }
  function sortTransaction() {
    setDec(!isDec);
  }
  return (
    <div>
      <Box
        className="screen-statistics"
        sx={{
          position: "fixed",

          top: 200,
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          paddingTop: 10,
        }}
      >
        <Typography
          sx={{
            verticalAlign: "middle",
            fontWeight: "bold",
            textAlign: "center",
          }}
          variant="body1"
        >
          Statistics
        </Typography>
        <Grid
          className="statistic-filter"
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ width: 450 }}
        >
          <Grid item xs={6}>
            <Button
              onClick={handleClickIncomeexpense}
              name="income"
              sx={{
                backgroundColor: incomeTrueExpenseFalse
                  ? "rgba(67, 136, 131, .2)"
                  : "none",
                color: incomeTrueExpenseFalse ? "#438883" : "black",
                width: 100,
                borderRadius: 3,
                fontWeight: "bold",
              }}
            >
              Income
            </Button>
            <Button
              onClick={handleClickIncomeexpense}
              name="expense"
              sx={{
                backgroundColor: !incomeTrueExpenseFalse
                  ? "rgba(233, 73, 63,.2)"
                  : "none",
                color: "#F95B51",
                width: 100,
                borderRadius: 3,
                fontWeight: "bold",
              }}
            >
              Expense
            </Button>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: "right" }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              sx={{ width: "100px", height: "40px", textAlign: "center" }}
            >
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Box
          sx={{
            maxWidth: 450,
            height: 250,
            backgroundColor: "white",
            margin: "0 auto",
            marginBottom: 3,
            textAlign: "center",
          }}
        >
          <ChartTransaction
            incExp={incomeTrueExpenseFalse}
            dataChart={dataChart}
          />
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Grid item xs={5}>
            <Typography sx={{ fontWeight: "bold" }} variant="body1">
              Top {incomeTrueExpenseFalse ? "Income" : "Spending"} {age}
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: "right" }}>
            <IconButton
              tabIndex={-1}
              onClick={sortTransaction}
              sx={{ marginRight: 0, transform: "rotate(90deg)" }}
            >
              <SyncAltIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          maxWidth: 450,
          backgroundColor: "white",
          borderRadius: 5,
          margin: "0 auto",
          marginTop: 55,
          padding: 1,
        }}
      >
        {transaction
          .filter((item) => {
            if (incomeTrueExpenseFalse) return item.name === "income";
            else return item.name === "expense";
          })
          .sort((a, b) => (isDec ? b.amount - a.amount : a.amount - b.amount))
          .filter(
            (item) => new Date(Date.parse(item.date)).getFullYear() === age
          )
          .map((item) => {
            return (
              <Card
                key={item.key}
                amount={item.amount}
                date={item.date}
                note={item.note}
                name={item.name === "income" ? true : false}
                sx={{ marginTop: 0 }}
              />
            );
          })}
      </Box>

      <BottomNav />
    </div>
  );
}
