import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';  // Dodaj folder i rozszerzenie
import ContactList from '../../components/ContactList/ContactList'; // Usunąłem nawiasy klamrowe
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';    // Sprawdź ścieżkę do operations

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Your Contacts</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}