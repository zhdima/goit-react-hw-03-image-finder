import PropTypes from 'prop-types';
import { BsFillPersonFill } from 'react-icons/bs';
import { DelButton } from './ContactItem.styled';

export const ContactItem = ({ contact: {id, name, number}, onDeleteContact }) => {
  return (
    <>
      <BsFillPersonFill size="16" />
      <span>{name}:</span>
      <span>{number}</span>
      <DelButton type="button" onClick={() => onDeleteContact(id)}>Delete</DelButton>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
