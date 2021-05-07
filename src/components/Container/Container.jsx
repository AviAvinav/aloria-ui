import React from "react";
import "./index.css";

let directionDefault = window.innerWidth >= 767 ? "row" : "column";

export const Container = ({ flexDirection, alignItems, children }) => {
  return (
    <div
      className={`Container`}
      style={{ flexDirection: flexDirection, alignItems: alignItems }}
    >
      {children}
    </div>
  );
};

Container.defaultProps = {
  flexDirection: directionDefault,
  alignItems: "center",
};
