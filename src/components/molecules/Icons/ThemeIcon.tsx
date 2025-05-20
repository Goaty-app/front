'use client';
import React from 'react';
import { MoonIcon, Sun } from 'lucide-react';
import { Btn } from '@/components/atoms';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import './icon.css';

const ThemeIcon: React.FC = () => {
    const { isDarkTheme, toggleTheme } = useThemeToggle();

    return (
        <Btn
            onClick={toggleTheme}
            variant="default"
            className="btn cursor-pointer icon"
            aria-label="Basculer le thème"
        >
            {isDarkTheme ? <MoonIcon /> : <Sun />}
        </Btn>
    );
};

export default ThemeIcon;
