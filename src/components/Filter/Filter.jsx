export const Filter = ({ filterValue, onChangeFilter }) => (
  <label>
    Find contacts by name
    <input
      type="text"
      name="filter"
      value={filterValue}
      onChange={onChangeFilter}
    />
  </label>
);
