import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProfileDescr.module.css';
import defaultAvatar from './defaultAvatar.jpg';

function ProfileDescription({
    username, 
    tag,
    location,
    avatar = defaultAvatar,
}) {
    return (
        <div className={styles.description}>
            <img src={avatar} alt="User avatar" className={styles.avatar}/>
            <p className={styles.name}>{username}</p>
            {tag && <p className={styles.tag}>@{tag}</p>}
            {location && <p className={styles.location}>@{location}</p>}
        </div>
    )
}
export default ProfileDescription;
