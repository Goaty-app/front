import React from 'react';

export type LinkVariants = 'primary' | 'accent' | 'default';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: LinkVariants;
    className?: string;
    children: React.ReactNode;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({ children, variant = 'default', className = '', ...rest }, ref) => {
        Link.displayName = 'Link';

        const variantClass = () => {
            switch (variant) {
                case 'primary':
                    return 'link-primary';
                case 'accent':
                    return 'link-accent';
                default:
                    return '';
            }
        };

        return (
            <a
                ref={ref}
                className={`link ${variantClass()} ${className}`}
                {...rest}
            >
                {children}
            </a>
        );
    }
);

export default Link;
