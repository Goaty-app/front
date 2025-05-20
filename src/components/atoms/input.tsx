import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...rest }, ref) => {
    Input.displayName = 'Input';

    return (
      <input
        ref={ref}
        className={`w-full p-2 rounded border bg-layer-1 ${className}`}
        {...rest}
      />
    );
  }
);

export default Input;
