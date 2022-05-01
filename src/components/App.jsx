import './App.css';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import user from '../data/user.json';
import stats from '../data/stats.json';
import friends from '../data/friends.json'

export const App = () => {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Statistics" data={stats}
      />
      <FriendsList
        friends={friends}
      />
    </div>
  );
};
