import React from 'react';
import PropTypes from 'prop-types';
import ProfileStatsListItem from './ProfileStatsListItem/ProfileStatsListItem';


import styles from './ProfileStatsList.module.css';


function ProfileStatsList({ stats }) {
     const StatsItems = Object.keys(stats);
    return (
        <ul className={styles.stats}>
            {StatsItems.map(item => (
        <ProfileStatsListItem key={item} label={item} quantity={stats[item]} />
      ))}
        </ul>
    )
}

export default ProfileStatsList;