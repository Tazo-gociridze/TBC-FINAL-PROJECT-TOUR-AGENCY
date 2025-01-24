import { useMemo } from 'react';
import { IoMdSunny } from 'react-icons/io';
import { FaMoon } from 'react-icons/fa';
import useAppTheme from './nested-hooks/useAppTheme';
import useSwitchLanguage from './nested-hooks/useSwitchLanguage';
import useAppLanguage from './nested-hooks/useAppLanguage';


const useHeaderLogic = () => {
    const { isDarkMode, changeTheme } = useAppTheme();
    const { isSwitchLang, openSwitchLanguage, switchLangRef, setIsSwitchLang } = useSwitchLanguage();
    const { switchLang, switchLangHandler } = useAppLanguage(setIsSwitchLang);
    const themeIcon = useMemo(() => isDarkMode ? <IoMdSunny /> : <FaMoon />, [isDarkMode]);
    
  return {
    switchLang,
    isDarkMode,
    isSwitchLang,
    switchLangHandler,
    changeTheme,
    openSwitchLanguage,
    themeIcon,
    switchLangRef,
  };
};

export default useHeaderLogic;