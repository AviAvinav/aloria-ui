import React, { useState, useEffect } from "react";

export const useHookName = (args) => {
  const [value, setValue] = useState(false);

  useEffect(() => {}, [args]);

  return [value];
};
