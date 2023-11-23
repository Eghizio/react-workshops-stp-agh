import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Pokemons } from "../pages/Pokemons";
import { Details } from "../pages/Details";
import { NotFound } from "../pages/NotFound";

export const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Header title="React Pokemons" />
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/details/:name" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
