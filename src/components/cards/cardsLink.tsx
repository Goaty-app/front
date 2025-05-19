'use client';

import Link from 'next/link';
import React from 'react';
import './cardLink.css';
import { Typography } from "@/components/atoms";

interface CardLinkProps {
    href: string;
    color: 'blue' | 'green' | 'orange' | 'yellow';
    title: string;
    description: string;
}

export const CardLink: React.FC<CardLinkProps> = ({ href, color, title, description }) => {
    return (
        <Link href={href} className="block w-full">
            <div
                className={`flex flex-col h-full w-full justify-center items-center rounded-lg p-6 shadow-md transition-transform hover:scale-105 ${
                    color === 'blue'
                        ? 'bg-blue light-text'
                        : color === 'green'
                            ? 'bg-green'
                            : color === 'orange'
                                ? 'bg-orange light-text'
                                : 'bg-yellow'
                }`}
            >
                <Typography.Title>{title}</Typography.Title>
                <Typography.Text className="text-sm opacity-85">{description}</Typography.Text>
            </div>
        </Link>
    );
};

