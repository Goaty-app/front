'use client';
import React, { useState, useEffect } from 'react';
import { CircleUserRound, LogOut, MenuIcon, MoonIcon, Sun } from 'lucide-react';
import './header.style.css';
import { useAuth } from '@/context/authContext';
import Link from 'next/link';
import AuthModal from "@/components/modals/auth.modal";

const Header: React.FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false); // Etat pour la modal
    const { isAuthenticated } = useAuth();

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

    const handleAuthClick = () => {
        setIsAuthModalOpen(true);
    };

    return (
        <>
            <header className="bg-layer-2 h-[8%] flex justify-between p-4 items-center">
                <div className="text-xl font-semibold flex gap-4 items-center">
                    <Link href="/" className="hidden sm:block">Goaty</Link>
                </div>

                <div className="flex gap-4 text-xl font-semibold items-center">
                    {isAuthenticated && <div>Alertes</div>}

                    <button className="btn cursor-pointer icon" onClick={toggleTheme}>
                        {isDarkTheme ? <MoonIcon /> : <Sun />}
                    </button>

                    <button className="btn cursor-pointer icon" onClick={handleAuthClick}>
                        {isAuthenticated ? <LogOut /> : <CircleUserRound />}
                    </button>

                    <button className="btn cursor-pointer sm:hidden">
                        <MenuIcon />
                    </button>
                </div>
            </header>

            <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
        </>
    );
};

export default Header;
