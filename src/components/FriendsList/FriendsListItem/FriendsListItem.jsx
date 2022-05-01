import React from 'react';
import PropTypes  from 'prop-types';
import styles from './FriendsListItem.module.css';
import defaultAvatar from './defaultAvatar.jpg';

function FriendsListItem({ src = defaultAvatar, name, isOnline = false }) {
    return (
        <li className={styles.item}>
            <span className={isOnline ? styles.online : styles.offline}></span>
            <img
                className={styles.avatar}
                src={src || defaultAvatar}
                alt="User avatar"
                width="48"
            />
            <p className={styles.name}>{name}</p>

        </li>
    )
}

FriendsListItem.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendsListItem;