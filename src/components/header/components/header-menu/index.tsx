import { Link } from 'react-router-dom';
import useHeaderToolsLogic from '../../hooks/header-tools-logic';
import { FC, useCallback, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

interface HeaderMenuProps {
  isMenuActive: boolean;
  setIsMenuActive: (state: boolean) => void;
}

const HeaderMenu: FC<HeaderMenuProps> = ({ setIsMenuActive, isMenuActive }) => {
  const { t,  user } = useHeaderToolsLogic();
  const { t: profileT } = useTranslation('profile');

  const handleResize = useCallback(() => {
    if (window.innerWidth > 1023) {
      setIsMenuActive(false);
    }
  }, [setIsMenuActive]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
  const resetState = () => {
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
            <Link to={'profile'} className='w-full'>
              <Button
                className="w-full bg-blue-400 py-5 text-white"
                onClick={() => setIsMenuActive(false)}
              >
                {profileT('profile')}
              </Button>
            </Link>
          ) : (
            <Link to={`/login`}  className='w-full '>
              <Button className="w-full bg-blue-400" onClick={() => setIsMenuActive(false)}>
                {t('headerLogin')}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
