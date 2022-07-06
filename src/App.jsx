import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';
import { Box } from 'components/Box';
import userData from 'storage/user.json';
import statsData from 'storage/data.json';
import friendsData from 'storage/friends.json';
import transactionsData from 'storage/transactions.json';

export const App = () => {
  return (
    <Box as="main" display="flex" width="1024px" m="2em auto">
      <Box as="aside" display="flex" flexDirection="column" mr="1em">
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
        <Statistics title="Upload stats" stats={statsData} />
        <FriendList friends={friendsData} />
      </Box>
      <TransactionHistory items={transactionsData} />
    </Box>
  );
};
