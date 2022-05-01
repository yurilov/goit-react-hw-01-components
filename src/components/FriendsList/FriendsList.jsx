import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';
import FriendsListItem from './FriendsListItem/FriendsListItem';

function FriendsList({ friends }) {
  return (
    <ul className={`${styles.friendList} list`}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem key={id} src={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

export default FriendsList;