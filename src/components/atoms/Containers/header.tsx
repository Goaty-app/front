import React from "react";

const Header: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <header className={className}>{children}</header>;
};

export default Header;
