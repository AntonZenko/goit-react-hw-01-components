import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <div className="App">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      {/* <Statistics title="Upload stats" stats={data} /> */}
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
