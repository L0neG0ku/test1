import { useState } from "react";
import { ChevronDown } from "../components/icons";

const ITEMS = [
  {
    q: "What kinds of childcare plans can I book on Kribble?",
    a: "Preschool admissions, monthly and half day daycare, after school care, holiday camps and our One-Day Daycare plan. Whether you need childcare for a single afternoon or a full academic year, it lives in the same app.",
  },
  {
    q: "How do I compare fees across centres?",
    a: "Every listing shows admission, registration, monthly, quarterly, half yearly and annual pricing in the same format, so you can put centres side by side and see the real cost before you commit. No enquiry calls needed.",
  },
  {
    q: "How does Kribble verify childcare centres?",
    a: "Someone from our team physically visits every centre before it goes live. We check safety, staff credentials, hygiene, ratios and facilities, and we photograph the space ourselves, so the photos you see are the rooms your child will actually be in.",
  },
  {
    q: "What is One-Day Daycare?",
    a: "Our exclusive convenience feature: book a verified centre for a single day, whenever life demands it. A meeting that runs late, a school holiday, a trip to another city. No enrolment, no long commitment.",
  },
  {
    q: "Can I enrol my child in a preschool through the app?",
    a: "Yes. Shortlist the centres you like, submit the admission form and pay the fee in the app. You will get a digital receipt and the centre gets your child's profile, including allergies and medical needs, on record from day one.",
  },
  {
    q: "What payment schedules are available?",
    a: "Whatever the centre offers: one day, monthly, quarterly, half yearly or annual. Payments are handled securely in the app with automatic receipts and gentle reminders before anything is due.",
  },
  {
    q: "Is Kribble free for parents?",
    a: "Yes. Searching, comparing and shortlisting verified centres is free. You only ever pay the centre's own fees, and members get exclusive discounts at partner centres across the network.",
  },
  {
    q: "Which cities is Kribble available in?",
    a: "We are rolling out city by city so we can personally verify every centre before listing it. Tell us where you are through the survey or the contact form and we will let you know the moment we open near you.",
  },
];

function Faq({ showEyebrow = true }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="k-section k-bg-soft" id="faq">
      <div className="k-shell">
        <div style={{ textAlign: "center", marginBottom: "clamp(40px, 5vw, 64px)" }} data-reveal>
          {showEyebrow && (
            <p className="k-eyebrow" style={{ justifyContent: "center" }}>
              Questions
            </p>
          )}
          <h2 className="k-h2">
            Asked often. <span className="k-em">Answered honestly.</span>
          </h2>
        </div>

        <div className="k-faq" data-reveal-stagger>
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                className={`k-faq__item ${isOpen ? "is-open" : ""}`}
                key={item.q}
              >
                <button
                  className="k-faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <ChevronDown />
                </button>
                <div className="k-faq__a">
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
