import PropTypes from 'prop-types';
import { ListItem, Name, Status } from './Item.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem>
      <Status isOnline={isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
