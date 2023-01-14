import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, id, onDeleteContact }) => (
  <li>
    <span>{name}:</span>
    <span>{number}</span>
    <button onClick={() => onDeleteContact(id)}>delete</button>
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
