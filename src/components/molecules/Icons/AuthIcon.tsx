'use client';

import React, {useState} from 'react';
import {CircleUserRound, LogOut} from 'lucide-react';
import {Btn} from '@/components/atoms';
import {useAuth} from "@/context/authContext";
import AuthModal from "@/components/modals/auth.modal";
import './icon.css';

const ThemeIcon: React.FC = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false); // Etat pour la modal
    const {isAuthenticated} = useAuth();
    const handleAuthClick = () => {
        setIsAuthModalOpen(true);
    };

    return (
        <>
            <Btn variant="default" onClick={handleAuthClick} className="cursor-pointer icon">
                {isAuthenticated ? <LogOut/> : <CircleUserRound/>}
            </Btn>
            <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}/>
        </>
    );
};

export default ThemeIcon;
