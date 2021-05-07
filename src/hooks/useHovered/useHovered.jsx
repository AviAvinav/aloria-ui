import React, { useState, useEffect } from "react";

export const useHovered = (args) => {
  const [value, setValue] = useState(false);
  const toggleHover = () => {
    setHovered(!hovered);
  };

  useEffect(() => {}, [args]);

  return [value];
};
