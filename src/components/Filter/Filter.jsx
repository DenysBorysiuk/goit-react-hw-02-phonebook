import PropTypes from 'prop-types';

export const Filter = ({ value, onChangeFilter }) => (
  <label>
    Find contacts by name
    <input type="text" name="filter" value={value} onChange={onChangeFilter} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
