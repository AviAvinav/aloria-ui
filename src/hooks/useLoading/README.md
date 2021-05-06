# useLoading

## Intro

<p>A custom react hook to check for loading, useful for showing loading screen.</p>

## Usage

```jsx
import React from "react";
import { useLoading } from "aloria-ui";

export default function App() {
  const [loaded] = useLoading();
  if (!loaded) {
    return <LoadingScreen />;
  }
  return <MainScreen />;
}
```

## Arguments

<p>

The useLoading hook takes the following prop:

<ul>

<li>

`loadingTimeout`: It specifies the time in seconds you want the loading screen to appear for. Default value: `3`.

</li>

</ul>

</p>
