import Button from '@/utils/Button/Button';
import { ChangeLangAndThemeContainerStyles, ChangeThemeStyles } from '../../header.styles';
import HeaderChangeLang from '../header-change-lang';
import { Link } from 'react-router-dom';
import useHeaderToolsLogic from '../../hooks/header-tools-logic';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface HeaderToolsProps {
  isMenuActive: boolean;
  setIsMenuActive: (state: boolean) => void;
}

const HeaderTools: FC<HeaderToolsProps> = ({ isMenuActive, setIsMenuActive }) => {
  const { user, themeIcon, changeTheme, t } = useHeaderToolsLogic();
  const {t:Tprofile} = useTranslation('profile')
  return (
    <div className={ChangeLangAndThemeContainerStyles()}>
      <HeaderChangeLang />
      <div onClick={changeTheme} className={ChangeThemeStyles()}>
        <span>{themeIcon}</span>
      </div>

      <div className="hidden sm:block">
        {user ? (
          <Link to={'/profile'}>
            <Button>{Tprofile('profile')}</Button>
          </Link>
        ) : (
          <Link to={`/login`}>
            <Button>{t('headerLogin')}</Button>
          </Link>
        )}
      </div>

      <div
        onClick={() => setIsMenuActive(!isMenuActive)}
        className="block cursor-pointer text-3xl lg:hidden"
      >
        {isMenuActive ? <IoClose /> : <FiMenu />}
      </div>
    </div>
  );
};

export default HeaderTools;
