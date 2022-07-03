import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  Avatar,
  Location,
  Name,
  StatsList,
  ListItem,
  Label,
  Quantity,
  Tag,
} from './Profile.styled';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Box
      as="section"
      textAlign="center"
      backgroundColor="#fff"
      borderRadius="10px"
      border="1px solid #dce3ec"
      width="250px"
      overflow="hidden"
    >
      <Box p="30px 0">
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Box>

      <StatsList>
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ListItem>
      </StatsList>
    </Box>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
