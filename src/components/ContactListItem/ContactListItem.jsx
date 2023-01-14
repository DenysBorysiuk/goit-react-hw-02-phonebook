export const ContactListItem = ({ name, number, id, onDeleteContact }) => (
  <li>
    <span>{name}:</span>
    <span>{number}</span>
    <button onClick={() => onDeleteContact(id)}>delete</button>
  </li>
);
