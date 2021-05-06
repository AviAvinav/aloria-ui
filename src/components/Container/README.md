# Container

<p>
Container is a basic container component.
<br/>

It has a top and bottom `margin` of 1rem, and a `padding` of 1rem vertically and 2rem horizontally.

</p>

## Usage

```jsx
import React from "react";
import { Container } from "aloria-ui";

export default function App() {
  return <Container />;
}
```

## Props

<p>

The Container component takes the following props:

<ul>

<li>

`flexDirection`: It specifies the flex direction of the container. Default value: for screen-widths >= 767px, `row`; otherwise, `column`.

</li>

</ul>

</p>

## Preview/Example

<p>Here is an example of how to use the Container component.</p>

```jsx
import React from "react";
import { Container } from "aloria-ui";

export default function App() {
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
}
```

<br/>

<div style="display: flex; justify-content: center;" >
<img src="../../../media/containerImage.png" width="100%" />
</div>
