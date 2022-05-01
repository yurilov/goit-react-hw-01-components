import React from 'react';
import propTypes from 'prop-types';
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
  data: propTypes.arrayOf(propTypes.object),
};

export default StatisticsList;