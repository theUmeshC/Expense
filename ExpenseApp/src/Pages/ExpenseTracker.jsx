import React from 'react';
import PropTypes from 'prop-types';

import BalanceCard from '../Components/BalanceCard';
import HistoryCard from '../Components/HistoryCard';
import TransactionCard from '../Components/TransactionCard';
import useStyles from '../Ui/ExpenseTrackerMS';

function ExpenseTracker({ load, handleLoad }) {
  const classes = useStyles();
  return (
    <div className={classes.expense_tracker_container}>
      <BalanceCard load={load} />
      <HistoryCard load={load} />
      <TransactionCard handleLoad={handleLoad} />
    </div>
  );
}

ExpenseTracker.propTypes = {
  load: PropTypes.instanceOf(Array),
  handleLoad: PropTypes.func.isRequired,
};

ExpenseTracker.defaultProps = {
  load: PropTypes.instanceOf(Array),
};

export default ExpenseTracker;
