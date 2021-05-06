import React from "react";
import "./index.css";

let directionDefault = window.innerWidth >= 767 ? "row" : "column";

export const Container = ({ flexDirection, children }) => {
  return (
    <div className={`Container`} style={{ flexDirection: flexDirection }}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  flexDirection: directionDefault,
};
