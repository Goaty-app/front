import React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className = '', children, ...rest }, ref) => {
        Select.displayName = 'Select';

        return (
            <select
                ref={ref}
                className={`w-full p-2 rounded border bg-layer-1 ${className}`}
                {...rest}
            >
                {children}
            </select>
        );
    }
);

export default Select;
