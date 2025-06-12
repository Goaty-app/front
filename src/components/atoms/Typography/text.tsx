import React from "react";

const Text: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <p className={className}>{children}</p>;
};

export default Text;
