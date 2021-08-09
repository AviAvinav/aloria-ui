# Grid

<p>Grid is a basic grid container with 3 columns in large screens, 2 columns in medium screens and 1 columns in small screens</p>

## Usage

```jsx
import React from "react";
import { Grid } from "aloria-ui";

export default function App() {
  return <Grid>{/* Your Stuff */}</Grid>;
}
```

## Props

<p>

The Grid component does not take any props. To style it use the classname of ".Grid" in your css.

</p>

## Preview/Example

<p>Here is an example of how to use the Grid component.</p>

```jsx
import React from "react";
import { Grid, Card } from "aloria-ui";

export default function App() {
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
}
```

<br/>

<div style="display: flex; justify-content: center;" >
<img src="../../media/gridImage.png" width="40%" />
</div>
