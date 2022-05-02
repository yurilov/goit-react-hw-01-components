import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

function TransactionHistory({ transactions }) {
  const headTitles = Object.keys(transactions[0]).filter(item => item !== 'id');
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headTitles.map(headTitle => { 
            return <th key={headTitle} className={styles.tableHead}>{headTitle}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}className={styles.tableRow}>
              <td className={styles.type}>{type}</td>
              <td className={styles.amount}>{amount}</td>
              <td className={styles.currency}>{currency}</td>
            </tr>
  );
         })}
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