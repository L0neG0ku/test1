/* Prerenders every page of the site to static HTML after `vite build`.

   Why: the site is a React app, so the HTML Vercel serves used to have an empty
   <body>. Google can run the JavaScript, but Bing, WhatsApp/LinkedIn link
   previews and AI assistants read only the served HTML and saw a blank page.
   Now each route gets its own file with the real content and its own title,
   description, canonical and social tags. React then hydrates it in the browser.

   Output (served by Vercel with cleanUrls):
     dist/index.html            /
     dist/<route>.html          /<route>
     dist/404.html              any unknown URL, served with status 404 */

import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const root = join(import.meta.dirname, "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render, FAQ_ITEMS } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);
const { ROUTES, NOT_FOUND, SITE_URL, metaFor } = await import(
  pathToFileURL(join(root, "src", "seo", "routes.js")).href
);

const template = readFileSync(join(dist, "index.html"), "utf8");

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function replaceTag(html, pattern, replacement, label) {
  const found = typeof pattern === "string" ? html.includes(pattern) : pattern.test(html);
  if (!found) throw new Error(`prerender: ${label} not found in index.html`);
  return html.replace(pattern, replacement);
}

function jsonLd(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;
}

/* Structured data for the homepage. The FAQ is built from the same list the page
   renders, so it can't drift from the visible answers. Facts per seo-blog/FACTS.md. */
function homeStructuredData() {
  const org = `${SITE_URL}/#org`;
  return jsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": org,
        name: "Kribble",
        legalName: "Little Orbit Technology Private Limited",
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/blog/og/logo.png`,
        email: "team@kribblecare.com",
        areaServed: { "@type": "City", name: "Gurugram" },
        founder: [
          { "@type": "Person", name: "Piyush Chawla", jobTitle: "Co-founder and CEO" },
          { "@type": "Person", name: "Ketan Pandey", jobTitle: "Co-founder and CTO" },
          { "@type": "Person", name: "Anand Singh", jobTitle: "Co-founder and CMO" },
        ],
        // Same profiles as the footer (src/components/Footer.jsx).
        sameAs: [
          "https://www.instagram.com/kribblecare",
          "https://www.facebook.com/share/19BUoGWQUm/",
          "https://www.linkedin.com/company/kribblecare/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Kribble",
        url: `${SITE_URL}/`,
        publisher: { "@id": org },
        inLanguage: "en-IN",
      },
      {
        "@type": "MobileApplication",
        name: "Kribble",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Android, iOS",
        url: `${SITE_URL}/`,
        publisher: { "@id": org },
        description:
          "Find, compare and book verified daycares, preschools and playschools, from a single day to a full year. Launching first in Gurugram.",
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  });
}

function page(url, meta, { noindex = false } = {}) {
  let html = template;
  const t = esc(meta.title);
  const d = esc(meta.description);

  html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${t}</title>`, "<title>");
  html = replaceTag(html, /<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${d}" />`, "description");
  html = replaceTag(html, /<meta property="og:title"[^>]*\/>/, `<meta property="og:title" content="${t}" />`, "og:title");
  html = replaceTag(html, /<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${d}" />`, "og:description");
  html = replaceTag(html, /<meta name="twitter:title"[^>]*\/>/, `<meta name="twitter:title" content="${t}" />`, "twitter:title");
  html = replaceTag(html, /<meta\s+name="twitter:description"[\s\S]*?\/>/, `<meta name="twitter:description" content="${d}" />`, "twitter:description");

  if (noindex) {
    html = replaceTag(html, /<meta name="robots"[^>]*\/>/, `<meta name="robots" content="noindex, follow" />`, "robots");
    html = html.replace(/\s*<link rel="canonical"[^>]*\/>/, "").replace(/\s*<meta property="og:url"[^>]*\/>/, "");
  } else {
    html = replaceTag(html, /<link rel="canonical"[^>]*\/>/, `<link rel="canonical" href="${meta.canonical}" />`, "canonical");
    html = replaceTag(html, /<meta property="og:url"[^>]*\/>/, `<meta property="og:url" content="${meta.canonical}" />`, "og:url");
  }

  if (url === "/") html = html.replace("</head>", `    ${homeStructuredData()}\n  </head>`);

  const body = render(url);
  return replaceTag(html, '<div id="root"></div>', `<div id="root">${body}</div>`, "#root");
}

const written = [];
for (const route of Object.keys(ROUTES)) {
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  writeFileSync(join(dist, file), page(route, metaFor(route)));
  written.push(file);
}
writeFileSync(join(dist, "404.html"), page("/404-not-found", NOT_FOUND, { noindex: true }));
written.push("404.html");

rmSync(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${written.length} pages: ${written.join(", ")}`);
