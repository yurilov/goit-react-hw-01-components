import React from 'react';
import PropTypes from 'prop-types';
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
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};

export default ProfileStatsListItem