'use client';

import React from 'react';
import Image from 'next/image';
import './loader.style.css';

const Loader: React.FC = () => {
    return (
        <div className="w-full h-full flex gap-6 justify-center relative">
            <div className="absolute -bottom-3 w-[70%] grass"></div>
            <div className="relative w-32 h-32 animate-goat-eat">
                <Image
                    src="/asset/goat-loader.svg"
                    alt="Chèvre mangeant"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <div className="relative w-32 h-32 animate-goat-eat animate-delay-1">
                <Image
                    src="/asset/goat-loader.svg"
                    alt="Chèvre mangeant"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <div className="relative w-32 h-32 animate-goat-eat animate-delay-2">
                <Image
                    src="/asset/goat-loader.svg"
                    alt="Chèvre mangeant"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
};

export default Loader;
