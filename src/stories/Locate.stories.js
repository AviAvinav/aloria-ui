import React from "react";
import { storiesOf } from "@storybook/react";

import { useLocate } from "../hooks/useLocate";
import { Card } from "../components/Card";

const stories = storiesOf("App Test", module);

stories.add("useLocate", () => {
  const [value] = useLocate();
  return <div>{value && console.log(value)}</div>;
});
