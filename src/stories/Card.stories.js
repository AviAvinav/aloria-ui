import React from "react";
import { storiesOf } from "@storybook/react";

import { Card } from "../components/Card";

const stories = storiesOf("App Test", module);

stories.add("Card", () => {
  return (
    <Card
      style={{ height: "10rem" }}
      headerText="Web Developer."
      labelText="React, Redux, Next, Node, JS"
    />
  );
});
