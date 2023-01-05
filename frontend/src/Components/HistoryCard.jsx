import React from 'react'
import '../Ui/HistoryCard.css';

const HistoryCard = () => {
  return (
    <div className='history_container
    '>
      <h4 className="history_title">
        History
      </h4>
      <div className="history_transaction_container">
        <div className="history_transaction positive_history">
          <span className="history_transaction_title">Camera</span>
          <span className="history_transaction_amount">100</span>
        </div>
        <div className="history_transaction negative_history">
          <span className="history_transaction_title">Camera</span>
          <span className="history_transaction_amount ">100</span>
        </div>
        <div className="history_transaction negative_history">
          <span className="history_transaction_title">Camera</span>
          <span className="history_transaction_amount ">100</span>
        </div>
        <div className="history_transaction negative_history">
          <span className="history_transaction_title">Camera</span>
          <span className="history_transaction_amount ">100</span>
        </div>
      </div>
    </div>
  )
}

export default HistoryCard