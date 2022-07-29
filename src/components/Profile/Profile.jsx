import Proptypes from 'prop-types';
import Description from './Description';
import Stats from './Stats';
import { ProfileCard } from './Profile.styled';

const Profile = ({
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  username,
  tag,
  location,
  stats,
}) => {
  return (
    <ProfileCard>
      <Description
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <Stats stats={stats} />
    </ProfileCard>
  );
};

Profile.propTypes = {
  avatar: Proptypes.string.isRequired,
  username: Proptypes.string.isRequired,
  tag: Proptypes.string.isRequired,
  location: Proptypes.string.isRequired,
  stats: Proptypes.exact({
    followers: Proptypes.number.isRequired,
    views: Proptypes.number.isRequired,
    likes: Proptypes.number.isRequired,
  }).isRequired,
};

export default Profile;
