import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsListItem.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function StatisticsListItem ({ label, percentage = 0 }) {
  return (
    <li
      className={styles.item}
      style={{
        backgroundColor: getRandomHexColor(),
      }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{Number(percentage)}%</span>
    </li>
  );
};

StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsListItem;