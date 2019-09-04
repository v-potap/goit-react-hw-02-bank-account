import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

import TransactionType from '../../services/transaction-type';

function TransactionHistory({ transactions }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(tr => (
          <tr key={tr.id}>
            <td>{tr.type}</td>
            <td>
              {tr.amount.toLocaleString('us-EN', {
                minimumFractionDigits: 2,
              })}
              $
            </td>
            <td>{tr.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.defaultProps = {
  transactions: [],
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf([
        TransactionType.DEPOSIT,
        TransactionType.WITHDRAW,
      ]),
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
