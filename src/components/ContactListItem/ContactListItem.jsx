import PropTypes from 'prop-types';
import { ContactText, ContactBtn } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id, onDeleteContact }) => (
  <li>
    <ContactText>
      {name}: {number}
    </ContactText>
    <ContactBtn onClick={() => onDeleteContact(id)}>Delete</ContactBtn>
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
