import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({title, data}) {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {data.length ? (                 
                <ul className={`${styles.statisticsList} list`}>
                    {data.map(({ id, label, percentage = 0 }) => { 
                        return (
                            <li key={id ? id : label}
                                className={styles.item}
                                style={{
                                    backgroundColor: randomGreyHex(),
                                }}
                                >
                                <span className={styles.label}>{label}</span>
                                <span className={styles.percentage}>{Number(percentage)}%</span>
                            </li>
                        );
                    })}
                </ul>            
                ) : (
                <p className={styles.notFound}>No statistics yet</p>
            )}
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
};

export default Statistics;

function randomGreyHex() {
  const v = (Math.random()*(256)|0).toString(16);
  return "#" + v + v + v;
}