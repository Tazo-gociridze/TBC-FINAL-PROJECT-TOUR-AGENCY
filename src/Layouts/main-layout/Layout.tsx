import Footer from '@/components/footer';
import Header from '@/components/header';
import { Outlet } from 'react-router-dom';
  import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const MainLayout = () => {


const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]); 

  return null; 
};
  return (
    <main className="">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
