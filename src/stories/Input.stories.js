import React from "react";
import { storiesOf } from "@storybook/react";
import { AiOutlineCode } from "react-icons/ai";

import { Input } from "../components/Input";

const stories = storiesOf("App Test", module);

stories.add("Input", () => {
  return (
    <>
      <Input placeholder="Username" />
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Input type="checkbox" />
      <Input type="file" />
    </>
  );
});
