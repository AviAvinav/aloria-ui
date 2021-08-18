import React from "react";
import "./index.css";

export const Truncate = ({ className, children }) => {
  return (
    <div className={`aloria-Text truncate ${className ? className : ""}`}>
      {children}
    </div>
  );
};
