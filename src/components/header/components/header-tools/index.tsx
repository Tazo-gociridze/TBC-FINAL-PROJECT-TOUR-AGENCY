import Button from '@/utils/Button/Button';
import { ChangeLangAndThemeContainerStyles, ChangeThemeStyles } from '../../header.styles';
import HeaderChangeLang from '../header-change-lang';
import { Link, } from 'react-router-dom';
import useHeaderToolsLogic from '../../hooks/header-tools-logic';

const HeaderTools = () => {
  const { user, themeIcon, changeTheme, t, handleLogout } = useHeaderToolsLogic();
  
  return (
    <div className={ChangeLangAndThemeContainerStyles()}>
      <HeaderChangeLang />
      <div onClick={changeTheme} className={ChangeThemeStyles()}>
        <span>{themeIcon}</span>
      </div>

      {user ? (
        <Button onClick={handleLogout}>{t('headerLogout')}</Button>
      ) : (
        <Link to={`/login`}>
          <Button>{t('headerLogin')}</Button>
        </Link>
      )}
    </div>
  );
};

export default HeaderTools;
