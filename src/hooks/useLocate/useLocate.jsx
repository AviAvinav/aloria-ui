import React, { useState, useEffect } from "react";

export const useLocate = () => {
  const [value, setValue] = useState();
  const failure = () => "error";
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    return latitude, longitude;
  }
  useEffect(() => {
    setValue(navigator.geolocation.getCurrentPosition(success, failure));
  }, [success, failure]);

  return [value];
};
