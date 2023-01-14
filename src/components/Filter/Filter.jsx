export const Filter = ({ value, onChangeFilter }) => (
  <label>
    Find contacts by name
    <input type="text" name="filter" value={value} onChange={onChangeFilter} />
  </label>
);
