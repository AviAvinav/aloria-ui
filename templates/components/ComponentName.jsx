import React from "react";
import "./index.css";

export const ComponentName = ({ componentProps }) => {
  return <div className={`ComponentName`}>{/* Your Stuff */}</div>;
};

ComponentName.defaultProps = {
  componentProps: {},
};
