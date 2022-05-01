import React from 'react';
import propTypes from 'prop-types';
import styles from './Statistics.module.css';
import StatisticsList from './StatisticsList/StatisticsList';

function Statistics({title, data}) {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {data.length ? (
                <StatisticsList data={data} />
                ) : (
                <p className={styles.notFound}>No statistics yet</p>
            )}
        </section>
    )
}

Statistics.propTypes = {
  title: propTypes.string,
};

export default Statistics;