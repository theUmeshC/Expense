import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import HistoryTransaction from './HistoryTransaction';
import useStyles from '../Ui/HistoryCardMS';

function HistoryCard({ load }) {
  const [history, setHistory] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem('transaction')));
  }, [load]);

  return (
    <div
      className={classes.history_container}
    >
      <h4 className={classes.history_title}>History</h4>
      <div className={classes.history_transaction_container}>
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
