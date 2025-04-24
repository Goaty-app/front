import React from 'react';
import {CircleUserRound, MenuIcon} from "lucide-react";
import './header.style.css';

const Header: React.FC = () => {
    return (
        <header className="bg-layer-2 h-[8%] flex justify-between p-4 items-center">
                <div className="text-xl font-semibold flex gap-4 items-center">
                    <div>Logo</div>
                    <span className="hidden sm:block">GoatManager</span>
                </div>

                <div className="flex gap-4 text-xl font-semibold items-center">
                    {/* Show alerts if connected - Max length to display has to be defined */}
                    <div>Alertes</div>
                    <button className="btn cursor-pointer">
                        <CircleUserRound />
                    </button>
                    <button className="btn cursor-pointer">
                        <MenuIcon/>
                    </button>
                </div>
        </header>
    );
};

export default Header;