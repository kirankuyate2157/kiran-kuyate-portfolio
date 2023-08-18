import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block bg-light z-0 p-32 dark:bg-dark ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
