import React from "react";
import "./index.css";
import { Label } from "../Label";
import { Input } from "../Input";
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

export const FormInput = ({
  name,
  type,
  icon,
  width,
  backgroundColor,
  fileFontColor,
  placeholder,
}) => {
  return (
    <div className={`FormInput`}>
      {<Label>{name}</Label> || <></>}
      <Input
        type={type}
        placeholder={placeholder ? placeholder : name}
        icon={icon}
        width={width}
        backgroundColor={backgroundColor}
        fileFontColor={fileFontColor}
      />
    </div>
  );
};

Form.defaultProps = {
  height: "90vh",
};
