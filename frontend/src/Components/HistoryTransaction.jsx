import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useStyles from '../Ui/HistoryCardMS';

function HistoryTransaction({ text, amount, type }) {
  const classes = useStyles();

  return (
    <div className={classNames(classes.history_transaction, type)}>
      <span className={classes.history_transaction_title}>{text}</span>
      <span className={classes.history_transaction_amount}>{amount}</span>
    </div>
  );
}

HistoryTransaction.propTypes = {
  text: PropTypes.string,
  amount: PropTypes.string,
  type: PropTypes.string,
};

HistoryTransaction.defaultProps = {
  text: PropTypes.string,
  amount: PropTypes.string,
  type: PropTypes.string,
};

export default HistoryTransaction;
