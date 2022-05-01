import React from 'react';
import styles from './TransactionHistoryTableHead.module.css';

function TransactionHistoryTableHead ({ title }) {
  return <th className={styles.tableHead}>{title}</th>;
};

export default TransactionHistoryTableHead;