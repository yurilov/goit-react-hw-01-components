import React from 'react';
import PropTypes from 'prop-types';
import StatisticsListItem from './StatisticsListItem/StatisticsListItem';
import styles from './StatisticsList.module.css';

function StatisticsList({ data }) {
    return (
        <ul className={`${styles.statisticsList} list`}>
            {data.map(({ id, label, percentage }) => (
                <StatisticsListItem key={id ? id : label} label={label} percentage={percentage}/>
            ))}
        </ul>
    )
}

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default StatisticsList;