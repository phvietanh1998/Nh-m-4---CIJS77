import React, { useContext } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "use-local-storage";
import data from "./data";
const BudgetsContext = React.createContext();
export function useBudgets() {
  return useContext(BudgetsContext);
}
export function getMonthName(month) {
  const d = new Date();
  d.setMonth(month);
  const monthName = d.toLocaleString("default", { month: "long" });
  return monthName;
}
export const BudgetsProvider = ({ children }) => {
  const [transaction, setTransaction] = useLocalStorage("transaction", data);
  // const [incomesList, setIncomes] = useState([]);
  // const [expensesList, setExpenses] = useState([]);

  // function checkEmptyIncomeList() {
  //   incomesList.length ? true : false;
  // }
  // function checkEmptyExpenseList() {
  //   expensesList.length ? true : false;
  // }
  function addExpense({ amount, date, note }) {
    const newValue = { key: uuidV4(), amount, date, note, name: "expense" };
    // setExpenses((prevExpenses) => {
    //   return [...prevExpenses, newValue];
    // });
    setTransaction((prev) => {
      return [...prev, newValue];
    });
  }
  function addIncome({ amount, date, note }) {
    const newValue = { key: uuidV4(), amount, date, note, name: "income" };
    // setIncomes((prevIncome) => {
    //   return [...prevIncome, newValue];
    // });
    setTransaction((prev) => {
      return [...prev, newValue];
    });
  }
  function getTotalInMonth(value) {
    const { year, type } = value;
    let data = [];
    const totalByYear = transaction
      .filter((item) => new Date(item.date).getFullYear() === year)
      .filter((item) => item.name === type)
      .sort(
        (a, b) => new Date(a.date).getMonth() - new Date(b.date).getMonth()
      );
    const ObjData = {};
    totalByYear.forEach((item) => {
      const month = new Date(item.date).toLocaleString("en-Us", {
        month: "long",
      });
      const name = month.slice(0, 3);
      if (ObjData[name] === undefined) ObjData[name] = 0;
      ObjData[name] += parseInt(item.amount);
    });

    for (let prop in ObjData) {
      const chartData = { name: prop, total: ObjData[prop] };
      data.push(chartData);
    }
    return data;
  }

  // .filter((item) => new Date(item.date).getMonth() === 0)
  //         .filter((item) =>
  //           props.incExp ? item.name === "income" : item.name === "expense"
  //         )
  //         .map((item) => item.amount)
  //         .reduce(
  //           (preValue, curValue) => parseInt(preValue) + parseInt(curValue),
  //           0
  //         ),
  return (
    <BudgetsContext.Provider
      value={{
        transaction,
        addExpense,
        addIncome,
        getMonthName,
        getTotalInMonth,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
