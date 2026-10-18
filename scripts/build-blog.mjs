/* Builds the blog (seo-blog/, a Python static generator) and copies its output
   into public/ so Vite ships it with the site.

     node scripts/build-blog.mjs

   Only posts whose publish date has arrived are built. A daily GitHub Action
   (.github/workflows/publish-blog.yml) runs this and commits when a scheduled
   post goes live, which triggers a Vercel deploy. */

import { spawnSync } from "node:child_process";
import { cpSync, copyFileSync, existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { injectTracking } from "./tracking-plugin.js";

const root = join(import.meta.dirname, "..");
const blogSrc = join(root, "seo-blog");
const out = join(blogSrc, "dist");
const pub = join(root, "public");

function runPython() {
  for (const bin of ["python3", "python"]) {
    const res = spawnSync(bin, ["build.py"], { cwd: blogSrc, stdio: "inherit" });
    if (!res.error) return res.status;
  }
  throw new Error("Python 3 is required to build the blog (python3 or python on PATH).");
}

if (runPython() !== 0) process.exit(1);

// Replace the previous build wholesale, so unpublished or renamed posts don't linger.
rmSync(join(pub, "blog"), { recursive: true, force: true });
cpSync(join(out, "blog"), join(pub, "blog"), { recursive: true });

// Same GA4 / GTM / Pixel tags as the React pages (tracking.config.json).
for (const entry of readdirSync(join(pub, "blog"), { recursive: true })) {
  if (!String(entry).endsWith(".html")) continue;
  const file = join(pub, "blog", String(entry));
  writeFileSync(file, injectTracking(readFileSync(file, "utf8"), root));
}
for (const f of ["sitemap-blog.xml", "llms.txt", "llms-full.txt"]) {
  copyFileSync(join(out, f), join(pub, f));
}
// robots.txt is maintained by hand in public/ (robots.suggested.txt is only a hint).
if (!existsSync(join(pub, "robots.txt"))) {
  copyFileSync(join(out, "robots.suggested.txt"), join(pub, "robots.txt"));
}
console.log("Blog copied into public/.");
