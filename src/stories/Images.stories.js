import React from "react";
import { storiesOf } from "@storybook/react";

import { Image, Container } from "../components/Image";

const stories = storiesOf("App Test", module);

stories.add("Image", () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ marginBottom: "30px" }}>
        <Image
          src="https://raw.githubusercontent.com/AviAvinav/aloria-ui/main/media/aloria.png"
          filter="cool-drop-shadow"
        />
      </div>
      <div>
        <Image src="https://raw.githubusercontent.com/AviAvinav/aloria-ui/main/media/aloria.png" />
      </div>
    </div>
  );
});
