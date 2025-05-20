import React from 'react';

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const Nav = React.forwardRef<HTMLElement, NavProps>(
  ({ children, className = '', ...rest }, ref) => {
    Nav.displayName = 'Nav';

    return (
      <nav ref={ref} className={`nav ${className}`} {...rest}>
        {children}
      </nav>
    );
  }
);

export default Nav;
