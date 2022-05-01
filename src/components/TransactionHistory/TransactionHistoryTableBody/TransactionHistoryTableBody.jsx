import React from 'react';
import styles from './TransactionHistoryTableBody.module.css';

function TransactionHistoryTableBody ({ type, amount, currency }) {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.type}>{type}</td>
      <td className={styles.amount}>{amount}</td>
      <td className={styles.currency}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryTableBody;