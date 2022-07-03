import PropTypes from 'prop-types';
import { getRandomHueColorDark } from 'utils';
import { Box } from 'components/Box';
import { Title, Label, StatList, StatListItem } from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <Box as="section" textAlign="center">
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(item => (
          <StatListItem key={item.id} backgroundColor={getRandomHueColorDark()}>
            <Label>{item.label}</Label>
            <span>{item.percentage}%</span>
          </StatListItem>
        ))}
      </StatList>
    </Box>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Statistics;
