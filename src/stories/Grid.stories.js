import React from "react";
import { storiesOf } from "@storybook/react";

import { Grid } from "../components/Grid";
import { Card } from "../components/Card";

const stories = storiesOf("App Test", module);

stories.add("Grid", () => {
  return (
    <Grid>
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
    </Grid>
  );
});
