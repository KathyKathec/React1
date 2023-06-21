import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Listas from "./Listas";
import App from "./App";
import { Eventos } from "./Eventos";
import Paragrafo from "./Paragrafo";

function Modulos() {
  return (
    <>
      <App />
      <Listas />
      <Eventos />
      <Eventos />
      <Paragrafo />
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Modulos />
  </StrictMode>
);
