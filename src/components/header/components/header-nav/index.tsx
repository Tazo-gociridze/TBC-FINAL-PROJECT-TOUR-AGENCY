import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";

const HeaderNav = () => {
  const { t } = useTranslation("header");
  const { pathname } = useLocation();

  const isActiveLink = (to: string) => pathname === to;

  return (
    <nav className="flex gap-x-10 text-[19px] text-white">
      <NavLink
        to="/"
        className={isActiveLink("/") ? "text-blue-300" : "hover:text-blue-300"}
      >
        {t("navHome")}
      </NavLink>
      <NavLink
        to="/tours"
        className={isActiveLink("/tours") ? "text-blue-300" : "hover:text-blue-300"}
      >
        {t("navTours")}
      </NavLink>
      <NavLink
        to="/services"
        className={isActiveLink("/services") ? "text-blue-300" : "hover:text-blue-300"}
      >
        {t("navServices")}
      </NavLink>
    </nav>
  );
};

export default HeaderNav;
