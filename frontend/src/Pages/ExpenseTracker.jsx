import React from "react";
import BalanceCard from "../Components/BalanceCard";
import HistoryCard from "../Components/HistoryCard";
import TransactionCard from "../Components/TransactionCard";
import '../Ui/ExpenseTracker.css';

const ExpenseTracker = () => {
  return (
    <div className="expense_tracker_container">
      <BalanceCard />
      <HistoryCard />
      <TransactionCard />
    </div>
  );
};

export default ExpenseTracker;
