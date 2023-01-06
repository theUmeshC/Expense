import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import useStyles from '../Ui/TransactionCardMS';

import setLocalStorage from '../Helper/setDataToLS';
import setIncomeExpense from '../Helper/setIncomeExpenses';

function TransactionCard({ handleLoad }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [activeBtn, setActiveBtn] = useState(false);
  const reg = /^[-+]?\d+(\.\d+)?$/;

  const classes = useStyles();

  useEffect(() => {
    if (text !== '' && amount !== '') {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  }, [text, amount]);

  const handleAddTransaction = (e) => {
    e.preventDefault();

    const match = reg.exec(amount);

    if (match === null) {
      toast('Enter correct amount positive or negative number');
    } else if (amount[0] === '-') {
      const userData = {
        text,
        amount,
        type: 'expense_transaction',
      };
      setLocalStorage(userData, handleLoad);
      setIncomeExpense(userData.amount, 'expense');
    } else {
      const userData = {
        text,
        amount,
        type: 'income_transaction',
      };
      setLocalStorage(userData, handleLoad);
      setIncomeExpense(userData.amount, 'income');
    }
    setText('');
    setAmount('');
  };

  return (
    <div className={classes.transaction_container}>
      <h4 className={classes.transaction_title}>Add new transaction</h4>
      <form className={classes.transaction_body} onSubmit={handleAddTransaction}>
        <h5>Text</h5>
        <input
          id="tran_input"
          placeholder="Enter Text"
          type="text"
          value={text}
          required
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <h5>Amount</h5>
        <p>(negative - expenses, positive - income)</p>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          step="0.25"
          required
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button
          type="submit"
          className={activeBtn ? classes.add_transaction : classes.btn_not_active}
        >
          Add transaction
        </button>
      </form>
    </div>
  );
}

TransactionCard.propTypes = {
  handleLoad: PropTypes.func.isRequired,
};

export default TransactionCard;
