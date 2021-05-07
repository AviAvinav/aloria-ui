import React from "react";
import "./index.css";

export const Label = ({ children, fontColor, fontSize }) => {
  return (
    <label
      className={`Label`}
      style={{ color: fontColor, fontSize: fontSize, letterSpacing: 0.8 }}
    >
      {children}
    </label>
  );
};

Label.defaultProps = {
  fontColor: "#a0a0a0",
  fontSize: "13.5px",
};
