'use client';
import React from 'react';
import {MenuIcon} from 'lucide-react';
import {Btn} from '@/components/atoms';
import {useDevice} from "@/context/deviceContext";
import './icon.css';

const BurgerIcon: React.FC = () => {
    const device = useDevice();
    const isMobile = device === 'mobile';
    return (
        isMobile &&
        <Btn variant="default" className="cursor-pointer icon sm:hidden">
            <MenuIcon/>
        </Btn>
    );
};

export default BurgerIcon;
