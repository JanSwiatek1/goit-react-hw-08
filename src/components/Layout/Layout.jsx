import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
// import css from './Layout.module.css';

export default function Layout() {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}