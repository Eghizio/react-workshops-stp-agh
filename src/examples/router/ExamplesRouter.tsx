import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { SideNavigation } from "./SideNavigation";
// import { navigation } from "./navigation";
import "./Example.css";
import { App as GettingReady } from "../1-getting-ready/App";
import { App as HelloJSX } from "../2-hello-jsx/App";
import { App as FirstComponent } from "../3-first-component/App";
import { App as Props } from "../4-props/App";
import { App as ConditionalRendering } from "../5-conditional-rendering/App";
import { App as Mapping } from "../6-mapping/App";
import { App as EventHandling } from "../7-event-handling/App";
import { App as Styling } from "../8-styling/App";
import { App as StateHook } from "../9-state/App";
import { App as EffectHook } from "../10-effects/App";
import { App as FetchApi } from "../11-fetch-api/App";
import { App as ReactRouting } from "../12-routing/App";

export const ExamplesRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/1" element={<GettingReady />} />
        <Route path="/2" element={<HelloJSX />} />
        <Route path="/3" element={<FirstComponent />} />
        <Route path="/4" element={<Props />} />
        <Route path="/5" element={<ConditionalRendering />} />
        <Route path="/6" element={<Mapping />} />
        <Route path="/7" element={<EventHandling />} />
        <Route path="/8" element={<Styling />} />
        <Route path="/9" element={<StateHook />} />
        <Route path="/10" element={<EffectHook />} />
        <Route path="/11" element={<FetchApi />} />
        <Route path="/12" element={<ReactRouting />} />

        <Route element={<div className="center">404 - Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};
