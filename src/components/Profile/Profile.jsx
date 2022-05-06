import React from 'react';
import PropTypes from 'prop-types';
// import ProfileDescription from './ProfileDescr/ProfileDescr';
// import ProfileStatsList from './ProfileStatsList/ProfileStatsList';
import styles from './Profile.module.css';
import defaultAvatar from './defaultAvatar.jpg';

function Profile({ username, tag, location, avatar = defaultAvatar, stats }) {
  const StatsItems = Object.entries(stats);
   
    return (
      <div className={styles.profile}>
        
        <div className={styles.description}>
            <img src={avatar} alt="User avatar" className={styles.avatar}/>
            <p className={styles.name}>{username}</p>
            {tag && <p className={styles.tag}>@{tag}</p>}
            {location && <p className={styles.location}>@{location}</p>}
        </div>
        
        <ul className={styles.stats}>
          {StatsItems.map((item) => {
            const [label, quantity = 0] = item;
            return (
              <li key={item} className={styles.item}>
                  <span className={styles.label}>{label}</span>
                  <span className={styles.quantity}>{quantity}</span>
              </li>
                );
                }
              )
          }
        </ul>
    
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
      })
};

export default Profile;
