import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, Mail } from "../components/icons";
import { EMAILJS } from "../lib/emailjs";
import { trackEvent } from "../lib/analytics";

const EMAIL = "team@kribblecare.com";

function ContactSection({ showEyebrow = true }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    emailjs
      .send(
        EMAILJS.service,
        EMAILJS.teamTemplate,
        {
          name: form.name,
          email: form.email,
          phone: "Not provided",
          userType: "Website enquiry",
          message: form.message,
        },
        EMAILJS.publicKey
      )
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        trackEvent("contact_submit");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  };

  return (
    <section className="k-contact" id="contact">
      <div className="k-shell k-contact__grid" data-reveal>
        <div>
          {showEyebrow && <p className="k-eyebrow">Get in touch</p>}
          <h2 className="k-h2">
            Childcare you can{" "}
            <span className="k-accent" style={{ color: "#9b7bff" }}>
              finally trust.
            </span>
          </h2>
          <p className="k-lead" style={{ marginTop: 24 }}>
            Be among the first to find verified childcare near you. Drop us a
            note and we'll be in touch.
          </p>

          <div className="k-contact__mail">
            <span className="k-contact__mail-icon">
              <Mail size={24} />
            </span>
            <div>
              <span>Or email us directly</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
        </div>

        <form className="k-form" onSubmit={submit} noValidate>
          <div className="k-field">
            <label htmlFor="k-name">Your name</label>
            <input
              id="k-name"
              type="text"
              placeholder="e.g. Ananya Sharma"
              value={form.name}
              onChange={update("name")}
            />
          </div>

          <div className="k-field">
            <label htmlFor="k-email">Email</label>
            <input
              id="k-email"
              type="email"
              placeholder="you@somewhere.com"
              value={form.email}
              onChange={update("email")}
            />
          </div>

          <div className="k-field">
            <label htmlFor="k-msg">Message</label>
            <textarea
              id="k-msg"
              placeholder="Tell us where you are and what you're looking for."
              value={form.message}
              onChange={update("message")}
            />
          </div>

          <button
            type="submit"
            className="k-btn k-btn--primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Get in touch"}
            {status !== "sending" && <ArrowRight />}
          </button>

          {status === "sent" && (
            <p className="k-form__ok">
              Thank you, your note is on its way. We'll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="k-form__ok" style={{ color: "#ff9b9b" }}>
              Please fill in your name, email and message, then try again.
            </p>
          )}

          <p className="k-form__note">
            By sending this, you agree we can email you back about Kribble. No
            spam. No lists.
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
