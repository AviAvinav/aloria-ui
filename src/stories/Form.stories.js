import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../components/Button";
import { Form, FormInput } from "../components/Form";

const stories = storiesOf("App Test", module);

stories.add("Form", () => {
  return (
    <Form>
      <FormInput name="Username" />
      <FormInput
        name="Password"
        type="password"
        placeholder="Password.. Sh..."
      />
      <FormInput name="Email" type="email" />
      <FormInput type="file" />
      <FormInput type="checkbox" />
      <Button>Submit</Button>
    </Form>
  );
});
