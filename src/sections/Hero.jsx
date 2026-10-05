import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import blobImg from "../assets/parent.jpeg";
import circleImg from "../assets/daycare.jpeg";
import { ArrowRight, Check } from "../components/icons";
import { hasDoneSurvey } from "../lib/surveyStatus";

function Hero() {
  const location = useLocation();
  const justDone = Boolean(location.state?.surveyJustDone);
  // Read once on mount; the flag only ever changes on the survey page.
  const [surveyDone] = useState(() => justDone || hasDoneSurvey());

  return (
    <section className="k-hero">
      <div className="k-shell k-hero__grid">
        <div>
          <h1 className="k-h1 k-hero__title">
            Childcare,
            <br />
           wherever you <span className="k-underline">need it.</span>
          </h1>

          <p className="k-lead">
          Discover trusted, verified childcare centres and book with confidence.
          Stay connected with updates and access your child growth analytics in one App
          </p>

          {surveyDone ? (
            <div
              className={`k-hero__thanks${justDone ? " is-fresh" : ""}`}
              role="status"
            >
              <span className="k-hero__thanks-tick">
                <Check size={16} />
              </span>
              <div>
                <b>{justDone ? "Thank you, your responses are in." : "Thanks for taking our survey."}</b>
                <p>
                  You're on our list. We'll be in touch the moment Kribble opens
                  near you.
                </p>
              </div>
            </div>
          ) : (
            <div className="k-hero__actions">
              <Link to="/waitlist" className="k-btn k-btn--primary">
                Join the waitlist <ArrowRight />
              </Link>
              <Link to="/survey" className="k-btn k-btn--ghost">
                Take survey
              </Link>
            </div>
          )}

          <div className="k-trust">
            <div className="k-trust__dots">
              <span />
              <span />
              <span />
            </div>
            <p>
              <b>Trusted by every parent</b> verified centres, real
              information.
            </p>
          </div>
        </div>

        <div className="k-hero__art">
          <div className="k-hero__stack">
            <div className="k-blob">
              <img src={blobImg} alt="A parent playing with her child" />
            </div>

            <div className="k-circle">
              <img src={circleImg} alt="Children at a verified daycare" />
            </div>
          </div>

          <div className="k-float-card">
            <div className="k-float-card__top">
              <span className="k-float-card__icon">
                <Check size={13} />
              </span>
              Verified
            </div>
            <p>Every centre is physically checked by our team.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
