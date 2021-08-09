import React from "react";
import { storiesOf } from "@storybook/react";

import { Container } from "../components/Container";
import { Card } from "../components/Card";

const stories = storiesOf("App Test", module);

stories.add("Container", () => {
  return (
    <Container>
      <Card
        headerText="Web Developer."
        labelText="React, Redux, Next, Node, JS"
      />
      <Card
        headerText="Web Developer."
        labelText="React, Redux, Next, Node, JS"
      />
      <Card
        headerText="Web Developer."
        labelText="React, Redux, Next, Node, JS"
      />
    </Container>
  );
});
