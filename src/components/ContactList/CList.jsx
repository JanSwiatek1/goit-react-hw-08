import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import { selectNameFilter } from '../../redux/filtersSlice';
import { selectContacts, selectIsLoading } from '../../redux/contacts/selectors';
import Contact from '../Contact/Cont';
// import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (isLoading) return <p>Loading contacts...</p>;
  if (!contacts.length) return <p>Your phonebook is empty. Add first contact!</p>;

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={() => dispatch(deleteContact(contact.id))} />
        </li>
      ))}
    </ul>
  );
}

// export default ContactList; 