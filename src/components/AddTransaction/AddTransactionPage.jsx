import React, { useState } from "react";
import BottomNav from "../BottomNav";
import { Box } from "@mui/material";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import InputCard from "./InputCard";
import InputTime from "./InputTime";
import InputNote from "./InputNote";
import Grid from "@mui/material/Grid";
import { useBudgets } from "../context/BudgetsContext";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import logo from "../image/roundedRect.png";
import { useEffect } from "react";
import Alert from "@mui/material/Alert";

export default function AddTransactionPage() {
  const { addExpense, addIncome } = useBudgets();
  const [validValue, setvalidValue] = useState({
    amount: true,
    date: true,
    note: true,
  });
  const [alert, setAlert] = useState(false);
  const [incomes, setIncomes] = useState({ amount: "", date: "", note: "" });
  const [expenses, setExpenses] = useState({ amount: "", date: "", note: "" });
  const [incomeTrueexpenseFalse, setIncomeexpense] = useState(true);
  useEffect(() => {
    console.log("effect");
  }, []);
  const navigate = useNavigate();
  function onClickNewTransaction(event) {
    event.preventDefault();
    if (incomeTrueexpenseFalse) {
      if (!incomes.amount && !incomes.date && !incomes.note) {
        setvalidValue((prev) => {
          return { ...prev, amount: false, date: false, note: false };
        });
      } else if (incomes.amount && !incomes.date && incomes.note) {
        setvalidValue((prev) => {
          return { ...prev, date: false };
        });
      } else if (incomes.amount && incomes.date && incomes.note) {
        addIncome(incomes);
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
        setIncomes((prevVal) => {
          return { ...prevVal, amount: "", note: "", date: "" };
        });
      }
    } else {
      if (!expenses.amount && !expenses.date && !expenses.note) {
        setvalidValue((prev) => {
          return { ...prev, amount: false, date: false, note: false };
        });
      } else if (expenses.amount && expenses.date && expenses.note) {
        addExpense(expenses);
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
        setExpenses((prevVal) => {
          return { ...prevVal, amount: "", note: "", date: "" };
        });
      } else if (expenses.amount && !expenses.date && expenses.note) {
        setvalidValue((prev) => {
          return { ...prev, date: false };
        });
      }
    }
  }
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
  function handleChangeInput(event) {
    const { name, value } = event.target;

    setvalidValue((prev) => {
      return { ...prev, [name]: !value ? false : true };
    });

    incomeTrueexpenseFalse
      ? setIncomes((prevVal) => {
          return { ...prevVal, [name]: value };
        })
      : setExpenses((prevVal) => {
          return { ...prevVal, [name]: value };
        });
  }
  return (
    <Box
      className="specificAdd"
      sx={{
        padding: 3,
        height: "800px",
        marginTop: 0,
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 200px",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ maxWidth: 450, margin: "10px auto" }}
      >
        <Grid item xs={2}>
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIosNewIcon
              sx={{ verticalAlign: "middle", marginRight: 1, color: "white" }}
            />
          </IconButton>
        </Grid>
        <Grid item xs={5}>
          <Typography
            sx={{
              verticalAlign: "middle",
              fontWeight: "body",
              color: "white",
              textAlign: "center",
            }}
            variant="h5"
          >
            Add Transaction
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Box
        sx={{
          maxWidth: 450,
          backgroundColor: "white",
          boxShadow: "1px 2px 9px gray",
          borderRadius: 5,
          margin: "0 auto",
          padding: 1,
        }}
      >
        <Stack
          justifyContent="center"
          direction="row"
          sx={{
            backgroundColor: "#F4F6F6",
            borderRadius: 10,
            padding: 0.5,
            margin: "10px 50px",
          }}
        >
          <Button
            name="income"
            onClick={handleClickIncomeexpense}
            sx={{
              backgroundColor: incomeTrueexpenseFalse
                ? "rgba(67, 136, 131, .2)"
                : "#F4F6F6",
              color: "#438883",
              width: 150,
              borderRadius: 10,
              "&:hover": {
                backgroundColor: incomeTrueexpenseFalse
                  ? "rgba(67, 136, 131, .2)"
                  : "#F4F6F6",
              },
            }}
          >
            Income
          </Button>
          <Button
            name="expense"
            onClick={handleClickIncomeexpense}
            sx={{
              backgroundColor: !incomeTrueexpenseFalse
                ? "rgba(233, 73, 63,.2)"
                : "#F4F6F6",
              color: "#F95B51",
              width: 150,
              borderRadius: 10,
              transition: "none",
              "&:hover": {
                backgroundColor: !incomeTrueexpenseFalse
                  ? "rgba(233, 73, 63,.2)"
                  : "#F4F6F6",
              },
            }}
          >
            Expense
          </Button>
        </Stack>
        <InputCard
          isValid={validValue.amount}
          handleChange={handleChangeInput}
          value={incomeTrueexpenseFalse ? incomes.amount : expenses.amount}
          handleClearClick={() => {
            incomeTrueexpenseFalse
              ? setIncomes((prevVal) => {
                  return { ...prevVal, amount: "" };
                })
              : setExpenses((prevVal) => {
                  return { ...prevVal, amount: "" };
                });
          }}
        />
        <InputTime
          isValid={validValue.date}
          handleChange={handleChangeInput}
          value={incomeTrueexpenseFalse ? incomes.date : expenses.date}
        />
        <InputNote
          isValid={validValue.note}
          handleChange={handleChangeInput}
          value={incomeTrueexpenseFalse ? incomes.note : expenses.note}
        />
        <Box
          sx={{
            maxWidth: 450,
            backgroundColor: "white",

            padding: "10px 50px",
          }}
        >
          <Button
            onClick={onClickNewTransaction}
            sx={{
              width: "100%",
              color: "#438883",
              border: "2px solid #438883",
              borderRadius: 10,
              padding: "10px 20px",
              mt: 1,
              pr: 1.25,
              fontWeight: "bold",
            }}
          >
            Add New Transaction
          </Button>
        </Box>
      </Box>
      {alert && (
        <Alert severity="success" sx={{ marginTop: 2 }}>
          Successfully added
        </Alert>
      )}
      <BottomNav />
    </Box>
  );
}
