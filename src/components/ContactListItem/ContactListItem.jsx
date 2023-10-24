import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';

import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
  UserIcon,
  UserDeletedIcon,
  PhoneIcon,
} from './ContactListItem.module';
import { Notify } from 'notiflix';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(
          `${originalPromiseResult.name} successfully deleted from contacts`
        );
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });
  };

  return (
    <ContactItem key={id}>
      <ContactName>
        <UserIcon />
        {name}
      </ContactName>
      <ContactNumber>
        <PhoneIcon />
        {number}
      </ContactNumber>
      <Button onClick={() => handleDeleteContact(id)}>
        <UserDeletedIcon />
        Delete
      </Button>
    </ContactItem>
  );
};
