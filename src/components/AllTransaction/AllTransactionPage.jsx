import React, { useState } from "react";
import BottomNav from "../BottomNav";
import { Box } from "@mui/material";

import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

import { v4 as uuidV4 } from "uuid";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import EuroIcon from "@mui/icons-material/Euro";
import Card from "../Card";
import Grid from "@mui/material/Grid";
import { useBudgets } from "../context/BudgetsContext";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import { groupByWeek } from "./SortTransactionByWeek";
import { getWeekRange } from "./SortTransactionByWeek";
export default function AllTransaction() {
  const navigate = useNavigate();
  const { transaction, getMonthName } = useBudgets();
  const [checkFilter, setFilter] = useState({
    day: true,
    week: false,
    month: false,
    year: false,
  });
  const dateHistory = transaction.map((item) => {
    return new Date(Date.parse(item.date)).toLocaleDateString();
  });
  const weekHistory = groupByWeek(transaction.map((item) => item.date));
  const monthHistory = transaction.map((item) => {
    return (
      getMonthName(new Date(Date.parse(item.date)).getMonth()) +
      " " +
      new Date(Date.parse(item.date)).getFullYear()
    );
  });
  const yearHistory = transaction.map((item) => {
    return new Date(Date.parse(item.date)).getFullYear();
  });
  function getFilter(e) {
    const value = e.target.name;
    setFilter((preValue) => {
      return {
        ...preValue,
        day: false,
        week: false,
        month: false,
        year: false,
        [value]: true,
      };
    });
  }

  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          maxWidth: "450px",
          top: 100,
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ maxWidth: 450, margin: "30px auto" }}
        >
          <Grid item xs={4.5}>
            <IconButton onClick={() => navigate("/")}>
              <ArrowBackIosNewIcon
                sx={{ verticalAlign: "middle", marginRight: 1, color: "black" }}
              />
            </IconButton>
          </Grid>
          <Grid item xs={5}>
            <Typography
              sx={{ verticalAlign: "middle", fontWeight: "bold" }}
              display="inline-block"
              variant="body1"
            >
              All Transaction
            </Typography>
          </Grid>
        </Grid>

        <Stack
          justifyContent="center"
          direction="row"
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            padding: 0,
            margin: "10px 0px",
          }}
        >
          <Button
            onClick={getFilter}
            name="day"
            sx={{
              backgroundColor: checkFilter.day ? "#438883" : "none",
              color: checkFilter.day ? "white" : "black",
              width: 150,
              borderRadius: 10,
              "&:hover": {
                backgroundColor: checkFilter.day ? "#438883" : "white",
              },
            }}
          >
            Day
          </Button>
          <Button
            onClick={getFilter}
            name="week"
            sx={{
              backgroundColor: checkFilter.week ? "#438883" : "none",

              color: checkFilter.week ? "white" : "black",
              width: 150,
              borderRadius: 10,
              "&:hover": {
                backgroundColor: checkFilter.week ? "#438883" : "white",
              },
            }}
          >
            Week
          </Button>
          <Button
            onClick={getFilter}
            name="month"
            sx={{
              backgroundColor: checkFilter.month ? "#438883" : "none",

              color: checkFilter.month ? "white" : "black",
              width: 150,
              borderRadius: 10,
              "&:hover": {
                backgroundColor: checkFilter.month ? "#438883" : "white",
              },
            }}
          >
            Month
          </Button>
          <Button
            onClick={getFilter}
            name="year"
            sx={{
              backgroundColor: checkFilter.year ? "#438883" : "none",

              color: checkFilter.year ? "white" : "black",
              width: 150,
              borderRadius: 10,
              "&:hover": {
                backgroundColor: checkFilter.year ? "#438883" : "white",
              },
            }}
          >
            Year
          </Button>
        </Stack>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginTop: 3 }}
        >
          <Grid item xs={3} sx={{ textAlign: "left", marginLeft: 2 }}>
            <Typography
              sx={{ verticalAlign: "middle", fontWeight: "bold" }}
              variant="body1"
            >
              Incomes
            </Typography>
            <EuroIcon
              fontSize="small"
              sx={{
                color: "#438883",
                marginTop: 1,
                marginRight: 1,
                verticalAlign: "middle",
              }}
            />
            <Typography
              sx={{
                verticalAlign: "middle",
                marginTop: 1,
                paddingTop: 0.1,
                fontWeight: "bold",
              }}
              display="inline-block"
              variant="body1"
              color="#438883"
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
          <Grid item xs={3} sx={{ textAlign: "right", marginRight: 2 }}>
            <Typography
              sx={{
                verticalAlign: "middle",
                textAlign: "right",
                fontWeight: "bold",
              }}
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
      </Box>
      <Box
        sx={{
          maxWidth: 450,
          backgroundColor: "white",

          borderRadius: 5,
          margin: "0 auto",
          marginTop: 25,
          padding: 1,
        }}
      >
        {checkFilter.day &&
          dateHistory
            .filter((v, i, a) => a.indexOf(v) === i)
            .map((value) => {
              return (
                <Box key={uuidV4()} sx={{ margin: "50px 5px" }}>
                  <Typography sx={{ fontWeight: "bold" }} variant="body1">
                    {value}
                  </Typography>

                  {transaction
                    .filter(
                      (item) =>
                        new Date(Date.parse(item.date)).toLocaleDateString() ===
                        value
                    )
                    .map((item) => {
                      return (
                        <Card
                          key={item.key}
                          amount={item.amount}
                          date={item.date}
                          note={item.note}
                          name={item.name === "income" ? true : false}
                          sx={{ margin: 0 }}
                        />
                      );
                    })}
                </Box>
              );
            })}
        {checkFilter.week &&
          weekHistory.map((value) => {
            return (
              <Box key={uuidV4()} sx={{ margin: "50px 5px" }}>
                <Typography sx={{ fontWeight: "bold" }} variant="body1">
                  {String(value[0])}
                  {console.log(value)}
                </Typography>

                {transaction
                  .filter((item) => getWeekRange(item.date) === value[0])
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
            );
          })}
        {checkFilter.month &&
          monthHistory
            .filter((v, i, a) => a.indexOf(v) === i)

            .map((value) => {
              return (
                <Box key={uuidV4()} sx={{ margin: "50px 5px" }}>
                  <Typography sx={{ fontWeight: "bold" }} variant="body1">
                    {value}
                  </Typography>

                  {transaction
                    .filter(
                      (item) =>
                        getMonthName(
                          new Date(Date.parse(item.date)).getMonth()
                        ) +
                          " " +
                          new Date(Date.parse(item.date)).getFullYear() ===
                        value
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
              );
            })}
        {checkFilter.year &&
          yearHistory
            .filter((v, i, a) => a.indexOf(v) === i)
            // .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((value) => {
              return (
                <Box key={uuidV4()} sx={{ margin: "50px 5px" }}>
                  <Typography sx={{ fontWeight: "bold" }} variant="body1">
                    {value}
                  </Typography>

                  {transaction
                    .filter(
                      (item) =>
                        new Date(Date.parse(item.date)).getFullYear() === value
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
              );
            })}
      </Box>

      <BottomNav />
    </div>
  );
}
