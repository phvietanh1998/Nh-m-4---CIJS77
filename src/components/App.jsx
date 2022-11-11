import React from "react";
import Homepage from "./Homepage";
import { Route, Routes } from "react-router-dom";
import AddTransactionPage from "./AddTransaction/AddTransactionPage";
import { BrowserRouter } from "react-router-dom";
import AllTransactionPage from "./AllTransaction/AllTransactionPage";
import StatisticPage from "./StatisticPage/StatisticPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/addtransaction" element={<AddTransactionPage />} />
        <Route path="/alltransaction" element={<AllTransactionPage />} />
        <Route path="/statistics" element={<StatisticPage />} />
      </Routes>
    </BrowserRouter>
  );
}
