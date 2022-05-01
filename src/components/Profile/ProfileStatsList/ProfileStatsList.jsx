import React from 'react';
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