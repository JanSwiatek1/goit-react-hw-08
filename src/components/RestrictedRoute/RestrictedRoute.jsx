import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export default function RestrictedRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/contacts" />;
}