import { useState, useEffect, useCallback } from 'react';

const useAppTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme === 'dark';
    });

    useEffect(() => {
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    const changeTheme = useCallback(() => {
        setIsDarkMode((prev) => !prev);
    }, []);


    return { isDarkMode, changeTheme };
};

export default useAppTheme;