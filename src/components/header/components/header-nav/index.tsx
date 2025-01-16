import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import useHeaderLogic from '../../hooks/useHeaderLogic';
import qs from 'qs';

const HeaderNav = () => {
  const { t } = useTranslation('header');
  const { initialParams } = useHeaderLogic();

  const queryStr = qs.stringify(initialParams);

  const createLink = (path: string) => {
    return `${path}?${queryStr}`;
  };

  function navLinkStyle(isActive: boolean) {
    return isActive ? 'text-[#FDB24D]' : 'hover:text-[#FDB24D]';
  }

  return (
    <nav className="flex gap-x-10 text-[19px] text-white">
      <NavLink to={createLink('/')} className={({ isActive }) => navLinkStyle(isActive)}>
        {t('navHome')}
      </NavLink>
      <NavLink to={createLink('/tours')} className={({ isActive }) => navLinkStyle(isActive)}>
        {t('navTours')}
      </NavLink>
      <NavLink to={createLink('/services')} className={({ isActive }) => navLinkStyle(isActive)}>
        {t('navServices')}
      </NavLink>
    </nav>
  );
};

export default HeaderNav;
