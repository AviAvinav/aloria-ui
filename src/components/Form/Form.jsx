import React from "react";
import "./index.css";
import { Container } from "../Container";

export const Form = ({ children }) => {
  return (
    <form className={`Form`}>
      <Container flexDirection="column">{children}</Container>
    </form>
  );
};

// Form.defaultProps = {};
