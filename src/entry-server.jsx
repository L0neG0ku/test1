/* Build-time renderer. scripts/prerender.mjs calls render() once per page to
   produce the static HTML that search engines and link previews read. It never
   runs in the browser or on a server at request time. */
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}

// Re-exported so the prerender script builds FAQ structured data from the
// exact text the page renders.
export { FAQ_ITEMS } from "./data/faq";
