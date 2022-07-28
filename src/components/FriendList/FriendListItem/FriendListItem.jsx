import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendStatus,
  FriendName,
  FriendAvatar,
} from './FriendListItem.styled';
import { ImUserCheck, ImUserMinus } from 'react-icons/im';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus isOnline={isOnline}>
        <FriendStatus />
        {isOnline ? <ImUserCheck /> : <ImUserMinus />}
      </FriendStatus>
      <FriendAvatar src={avatar} alt={`${name} avatar`} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  FriendAvatar: PropTypes.string,
  FriendName: PropTypes.string,
  FriendStatus: PropTypes.bool,
};

export default FriendListItem;
