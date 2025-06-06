import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import css from './LogoutButton.module.css';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => {
        toast.success('Successfully logged out');
        navigate('/');
      })
      .catch(() => {
        toast.error('Failed to log out');
      });
  };

  if (!isLoggedIn) {
    return null; // Nie renderuj przycisku jeśli użytkownik nie jest zalogowany
  }

  return (
    <button className={css.button} onClick={handleLogout}>
      Logout
    </button>
  );
}