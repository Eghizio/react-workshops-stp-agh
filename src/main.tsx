import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { App } from "./App.tsx";
import { Router } from "./router/Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Router />
  </React.StrictMode>
);
