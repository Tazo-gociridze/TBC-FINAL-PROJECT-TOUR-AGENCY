import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import qs from "qs";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const useHeaderLogic = () => {
    const { i18n } = useTranslation();

    const getInitialParams = () => {
        const queryParams = qs.parse(window.location.search, { ignoreQueryPrefix: true });
        return {
            lang: typeof queryParams.lang === "string" ? queryParams.lang : "en",
            darkMode: queryParams.darkMode === "true",
        };
    };

    const initialParams = getInitialParams();

    const [switchLang, setSwitchLang] = useState(initialParams.lang as string);
    const [isDarkMode, setIsDarkMode] = useState(false);
     const [isThemeSwitching, setIsThemeSwitching] = useState(false);
    const [isSwitchLang, setIsSwitchLang] = useState(false);
    const switchLangRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
         const storedTheme = localStorage.getItem("theme");
            document.documentElement.classList.add('no-transition');
            if (storedTheme === "dark") {
                  setIsDarkMode(true);
                  document.documentElement.classList.add("dark");
            } else {
                  setIsDarkMode(true);
            }
           setTimeout(() => {
                 document.documentElement.classList.remove('no-transition');
           }, 100);
     }, []);

    useEffect(() => {
        localStorage.setItem("theme", initialParams.darkMode ? "dark" : "light");
        document.documentElement.classList.toggle("dark", initialParams.darkMode);
    }, [isDarkMode]);

    useEffect(() => {
        if (i18n.language !== initialParams.lang) {
            i18n.changeLanguage(initialParams.lang);
        }
    }, [i18n, initialParams.lang]);

    const updateQueryParams = (updatedParams: Record<string, any>) => {
        const currentParams = qs.parse(window.location.search, { ignoreQueryPrefix: true });
        const newParams = { ...currentParams, ...updatedParams };
        const queryString = qs.stringify(newParams);
        const newUrl = `${window.location.pathname}?${queryString}`;

        window.history.replaceState(null, "", newUrl);
    };

    const openSwitchLanguage = () => setIsSwitchLang(true);

    const switchLangHandler = () => {
        const newLang = switchLang === "en" ? "ka" : "en";
        setSwitchLang(newLang);
        updateQueryParams({ lang: newLang });
        setIsSwitchLang(false);
    };


    const changeTheme = () => {
          if(isThemeSwitching) return;
            setIsThemeSwitching(true);
             setIsDarkMode(!isDarkMode);
             updateQueryParams({ darkMode: !initialParams.darkMode });
          setTimeout(() => {
             setIsThemeSwitching(false)
        }, 500)
      };

     const themeIcon = initialParams.darkMode ? <IoMdSunny /> : <FaMoon />;


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (switchLangRef.current && !switchLangRef.current.contains(event.target as Node)) {
                setIsSwitchLang(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return {
        switchLang,
        isDarkMode,
        isSwitchLang,
        switchLangHandler,
        changeTheme,
        openSwitchLanguage,
        themeIcon,
        switchLangRef,
        initialParams,
    };
};


export default useHeaderLogic;