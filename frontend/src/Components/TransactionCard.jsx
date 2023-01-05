import React from "react";
import '../Ui/TransactionCard.css';

const TransactionCard = () => {
  return (
    <div className="transaction_container">
      <h4 className="transaction_title">Add new transaction</h4>
      <div className="transaction_body">
        <label htmlFor="tran_input">Text</label>
        <input
          id="tran_input"
          placeholder="Enter Text"
          className="transaction_input"
          type="text"
        />
        <h5>Amount</h5>
        <p>(negative - expenses, positive - income)</p>
        <input
          type="text"
          className="transaction_input"
          placeholder="Enter amount"
        />
        <button className="add_transaction">
          Add transaction
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;
