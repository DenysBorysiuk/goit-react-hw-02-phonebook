import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem key={id} name={name} number={number} />
    ))}
  </ul>
);
