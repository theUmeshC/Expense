import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../Ui/HistoryCard.css';
import HistoryTransaction from './HistoryTransaction';

function HistoryCard({ load }) {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem('transaction')));
  }, [load]);

  return (
    <div
      className="history_container
    "
    >
      <h4 className="history_title">History</h4>
      <div className="history_transaction_container">
        {history
          ? history.map((item) => (
            <HistoryTransaction
              key={Math.random()}
              text={item.text}
              amount={item.amount}
              type={item.type}
            />
          ))
          : null}
      </div>
    </div>
  );
}

HistoryCard.propTypes = {
  load: PropTypes.instanceOf(Array),
};

HistoryCard.defaultProps = {
  load: PropTypes.instanceOf(Array),
};

export default HistoryCard;
