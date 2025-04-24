'use client';
import React, { useState, useEffect } from 'react';
import { CircleUserRound, MenuIcon, MoonIcon, Sun } from "lucide-react";
import './header.style.css';

const Header: React.FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const isDark = document.body.classList.contains('dark-theme');
        setIsDarkTheme(isDark);
    }, []);

    const toggleTheme = () => {
        const body = document.body;
        const willBeDark = !isDarkTheme;

        if (willBeDark) {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }

        setIsDarkTheme(willBeDark);
    };

    return (
        <header className="bg-layer-2 h-[8%] flex justify-between p-4 items-center">
            <div className="text-xl font-semibold flex gap-4 items-center">
                <div>Logo</div>
                <span className="hidden sm:block">GoatManager</span>
            </div>

            <div className="flex gap-4 text-xl font-semibold items-center">
                <div>Alertes</div>

                <button className="btn cursor-pointer" onClick={toggleTheme}>
                    {isDarkTheme ? <MoonIcon /> : <Sun />}
                </button>

                <button className="btn cursor-pointer">
                    <CircleUserRound />
                </button>

                <button className="btn cursor-pointer sm:hidden">
                    <MenuIcon />
                </button>
            </div>
        </header>
    );
};

export default Header;
