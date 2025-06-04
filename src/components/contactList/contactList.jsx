import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactSlice';
import { selectNameFilter } from '../../redux/filterSlice';
import Contact from '../contact/Contact';

export default function ContactList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.contacts);
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading === 'pending') return <p>Loading contacts...</p>;
  if (error) return <p>Error loading contacts: {error}</p>;
  if (filteredContacts.length === 0) return <p>No contacts found</p>;

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}