import React from 'react';
import propTypes from 'prop-types';
import styles from './ProfileStatsListItem.module.css'

function ProfileStatsListItem({ label, quantity = 0 }) {
    return (
        <li>
            <span className={styles.label}>{label}</span>
            <span className={styles.quantity}>{quantity}</span>
        </li>
    );
}

ProfileStatsListItem.propTypes = {
  label: propTypes.string.isRequired,
  quantity: propTypes.number,
};

export default ProfileStatsListItem