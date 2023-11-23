import { App as GettingReady } from "../1-getting-ready/App";
import { App as HelloJSX } from "../2-hello-jsx/App";
import { App as FirstComponent } from "../3-first-component/App";

export const navigation = [
  { url: "/1", title: "Getting Ready", element: <GettingReady /> },
  { url: "/2", title: "Hello JSX", element: <HelloJSX /> },
  { url: "/3", title: "First Component", element: <FirstComponent /> },
];
