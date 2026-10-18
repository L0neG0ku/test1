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
    title: "Kribble: Verified Daycares & Preschools in Gurugram",
    description:
      "Find, compare and book verified daycares, preschools and playschools in Gurugram, from a single day to a full year. Join the Kribble waitlist.",
  },
  "/problem": {
    title: "Why Finding Childcare Is So Hard | Kribble",
    description:
      "Scattered listings, hidden fees and no way to check safety before you visit. The problems parents face choosing a daycare or preschool today.",
  },
  "/solution": {
    title: "One App for Verified Childcare | Kribble",
    description:
      "Kribble brings verified daycares, preschools and playschools into one app: compare fees and plans, book a day or a year, and get daily updates.",
  },
  "/how-it-works": {
    title: "How Kribble Works: Search to First Morning",
    description:
      "Search verified centres near you, compare fees side by side, enrol and pay in the app, then follow your child's day. How Kribble works, step by step.",
  },
  "/why-parents": {
    title: "Why Parents Choose Kribble",
    description:
      "Verified centres, real photos, clear fees and updates from your child's teachers in one feed. Why parents in Gurugram are waiting for Kribble.",
  },
  "/what-we-cover": {
    title: "Daycare, Preschool & After-School Care | Kribble",
    description:
      "Preschool admissions, monthly and half-day daycare, after-school care, holiday camps and One-Day Daycare. Every stage of your child's early years.",
  },
  "/team": {
    title: "The Team Building Kribble",
    description:
      "Meet Piyush Chawla, Ketan Pandey and Anand Singh, the co-founders building Kribble, a verified childcare discovery app starting in Gurugram.",
  },
  "/why-kribble": {
    title: "Why Kribble: Childcare Brought Together",
    description:
      "Verified daycares and preschools, transparent fees, flexible plans and member discounts at partner centres, all in one childcare app.",
  },
  "/developmental-story": {
    title: "Your Child's Developmental Story | Kribble",
    description:
      "Coming to Kribble: teacher notes and milestones gathered into one picture of your child's early years, from their first day at daycare onwards.",
  },
  "/faq": {
    title: "Kribble FAQ: Fees, Verification, Cities",
    description:
      "Is Kribble free for parents? How are centres verified? What is One-Day Daycare? Straight answers to the questions parents ask us most.",
  },
  "/about": {
    title: "About Kribble: Our Mission",
    description:
      "Kribble is building a verified childcare discovery app so every parent can find care they trust. Starting in Gurugram, other cities to follow.",
  },
  "/contact": {
    title: "Contact Kribble",
    description:
      "Questions about Kribble, verified childcare in Gurugram or partnering as a centre? Write to team@kribblecare.com or send us a message here.",
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
  description: "This page doesn't exist. Head back to Kribble to find verified daycares and preschools in Gurugram.",
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
