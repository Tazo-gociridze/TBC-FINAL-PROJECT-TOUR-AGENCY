import { Link } from 'react-router-dom';
import useHeaderToolsLogic from '../../hooks/header-tools-logic';
import { FC, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
import { Button } from 'antd';

interface HeaderMenuProps {
  isMenuActive: boolean;
  setIsMenuActive: (state: boolean) => void;
}

const HeaderMenu: FC<HeaderMenuProps> = ({ setIsMenuActive, isMenuActive }) => {
  const { t, handleLogout, user } = useHeaderToolsLogic();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setIsMenuActive(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
    //eslint-disable-next-line
  }, []);

  const resetState = () => {
    setIsMenuActive(false);
  };

  const logout = () => {
    handleLogout();
    setIsMenuActive(false);
  };
  return (
    <>
      <div
        className={`absolute left-0 z-[9999] w-full bg-[#163b0a] pb-3 transition-all duration-500 dark:bg-[#222222] ${
          isMenuActive ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-col text-white *:flex *:w-full *:items-center *:justify-between *:bg-[#16330c] *:px-7 *:py-5 *:dark:bg-[#1a1919]">
          <Link
            className="hover:bg-[#305e20] dark:hover:bg-[#312f2f]"
            onClick={resetState}
            to={'/'}
          >
            <span>Home</span>
            <span className="text-[11px]">
              <FaCircle />
            </span>
          </Link>
          <Link
            className="hover:bg-[#305e20] dark:hover:bg-[#312f2f]"
            onClick={resetState}
            to={'tours'}
          >
            <span>Tours</span>
            <span className="text-[11px]">
              <FaCircle />
            </span>
          </Link>
        </div>

        <div className="flex px-7 pt-3 sm:hidden md:hidden lg:hidden">
          {user ? (
            <Button className="w-full bg-blue-400 py-5 text-white" onClick={logout}>
              {t('headerLogout')}
            </Button>
          ) : (
            <Link to={`/login`}>
              <Button className="w-full">{t('headerLogin')}</Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
