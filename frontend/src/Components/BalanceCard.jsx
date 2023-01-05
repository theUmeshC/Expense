import React from "react";
import '../Ui/BalanceCard.css';

const BalanceCard = () => {
  return (
    <div className="balance_card_container">
      <h3 className="container_title">Expense Tracker</h3>
      <div className="balance_card">
        <div className="balance_card_current_status">
          <h5>YOUR BALANCE</h5>
          <h3 className="positive_balance">${`${"300.00"}`}</h3>
        </div>
        <div className="balance_card_expenses_card">
          <div className="income_expense income">
            <h6>INCOME</h6>
            <h6 className="positive_balance">$ {`${"300.00"}`}</h6>
          </div>
          <div className="income_expense">
            <h6>EXPENSE</h6>
            <h6 className="negative_balance">$ {`${"300.00"}`}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
