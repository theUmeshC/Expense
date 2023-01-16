import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useStyles from '../Ui/BalanceCardMS';

function BalanceCard({ load }) {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    const lsBalance = JSON.parse(localStorage.getItem('balance'));
    const lsIncome = JSON.parse(localStorage.getItem('income'));
    const lsExpense = JSON.parse(localStorage.getItem('expense'));
    if (lsBalance) {
      setBalance(lsBalance);
    }
    if (lsIncome) {
      setIncome(lsIncome);
    }
    if (lsExpense) {
      setExpense(lsExpense);
    }
  }, [load]);

  return (
    <div className={classes.balance_card_container}>
      <h3 className={classes.container_title}>Expense Tracker</h3>
      <div className={classes.balance_card}>
        <div className={classes.balance_card_current_status}>
          <h5>YOUR BALANCE</h5>
          <h3 className={classes.balance}>
            $
            {`${balance}`}
          </h3>
        </div>
        <div className={classes.balance_card_expenses_card}>
          <div className={classNames(classes.income, classes.income_expense)}>
            <h6>INCOME</h6>
            <h6 className={classes.positive_balance}>
              $
              {`${income}`}
            </h6>
          </div>
          <div className={classes.income_expense}>
            <h6>EXPENSE</h6>
            <h6 className={classes.negative_balance}>
              $
              {`${expense}`}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

BalanceCard.propTypes = {
  load: PropTypes.instanceOf(Array).isRequired,
};

export default BalanceCard;
