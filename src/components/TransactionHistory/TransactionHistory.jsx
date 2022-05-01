import React from 'react';
import PropTypes from 'prop-types';

import TransactionHistoryTableHead from './TransactionHistoryTableHead/TransactionHistoryTableHead';
import TransactionHistoryTableBody from './TransactionHistoryTableBody/TransactionHistoryTableBody';
import styles from './TransactionHistory.module.css';

function TransactionHistory({ transactions }) {
  const headTitles = Object.keys(transactions[0]).filter(item => item !== 'id');
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headTitles.map(headTitle => (
            <TransactionHistoryTableHead key={headTitle} title={headTitle} />
          ))}
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionHistoryTableBody key={id} type={type} amount={amount} currency={currency} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};

export default TransactionHistory;