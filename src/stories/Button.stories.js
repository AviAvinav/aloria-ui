import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../components/Button";

const stories = storiesOf("App Test", module);

stories.add("Button", () => {
  const [value, setValue] = useState("Hello");
  const setChange = () => {
    setValue(value === "Hello" ? "Bye" : "Hello");
  };
  return (
    <>
      <Button>Hello</Button>
      <Button onClick={() => setChange()}>{value}</Button>
    </>
  );
});
