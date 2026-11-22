import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Fonts are served from our own domain (no Google Fonts round trip, cached
// with the rest of the build). Latin subsets only for Oswald.
import "@fontsource/oswald/latin-500.css";
import "@fontsource/oswald/latin-600.css";
import "@fontsource/oswald/latin-700.css";
import "@fontsource-variable/inter/wght.css";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Production pages arrive prerendered (scripts/prerender.mjs), so React adopts
// the existing HTML instead of redrawing it. In dev the root is empty.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
