import PropTypes from 'prop-types';
import css from './Description.module.css';

const Description = ({ avatar, username, tag, location }) => {
  return (
    <div className={css.description}>
      <img src={avatar} alt={username} className={css.description__avatar} />
      <p className={css.description__username}>{username}</p>
      <p className={css.description__tag}>@{tag}</p>
      <p className={css.description__location}>{location}</p>
    </div>
  );
};

Description.protoTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;
