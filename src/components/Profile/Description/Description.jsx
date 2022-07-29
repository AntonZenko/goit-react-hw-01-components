import PropTypes from 'prop-types';
import {
  DescriptionBox,
  Avatar,
  Username,
  Tag,
  Location,
} from './Description.styled';

const Description = ({ avatar, username, tag, location }) => {
  return (
    <DescriptionBox>
      <Avatar src={avatar} alt={username} />
      <Username>{username}</Username>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </DescriptionBox>
  );
};

Description.protoTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;
