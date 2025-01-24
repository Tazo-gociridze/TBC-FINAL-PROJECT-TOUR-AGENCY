import { useState, useEffect, useRef } from 'react';

const useSwitchLanguage = () => {
  const [isSwitchLang, setIsSwitchLang] = useState(false);
  const switchLangRef = useRef<HTMLDivElement>(null);

  const openSwitchLanguage = () => setIsSwitchLang(true);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (switchLangRef.current && !switchLangRef.current.contains(event.target as Node)) {
        setIsSwitchLang(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { isSwitchLang, openSwitchLanguage, switchLangRef, setIsSwitchLang };
};

export default useSwitchLanguage;
