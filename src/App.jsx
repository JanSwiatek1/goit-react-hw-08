import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from './components/contactForm/contactForm';
import SearchBox from './components/searchBox/searchBox';
import ContactList from './components/contactList/contactList';
import { fetchContacts } from './redux/contactSlice';
// import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}