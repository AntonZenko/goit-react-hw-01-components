import PropTypes from 'prop-types';
import { StatList, StatItem, Label, Quantity } from './Stats.styled';

const Stats = ({ stats }) => {
  const { followers, views, likes } = stats;
  return (
    <StatList>
      <StatItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatItem>
      <StatItem>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatItem>
      <StatItem>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatItem>
    </StatList>
  );
};

Stats.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Stats;
