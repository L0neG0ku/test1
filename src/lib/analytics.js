/* Conversion events for GA4, the Meta Pixel and Google Tag Manager.

   The base scripts are injected into the page by scripts/tracking-plugin.js,
   only for the IDs set in tracking.config.json. Every call here is guarded, so
   nothing breaks when a script is switched off or blocked by an ad blocker.

   Never pass names, emails, phone numbers or free text into an event. */

const EVENTS = {
  waitlist_signup: {
    ga4: ["generate_lead", { form_name: "waitlist" }],
    meta: ["track", "Lead", { content_name: "waitlist" }],
  },
  survey_complete: {
    ga4: ["survey_complete"],
    meta: ["trackCustom", "SurveyComplete"],
  },
  contact_submit: {
    ga4: ["contact_submit"],
    meta: ["track", "Contact"],
  },
  demo_request: {
    ga4: ["demo_request"],
    meta: ["track", "Schedule"],
  },
};

function safely(fn) {
  try {
    fn();
  } catch {
    /* a blocked or half-loaded script must never break the page */
  }
}

/** Fire a named conversion (a key of EVENTS) to every tool that's loaded. */
export function trackEvent(name) {
  const event = EVENTS[name];
  if (!event || typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    safely(() => window.gtag("event", ...event.ga4));
  }
  if (typeof window.fbq === "function") {
    safely(() => window.fbq(...event.meta));
  }
  if (Array.isArray(window.dataLayer)) {
    safely(() => window.dataLayer.push({ event: name }));
  }
}

/** A click on a call to action that has no form behind it yet. */
export function trackCtaClick(ctaName) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    safely(() => window.gtag("event", "cta_click", { cta_name: ctaName }));
  }
  if (Array.isArray(window.dataLayer)) {
    safely(() => window.dataLayer.push({ event: "cta_click", cta_name: ctaName }));
  }
}
