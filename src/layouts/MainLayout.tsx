import Footer from 'components/UI/Footer';
import Header from 'components/UI/Header';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
