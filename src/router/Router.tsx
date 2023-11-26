import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
// Examples
import { ExamplesPage } from "../examples/router/ExamplesPage";
import { App as GettingReady } from "../examples/1-getting-ready/App";
import { App as HelloJSX } from "../examples/2-hello-jsx/App";
import { App as FirstComponent } from "../examples/3-first-component/App";
import { App as Props } from "../examples/4-props/App";
import { App as ConditionalRendering } from "../examples/5-conditional-rendering/App";
import { App as Mapping } from "../examples/6-mapping/App";
import { Zadanie as ZadanieMapping } from "../examples/6-mapping/Zadanie";
import { App as EventHandling } from "../examples/7-event-handling/App";
import { App as Styling } from "../examples/8-styling/App";
import { App as StateHook } from "../examples/9-state/App";
import { Zadanie as ZadanieStateHook } from "../examples/9-state/Zadanie";
import { App as EffectHook } from "../examples/10-effects/App";
import { App as FetchApi } from "../examples/11-fetch-api/App";
import { App as ReactRouting } from "../examples/12-routing/App";
// Pokemon application
import { Pokemons } from "../pokemons/pages/Pokemons";
import { Details } from "../pokemons/pages/Details";

export const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<Layout title="Schibsted React Workshops" />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/examples" element={<Layout title="React Workshops" />}>
          <Route index element={<ExamplesPage />} />
          <Route path="/examples/1" element={<GettingReady />} />
          <Route path="/examples/2" element={<HelloJSX />} />
          <Route path="/examples/3" element={<FirstComponent />} />
          <Route path="/examples/4" element={<Props />} />
          <Route path="/examples/5" element={<ConditionalRendering />} />
          <Route path="/examples/6" element={<Mapping />} />
          <Route path="/examples/6/zadanie" element={<ZadanieMapping />} />
          <Route path="/examples/7" element={<EventHandling />} />
          <Route path="/examples/8" element={<Styling />} />
          <Route path="/examples/9" element={<StateHook />} />
          <Route path="/examples/9/zadanie" element={<ZadanieStateHook />} />
          <Route path="/examples/10" element={<EffectHook />} />
          <Route path="/examples/11" element={<FetchApi />} />
          <Route path="/examples/12" element={<ReactRouting />} />
        </Route>

        <Route path="/pokemons" element={<Layout title="React Pokemons" />}>
          <Route index element={<Pokemons />} />
          <Route path="/pokemons/details/:name" element={<Details />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
