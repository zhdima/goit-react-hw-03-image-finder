import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactItem contact={contact} onDeleteContact={onDeleteContact} />
        </ListItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
