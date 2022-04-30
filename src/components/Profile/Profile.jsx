import React from 'react';
import PropTypes from 'prop-types';
import ProfileDescription from './ProfileDescr/ProfileDescr';
import styles from './Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
    return (
    <div className={styles.profile}>
      <ProfileDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;