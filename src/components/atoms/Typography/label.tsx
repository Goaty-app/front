import React from 'react';

const Label: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    return (
        <label className={className}>{children}</label>
    )
};

export default Label;
