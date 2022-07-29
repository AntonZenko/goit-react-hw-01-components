import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import { Container } from './App.styled';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div className="App">
      <Container>
        <Profile
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={data} />
      </Container>
      <Container>
        <Statistics stats={data} />
      </Container>
      <Container>
        <FriendList friends={friends} />
      </Container>
      <Container>
        <TransactionHistory transactions={transactions} />
      </Container>
    </div>
  );
};
