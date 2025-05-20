'use client';
import { useEffect, useState } from 'react';

export function useThemeToggle() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        setIsDarkTheme(document.body.classList.contains('dark-theme'));
    }, []);

    const toggleTheme = () => {
        const body = document.body;
        const willBeDark = !isDarkTheme;
        body.classList.toggle('dark-theme', willBeDark);
        setIsDarkTheme(willBeDark);
    };

    return { isDarkTheme, toggleTheme };
}
