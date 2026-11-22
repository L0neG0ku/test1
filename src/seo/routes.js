/* Title, description and canonical URL for every page of the site.

   Used in two places:
   - scripts/prerender.mjs writes them into each page's static HTML, which is
     what search engines, link previews and AI assistants read;
   - usePageMeta() updates them in the browser when someone navigates in-app.

   Keep titles under 60 characters and descriptions between 110 and 160.
   Facts must match seo-blog/FACTS.md. */

export const SITE_URL = "https://www.kribblecare.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/blog/og/home.png`;

export const ROUTES = {
  "/": {
    title: "Kribble: Daycares, Preschools & Activities in Gurugram",
    description:
      "Find, compare and enrol in daycares, preschools and activities in Gurugram for children aged 15 months to 10 years. Every centre visited in person.",
  },
  "/explore": {
    title: "Search Daycares, Preschools & Activities | Kribble",
    description:
      "Search verified daycares, preschools, activities and one-day care in Gurugram by your child's age and area. Listings open with the Kribble app.",
  },
  "/about": {
    title: "About Kribble: The Team Behind the App",
    description:
      "Why we're building Kribble, the childcare app for Gurugram parents, and the four co-founders behind it. Daycare, preschool and activities in one app.",
  },
  "/contact": {
    title: "Contact Kribble",
    description:
      "Questions about Kribble, daycares, preschools or activities in Gurugram? Write to team@kribblecare.com or send us a message and the team will reply.",
  },
  "/survey": {
    title: "Help Shape Kribble: Parent & Centre Survey",
    description:
      "Two minutes, five questions. Tell us how you find and manage childcare today, as a parent or a daycare owner, and help us build Kribble right.",
  },
  "/waitlist": {
    title: "Join the Kribble Waitlist | Early Access",
    description:
      "Be first in line for Kribble in Gurugram: early access, founding-member pricing at partner centres and a say in what we build next.",
  },
  "/privacy": {
    title: "Privacy Policy | Kribble",
    description:
      "How Kribble collects, uses and protects the information you share through kribblecare.com, including the survey, waitlist and contact form.",
  },
  "/terms": {
    title: "Terms of Use | Kribble",
    description:
      "The terms that apply when you use kribblecare.com, send us a message, join the waitlist or complete the Kribble survey.",
  },
};

export const NOT_FOUND = {
  title: "Page not found | Kribble",
  description: "This page doesn't exist. Head back to Kribble to find daycares, preschools and activities in Gurugram.",
  noindex: true,
};

/** Meta for a path, with the canonical URL filled in. Unknown paths get the 404 meta. */
export function metaFor(pathname) {
  const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
  const route = ROUTES[path];
  if (!route) return { ...NOT_FOUND, canonical: null, image: DEFAULT_OG_IMAGE };
  return {
    ...route,
    canonical: SITE_URL + (path === "/" ? "/" : path),
    image: route.image || DEFAULT_OG_IMAGE,
  };
}
