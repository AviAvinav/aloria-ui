import React, { useState, useEffect, useRef } from "react";
import "./index.css";

export const Button = ({
  btnColor,
  btnHoverColor,
  btnShadow,
  borderRadius,
  width,
  children,
  textColor,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);
  const btn = useRef();
  const toggleHover = () => {
    setHovered(!hovered);
  };
  return (
    <button
      className={`Button`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      style={{
        backgroundColor: !hovered ? btnColor : btnHoverColor,
        boxShadow: `1px 1px 1px 1px ${btnShadow}`,
        borderRadius: borderRadius,
        width: width,
        color: textColor,
      }}
      ref={btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  btnColor: "#29313D",
  btnHoverColor: "#222322",
  btnShadow: "#111111",
  borderRadius: "5px",
  width: "150px",
  children: "Hello",
  textColor: "#ffffff",
};
