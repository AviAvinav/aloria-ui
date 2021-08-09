import React from "react";
import { storiesOf } from "@storybook/react";

import { useLoading } from "../hooks/useLoading";
import { Card } from "../components/Card";

const stories = storiesOf("App Test", module);

stories.add("useLoading", () => {
  const [value] = useLoading(10000);
  if (!value) {
    return <Card />;
  }
  return (
    <Card
      headerText="Web Developer."
      labelText="React, Redux, Next, Node, JS"
    />
  );
});
