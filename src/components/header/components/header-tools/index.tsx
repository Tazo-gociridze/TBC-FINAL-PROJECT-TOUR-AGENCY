import Button from '@/utils/Button/Button';
import { ChangeLangAndThemeContainerStyles, ChangeThemeStyles } from '../../header.styles';
import HeaderChangeLang from '../header-change-lang';
import useHeaderLogic from '../../hooks/useHeaderLogic';
import { Link } from 'react-router-dom';
import qs from "qs"
import { useTranslation } from 'react-i18next';

const HeaderTools = () => {
  const { themeIcon, changeTheme, initialParams } = useHeaderLogic();
  const {t} = useTranslation("header")

  const queryStr = qs.stringify(initialParams)

  return (
    <div className={ChangeLangAndThemeContainerStyles()}>
      <HeaderChangeLang />
      <div onClick={changeTheme} className={ChangeThemeStyles()}>
        <span>{themeIcon}</span>
      </div>
      <Link to={`/login?${queryStr}`}>
        <Button>{t("headerLogin")}</Button>
      </Link>
    </div>
  );
};

export default HeaderTools;
