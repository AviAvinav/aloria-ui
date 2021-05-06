import React from "react";
import "./index.css";
import { AiOutlineCode } from "react-icons/ai";

export const Card = ({
  cardColor,
  cardShadow,
  icon,
  headerText,
  headerTextColor,
  labelText,
  labelTextColor,
}) => {
  return (
    <div
      className={"Card"}
      style={{
        backgroundColor: cardColor,
        boxShadow: `2px 2px 4px 2px ${cardShadow}`,
      }}
    >
      {icon}
      <h2 style={{ color: headerTextColor }}>{headerText}</h2>
      <p style={{ color: labelTextColor }}>{labelText}</p>
    </div>
  );
};

Card.defaultProps = {
  cardColor: "#29313D",
  cardShadow: "#000000",
  icon: <AiOutlineCode style={{ color: "#676CDB", transform: "scale(2.5)" }} />,
  headerText: "Lorem Ipsum",
  headerTextColor: "#ffffff",
  labelText: "Lorem Ipsum Dorsetta",
  labelTextColor: "#d1d1d1",
};
