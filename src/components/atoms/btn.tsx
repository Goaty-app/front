import React from 'react';

export type BtnTypes = 'primary' | 'accent' | 'default' | 'warning';

export interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: BtnTypes;
    isDisabled?: boolean;
    children: React.ReactNode;
}

const Btn = React.forwardRef<HTMLButtonElement, BtnProps>(
    ({ children, variant, className = '', ...rest }, ref) => {
        Btn.displayName = 'Btn';
        const btnClass = () => {
            switch (variant) {
                case 'primary':
                    return 'btn-primary';
                case 'accent':
                    return 'btn-accent';
                case 'warning':
                    return 'btn-warning';
                case 'default':
                default:
                    return '';
            }
        };

        return (
            <button
                ref={ref}
                className={`btn ${btnClass()} ${className}`}
                {...rest}
            >
                {children}
            </button>
        );
    }
);

export default Btn;
