import React from "react";

const Main: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <main className={className}>{children}</main>;
};

export default Main;
