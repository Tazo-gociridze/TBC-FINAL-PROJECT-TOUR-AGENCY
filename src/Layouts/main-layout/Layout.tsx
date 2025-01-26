import Footer from '@/components/footer';
import Header from '@/components/header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main className=''>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
