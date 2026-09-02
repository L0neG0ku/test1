import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";
import listingShot from "../assets/peak.png";
import { ArrowRight, Check, ShieldCheck, Bell, Brain } from "../components/icons";
import "./WaitlistPage.css";

/* Same EmailJS destination the survey posts to. */
const EMAILJS = {
  service: "service_pe450l4",
  template: "template_zswwmx9",
  publicKey: "taf9C1ZSN7pSkP8Zl",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Accepts +91 / spaces / hyphens, as long as there are 10 real digits. */
function isPhone(value) {
  const text = value.trim();
  return /^[+\d][\d\s-]*$/.test(text) && text.replace(/\D/g, "").length >= 10;
}

/* Screenshots of the real app, shown small under the copy. */
const APP_SHOTS = [
  { src: listingShot, alt: "A verified centre listing in the Kribble app" },
  { src: "/meal.png", alt: "The daily meal log in the Kribble app" },
  { src: "/analytics.png", alt: "Weekly analytics in the Kribble app" },
];

const POINTS = [
  "First access when we open in your city",
  "Founding-member pricing on partner centres",
  "A say in what we build next",
];

/* Each perk is anchored to a screen you can actually see. */
const SHOWCASE = [
  {
    n: "01",
    Icon: ShieldCheck,
    image: listingShot,
    alt: "A verified centre listing showing the Kribble Verified badge",
    title: "Know it's safe before you visit",
    body: "Every listing carries a Kribble Verified badge that our team earns on foot not a form a centre filled in about itself.",
    chips: ["CCTV access", "Hygiene certified", "Qualified staff", "Real photos"],
  },
  {
    n: "02",
    Icon: Bell,
    image: "/meal.png",
    alt: "The daily meal log showing breakfast, lunch, snack and dinner",
    title: "Know what they actually ate",
    body: "Every meal logged as it happens, down to whether it was finished, half eaten or refused  with a note from the teacher who was there.",
    chips: ["Meal by meal", "Teacher notes", "Nutrition summary"],
  },
  {
    n: "03",
    Icon: Brain,
    image: "/analytics.png",
    alt: "Weekly analytics showing attendance, sleep, activities and mood",
    title: "See the week at a glance",
    body: "Attendance, sleep, activities, participation and a mood trend, gathered into one weekly view instead of scattered across five group chats.",
    chips: ["Attendance", "Sleep & mood", "Participation"],
  },
];

function WaitlistPage() {
  useReveal();

  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const [error, setError] = useState("");

  const update = (key) => (event) =>
    setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    setError("");

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();

    if (!name) {
      setError("Please tell us your name.");
      return;
    }

    // Either one is enough, but whichever they give has to be usable.
    if (!email && !phone) {
      setError("Add an email address or a mobile number so we can reach you.");
      return;
    }
    if (email && !emailPattern.test(email)) {
      setError("That email address doesn't look right.");
      return;
    }
    if (phone && !isPhone(phone)) {
      setError("Enter a 10-digit mobile number.");
      return;
    }

    setStatus("sending");

    emailjs
      .send(
        EMAILJS.service,
        EMAILJS.template,
        {
          name,
          // The shared template expects both slots filled, so label the blank one.
          email: email || "Not provided",
          phone: phone || "Not provided",
          userType: "Waitlist signup",
          message: `Waitlist signup\nName: ${name}\nEmail: ${
            email || "Not provided"
          }\nPhone: ${phone || "Not provided"}`,
        },
        EMAILJS.publicKey
      )
      .then(() => {
        setStatus("done");
        setForm({ name: "", email: "", phone: "" });
      })
      .catch((err) => {
        console.error(err);
        setStatus("idle");
        setError("Something went wrong. Please try again in a moment.");
      });
  };

  return (
    <>
      {/* ---------- Hero + form ---------- */}
      <section className="wl">
        <div className="k-shell wl__grid">
          <div className="wl__copy">
            <p className="k-eyebrow">Early access</p>

            <h1 className="k-h1">
              Be first in line for <span className="k-underline">Kribble.</span>
            </h1>

            <p className="k-lead">
              We’re launching soon. 
              Join the waitlist to be among the first families to discover trusted childcare, 
              connect with the right centres, and simplify your child’s early years journey.
            </p>

            <ul className="wl__points">
              {POINTS.map((point) => (
                <li key={point}>
                  <span className="wl__tick">
                    <Check size={13} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="wl__shots">
              {APP_SHOTS.map((shot) => (
                <figure className="wl__shot" key={shot.alt}>
                  <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
            <p className="wl__shots-note">A peek at the app</p>
          </div>

          <div className="wl__panel">
            {status === "done" ? (
              <div className="wl__done" role="status">
                <span className="wl__done-tick">
                  <Check size={24} />
                </span>
                <h2>You're on the list.</h2>
                <p>
                  Thank you. We'll be in touch the moment Kribble opens in your
                  city.
                </p>
                <Link to="/survey" className="k-btn k-btn--ghost">
                  Take the survey too
                </Link>
              </div>
            ) : (
              <form className="wl__form" onSubmit={submit} noValidate>
                <h2 className="wl__form-title">Join the waitlist</h2>
                <p className="wl__form-sub">
                  No spam, no mailing list. One message when we open near you.
                </p>

                <div className="wl__field">
                  <label htmlFor="wl-name">Your name</label>
                  <input
                    id="wl-name"
                    type="text"
                    placeholder="e.g. Ananya Sharma"
                    value={form.name}
                    onChange={update("name")}
                    autoComplete="name"
                  />
                </div>

                <div className="wl__field">
                  <label htmlFor="wl-email">Email address</label>
                  <input
                    id="wl-email"
                    type="email"
                    inputMode="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={update("email")}
                    autoComplete="email"
                  />
                </div>

                <div className="wl__field">
                  <label htmlFor="wl-phone">
                    Phone number <span className="wl__opt">Optional</span>
                  </label>
                  <input
                    id="wl-phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="98765 43210"
                    value={form.phone}
                    onChange={update("phone")}
                    autoComplete="tel"
                  />
                  <p className="wl__hint">
                    Either one is enough. Give us whichever you'd rather hear from us on.
                  </p>
                </div>

                <button
                  type="submit"
                  className="k-btn k-btn--primary"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Adding you…" : "Join the waitlist"}
                  {status !== "sending" && <ArrowRight />}
                </button>

                {error ? (
                  <p className="wl__error" role="alert">
                    {error}
                  </p>
                ) : null}

                <p className="wl__note">
                  Got two minutes instead? <Link to="/survey">Take the survey</Link>{" "}
                  and help shape what we build.
                </p>
              </form>
            )}
          </div>
        </div>

        <a className="wl__scroll" href="#inside" aria-label="See what's inside the app">
          <span>See what's inside</span>
          <i aria-hidden="true" />
        </a>
      </section>

      {/* ---------- Showcase ---------- */}
      <section className="k-section k-bg-white wl-show" id="inside">
        <div className="k-shell">
          <div className="wl-show__head" data-reveal>
            <p className="k-eyebrow">Inside the app</p>
            <h2 className="k-h2">
              A glimpse of <span className="k-em">what you get.</span>
            </h2>
          </div>

          <div className="wl-show__rows">
            {SHOWCASE.map(({ n, Icon, image, alt, title, body, chips }) => (
              <article className="wl-row" key={n} data-reveal>
                <div className="wl-row__art">
                  <span className="wl-row__glow" aria-hidden="true" />
                  <figure className="wl-row__phone">
                    <img src={image} alt={alt} loading="lazy" decoding="async" />
                  </figure>
                </div>

                <div className="wl-row__copy">
                  <div className="wl-row__meta">
                    <span className="wl-row__icon">
                      <Icon size={22} />
                    </span>
                    <span className="wl-row__n">{n}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <ul className="wl-row__chips">
                    {chips.map((chip) => (
                      <li key={chip}>{chip}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="wl-show__end" data-reveal>
            <p className="wl-show__more">
              <span aria-hidden="true" />
              and many more
              <span aria-hidden="true" />
            </p>

            <a
              href="#top"
              className="k-btn k-btn--primary"
              onClick={(event) => {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Join the waitlist <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default WaitlistPage;
