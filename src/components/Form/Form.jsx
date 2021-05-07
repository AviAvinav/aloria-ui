import React from "react";
import "./index.css";
import { Container } from "../Container";

export const Form = ({ children, height }) => {
  return (
    <form className={`Form`} style={{ height: height }}>
      <Container flexDirection="column" alignItems="flex-start">
        {children}
      </Container>
    </form>
  );
};

Form.defaultProps = {
  height: "90vh",
};
