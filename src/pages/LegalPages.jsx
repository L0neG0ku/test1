/**
 * Privacy and Terms.
 *
 * The content below describes only what this site actually does: the contact
 * form, waitlist and survey (delivered by EmailJS), the survey thank-you
 * messages, Google Fonts, and the analytics and advertising tags configured in
 * tracking.config.json (Google Analytics, Google Tag Manager, Meta Pixel). It is a factual starting point, not legal advice — have it
 * reviewed before launch, and update it whenever data handling changes.
 */
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";

const UPDATED = "14 October 2026";
const EMAIL = "team@kribblecare.com";

const PRIVACY = [
  {
    h: "What this covers",
    p: [
      "This policy explains how Kribble handles information collected through this website. Kribble is early stage, and the site is currently an information page, a blog, a contact form, a waitlist and a research survey.",
    ],
  },
  {
    h: "What we collect",
    p: [
      "The personal details we hold are the ones you type into a form. Separately, we measure how the site is used, as described under \"Analytics and advertising\" below.",
    ],
    ul: [
      "Contact form: your name, your email address and your message.",
      "Waitlist: your name and the email address or mobile number you give us.",
      "Survey: your name, email address, contact number, whether you are a parent or a daycare owner, and your answers to the survey questions.",
    ],
  },
  {
    h: "Why we collect it",
    p: [
      "To reply to you, to let you know when Kribble opens in your city, and to understand what parents and childcare providers actually need so we build the right product. Survey answers are used in aggregate to guide those decisions.",
    ],
  },
  {
    h: "How it reaches us",
    p: [
      "Form submissions are delivered to our team inbox by EmailJS, a third party email delivery service. Your submission passes through their systems in order to be sent, and is subject to their own privacy terms.",
      "This site also loads fonts from Google Fonts. That request tells Google your IP address and browser, as any request to an external server would.",
      "When you complete the survey we send a thank-you to the email address you gave, and may send one to your number on WhatsApp.",
      "We do not sell or rent your information to anyone.",
    ],
  },
  {
    h: "Analytics and advertising",
    p: [
      "We use Google Analytics and Google Tag Manager to understand how visitors use the site, such as which pages are read and whether a form was completed. We use the Meta Pixel to measure our adverts on Facebook and Instagram and to show them to people likely to be interested.",
      "These tools set cookies and receive information about your device, browser, approximate location and the pages you visit. They never receive what you type into our forms: we only tell them that a form was submitted, not your name, email, phone number or answers.",
      "You can opt out of Google Analytics with Google's browser add-on (tools.google.com/dlpage/gaoptout), control ad preferences in your Facebook or Instagram settings, or block cookies in your browser. The site works fully with them blocked.",
    ],
  },
  {
    h: "How long we keep it",
    p: [
      "Enquiries and survey responses stay in our email records for as long as they are useful to the work described above. Ask us to delete yours and we will.",
    ],
  },
  {
    h: "Your choices",
    p: [
      `Write to ${EMAIL} to see what we hold about you, correct it, delete it, or tell us to stop contacting you. There is no mailing list to unsubscribe from. We only contact you about what you sent us, and to tell you when Kribble opens near you if you joined the waitlist.`,
    ],
  },
  {
    h: "Children",
    p: [
      "This site is meant for parents and childcare providers, not children. We do not knowingly collect information from anyone under 18. Where you tell us about your child through the survey, please share only what you are comfortable sharing.",
    ],
  },
  {
    h: "Changes",
    p: [
      "As Kribble grows the product will change, and so will this policy. The date at the top always reflects the current version.",
    ],
  },
];

const TERMS = [
  {
    h: "Using this site",
    p: [
      "By browsing this website, sending us a message or completing the survey, you agree to these terms. If you do not agree with them, please do not use the site.",
    ],
  },
  {
    h: "What Kribble is right now",
    p: [
      "Kribble is in development. This website describes what we are building and invites early interest. Features described here, including the app, verified centre listings, in app payments and developmental insights, are planned rather than generally available, and may change or be dropped.",
      "Nothing on this site is an offer, a booking, or a guarantee that a particular centre or plan will be available to you.",
    ],
  },
  {
    h: "Information about childcare centres",
    p: [
      "Where we describe our verification process, that describes how we intend to operate the platform. Centres are independent businesses. Kribble does not run them, employ their staff or supervise their day to day care, and we are not a party to any agreement between you and a centre.",
      "Always make your own checks before enrolling your child anywhere.",
    ],
  },
  {
    h: "What you send us",
    p: [
      "Please send accurate information and only information you have the right to share. Do not use our forms to send anything unlawful, abusive or harmful.",
      "Survey responses and feedback help shape the product, and we may use them, in aggregate and without identifying you, to describe what we have learned.",
    ],
  },
  {
    h: "Our content",
    p: [
      "The Kribble name, logo, wording, design and images on this site belong to Kribble or are used with permission. Please do not copy or reuse them without asking us first.",
    ],
  },
  {
    h: "Availability and accuracy",
    p: [
      "We aim to keep this site accurate and online, but we do not promise either. Content may be out of date, and the site may be unavailable while we work on it. To the extent the law allows, the site is provided as is.",
    ],
  },
  {
    h: "Changes",
    p: [
      "We may update these terms as the product develops. The date at the top always reflects the current version.",
    ],
  },
];

function LegalPage({ eyebrow, title, intro, sections }) {
  useReveal();

  return (
    <>
      <header className="k-pagehead">
        <div className="k-shell">
          <p className="k-eyebrow">{eyebrow}</p>
          <h1 className="k-h2" style={{ maxWidth: "16ch" }}>
            {title}
          </h1>
          <p className="k-legal__meta">Last updated {UPDATED}</p>
        </div>
      </header>

      <section className="k-section k-bg-white">
        <div className="k-shell">
          <div className="k-legal" data-reveal>
            <p className="k-legal__intro">{intro}</p>

            {sections.map((s) => (
              <div className="k-legal__block" key={s.h}>
                <h2>{s.h}</h2>
                {s.p.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
                {s.ul && (
                  <ul>
                    {s.ul.map((li) => (
                      <li key={li.slice(0, 40)}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="k-legal__block">
              <h2>Getting in touch</h2>
              <p>
                Questions about this page? Email{" "}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or use the{" "}
                <Link to="/contact">contact form</Link>. Kribble operates from
                India, and Indian law governs this page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Short version: we only hold what you type into our forms, we use it to reply to you and to build a better product, and we do not sell it to anyone."
      sections={PRIVACY}
    />
  );
}

export function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="Short version: Kribble is still being built, everything described here is a work in progress, and childcare centres remain independent businesses you should check for yourself."
      sections={TERMS}
    />
  );
}
