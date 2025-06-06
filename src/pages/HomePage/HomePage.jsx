import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/authSelectors';
import css from './HomePage.module.css';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Phonebook App</h1>
      
      {isLoggedIn ? (
        <>
          <p className={css.text}>Hello, {user.name}! You're already logged in.</p>
          <Link to="/contacts" className={css.button}>
            Go to Your Contacts
          </Link>
        </>
      ) : (
        <>
          <p className={css.text}>Please register or login to access your contacts</p>
          <div className={css.buttons}>
            <Link to="/register" className={css.button}>
              Register
            </Link>
            <Link to="/login" className={css.button}>
              Login
            </Link>
          </div>
        </>
      )}
    </div>
  );
}