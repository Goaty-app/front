import React from "react";

const Title: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <h3 className={`text-2xl text-center font-bold mb-2 ${className}`}>
      {children}
    </h3>
  );
};

export default Title;
