import React, { useState, useEffect } from "react";

export const useLoading = (loadingTimeout) => {
  const [loaded, setLoaded] = useState(false);

  if (!loadingTimeout) {
    loadingTimeout = 3;
  }

  useEffect(() => {
    window.onload = () =>
      setTimeout(() => setLoaded(true), loadingTimeout * 1000);
  }, [loadingTimeout]);

  return [loaded];
};
