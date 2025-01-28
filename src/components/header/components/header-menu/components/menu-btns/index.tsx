import useHeaderToolsLogic from '@/components/header/hooks/header-tools-logic';
import { Button } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MenuBtns: FC<{ setIsMenuActive: (state: boolean) => void }> = ({ setIsMenuActive }) => {
  const { t, user } = useHeaderToolsLogic();
  const { t: profileT } = useTranslation('profile');
  return (
    <div className="flex px-7 pt-3 sm:hidden md:hidden lg:hidden">
      {user ? (
        <Link to={'profile'} className="w-full">
          <Button
            className="w-full bg-blue-400 py-5 text-white"
            onClick={() => setIsMenuActive(false)}
          >
            {profileT('profile')}
          </Button>
        </Link>
      ) : (
        <Link to={`/login`} className="w-full">
          <Button
            className="w-full bg-blue-400 py-5 text-white"
            onClick={() => setIsMenuActive(false)}
          >
            {t('headerLogin')}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default MenuBtns;
