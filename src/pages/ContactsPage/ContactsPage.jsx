import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../../components/ContactForm/CForm';  
import ContactList from '../../components/ContactList/CList'; 
import SearchBox from '../../components/SearchBox/SB';
import { fetchContacts } from '../../redux/contacts/operations';  

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