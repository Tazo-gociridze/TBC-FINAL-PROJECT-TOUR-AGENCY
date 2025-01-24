import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useAppLanguage = (setIsSwitchLang: (value: boolean) => void) => {
  const { i18n } = useTranslation();

  const [switchLang, setSwitchLang] = useState(() => {
    const storedLang = localStorage.getItem('lang');
    return storedLang || 'ka';
  });

  useEffect(() => {
    localStorage.setItem('lang', switchLang);
    i18n.changeLanguage(switchLang);
  }, [switchLang, i18n]);

  const switchLangHandler = () => {
    setSwitchLang((prev) => {
      setIsSwitchLang(false);
      return prev === 'en' ? 'ka' : 'en';
    });
  };

  return { switchLang, switchLangHandler };
};

export default useAppLanguage;
