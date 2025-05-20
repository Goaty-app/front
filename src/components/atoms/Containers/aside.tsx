import React from "react";

const Aside: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    return (
        <aside className={className}>{children}</aside>
    )
};

export default Aside;