'use client';

import React from 'react';
import { Containers, Typography } from '@/components/atoms';

interface LabeledTextProps {
    label: string;
    value: string | number | React.ReactNode;
    className?: string;
}

const LabeledText: React.FC<LabeledTextProps> = ({ label, value, className }) => {
    return (
        <Containers.Simple className={'grid grid-cols-[2fr_1fr] ' + className}>
            <Typography.Text className="font-semibold">{label}</Typography.Text>
            <Typography.Text>{value}</Typography.Text>
        </Containers.Simple>
    );
};

export default LabeledText;
