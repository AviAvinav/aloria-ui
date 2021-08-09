import React from "react";
import { storiesOf } from "@storybook/react";

import { Label } from "../components/Label";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const stories = storiesOf("App Test", module);

stories.add("Label", () => {
  return (
    <>
      <Label>Username</Label>
      <Input placeholder="Username" />
      <Label>Password</Label>
      <Input type="password" placeholder="Password" />
      <Input type="file" />
      <Button>Submit</Button>
    </>
  );
});
