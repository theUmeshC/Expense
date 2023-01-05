import React from 'react';
import PropTypes from 'prop-types';

function HistoryTransaction({ text, amount, type }) {
  return (
    <div className={`history_transaction ${type}`}>
      <span className="history_transaction_title">{text}</span>
      <span className="history_transaction_amount ">{amount}</span>
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
