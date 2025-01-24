import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
  const { t } = useTranslation('header');

  function navLinkStyle(isActive: boolean) {
    return isActive ? 'text-[#77F8FF]' : 'hover:text-[#77F8FF]';
  }

  return (
    <nav className="flex gap-x-10 text-[19px] text-white">
      <NavLink to={'/'} className={({ isActive }) => navLinkStyle(isActive)}>
        {t('navHome')}
      </NavLink>
      <NavLink to={'/tours'} className={({ isActive }) => navLinkStyle(isActive)}>
        {t('navTours')}
      </NavLink>
      <NavLink to={'/services'} className={({ isActive }) => navLinkStyle(isActive)}>
        {t('navServices')}
      </NavLink>
    </nav>
  );
};

export default HeaderNav;
