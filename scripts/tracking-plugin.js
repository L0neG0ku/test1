/* Injects the official Google Tag Manager, Google Analytics 4 and Meta Pixel
   snippets into index.html at build time, for whichever IDs are filled in
   tracking.config.json. An empty ID leaves that tool out entirely.

   Order follows the standard install guides: GTM as high in <head> as possible
   (plus its <noscript> right after <body>), then GA4, then the Pixel.
   GA4 and the Pixel are hardcoded here on purpose; the GTM container is for
   future tags and must not also load GA4 or the Pixel, or they double count. */

import { readFileSync } from "node:fs";
import { join } from "node:path";

const PATTERNS = {
  ga4MeasurementId: /^G-[A-Z0-9]+$/,
  metaPixelId: /^\d{10,20}$/,
  gtmContainerId: /^GTM-[A-Z0-9]+$/,
};

function loadIds(root) {
  const raw = JSON.parse(readFileSync(join(root, "tracking.config.json"), "utf8"));
  const ids = {};
  for (const [key, pattern] of Object.entries(PATTERNS)) {
    const value = String(raw[key] || "").trim();
    if (!value) continue;
    // A malformed ID would silently send nothing, so fail the build loudly instead.
    if (!pattern.test(value)) {
      throw new Error(`tracking.config.json: "${key}" looks wrong: "${value}"`);
    }
    ids[key] = value;
  }
  return ids;
}

const gtmHead = (id) => `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');</script>
<!-- End Google Tag Manager -->`;

const gtmBody = (id) => `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${id}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`;

const ga4 = (id) => `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${id}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${id}');
</script>`;

const pixel = (id) => `<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${id}');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->`;

/** Adds the configured snippets to one HTML document. Also used by
    scripts/build-blog.mjs, so the static blog pages are tracked too. */
export function injectTracking(html, root) {
  const ids = loadIds(root);
  const head = [
    ids.gtmContainerId && gtmHead(ids.gtmContainerId),
    ids.ga4MeasurementId && ga4(ids.ga4MeasurementId),
    ids.metaPixelId && pixel(ids.metaPixelId),
  ].filter(Boolean);
  if (head.length) {
    html = html.replace(/<head>/, `<head>\n${head.join("\n")}`);
  }
  if (ids.gtmContainerId) {
    html = html.replace(/<body>/, `<body>\n${gtmBody(ids.gtmContainerId)}`);
  }
  return html;
}

export default function trackingPlugin() {
  let root = process.cwd();
  return {
    name: "kribble-tracking",
    configResolved(config) {
      root = config.root;
    },
    transformIndexHtml(html) {
      return injectTracking(html, root);
    },
  };
}
