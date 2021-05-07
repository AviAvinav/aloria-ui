import React, { useState, useEffect, useRef } from "react";

export const useHovered = (args) => {
  const args = useRef();
  const [value, setValue] = useState(false);
  const toggleHover = () => {
    setHovered(!hovered);
  };

  useEffect(() => {}, [args]);

  return [value];
};
