import React from "react";
import { storiesOf } from "@storybook/react";

import { ScrollableDiv } from "../components/ScrollableDiv";
import { Card } from "../components/Card";

const stories = storiesOf("App Test", module);

stories.add("ScrollableDiv", () => {
  return (
    <ScrollableDiv>
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
    </ScrollableDiv>
  );
});
