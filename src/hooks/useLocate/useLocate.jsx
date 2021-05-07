import React, { useState, useEffect } from "react";

export const useLocate = (args) => {
  const [value, setValue] = useState(false);

  useEffect(() => {}, [args]);

  return [value];
};
