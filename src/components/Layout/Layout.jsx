import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import LogoutButton from '../LogoutButton/LogoutButton';

export default function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <Navigation />
      {isLoggedIn && <LogoutButton />}
      <main>
        <Outlet />
      </main>
    </div>
  );
}