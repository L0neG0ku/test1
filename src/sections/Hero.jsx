import { useEffect, useState, useSyncExternalStore } from "react";
import { Link, useLocation } from "react-router-dom";
import listingShot from "../assets/peak.webp";
import exploreShot from "../assets/app/explore.webp";
import homeShot from "../assets/app/home.webp";
import rewardsShot from "../assets/app/rewards.webp";
import SearchForm from "../components/SearchForm";
import { ArrowRight, Check } from "../components/icons";
import { hasDoneSurvey } from "../lib/surveyStatus";

/* The headline's last word and the phone screen change together, so the hero
   tells the whole product story in one short loop: where they learn, where
   they play, how their day went, how they're growing. */
const SCENES = [
  { word: "learning", img: listingShot, caption: "Preschools near you, each one visited by our team" },
  { word: "playing", img: exploreShot, caption: "Dance, art, swimming and sport, close to home" },
  { word: "napping", img: homeShot, caption: "Meals, naps and moods, updated through the day" },
  { word: "growing", img: rewardsShot, caption: "A badge for every new thing they learn" },
];
const SCENE_MS = 2800;

const TICKER = ["Daycare", "Preschool", "Activities", "One-day care", "Hourly care", "After-school", "Holiday camps"];

const noSubscribe = () => () => {};

function Seal() {
  return (
    <svg className="k-seal" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <path id="k-seal-path" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
      </defs>
      <circle cx="60" cy="60" r="59" fill="#fff" />
      <g className="k-seal__ring">
        <text>
          <textPath href="#k-seal-path" textLength="282" lengthAdjust="spacing">
            Visited in person · Kribble verified ·
          </textPath>
        </text>
      </g>
      <circle cx="60" cy="60" r="23" fill="#7753ff" />
      <path d="M50 60.5l6.5 6.5 13.5-14" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Hero() {
  const location = useLocation();

  // False in the prerendered HTML and during hydration (so the first client
  // render matches it), true straight after. Browser-only state such as the
  // survey flag is read only once this is true.
  const inBrowser = useSyncExternalStore(noSubscribe, () => true, () => false);
  const justDone = inBrowser && Boolean(location.state?.surveyJustDone);
  const surveyDone = inBrowser && (justDone || hasDoneSurvey());

  const [scene, setScene] = useState({ i: 0, prev: -1 });
  const go = (i) => setScene((s) => (i === s.i ? s : { i, prev: s.i }));

  // Advance one scene at a time. Restarting the timer on every change means a
  // tap on a progress bar gets its full time too. Still for reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => {
      setScene((s) => ({ i: (s.i + 1) % SCENES.length, prev: s.i }));
    }, SCENE_MS);
    return () => clearTimeout(t);
  }, [scene.i]);

  const current = SCENES[scene.i];

  return (
    <>
      <section className="k-hero">
        <div className="k-shell k-hero__grid">
          <div className="k-hero__copy">
            <p className="k-eyebrow">Gurugram · Ages 15 months to 10 years</p>
            <h1 className="k-h1 k-hero__title">
              <span className="k-hero__line">Know where</span>
              <span className="k-hero__line">
                they're{" "}
                <span className="k-rotor">
                  {SCENES.map((s, n) => (
                    <span
                      key={s.word}
                      className={`k-rotor__word${n === scene.i ? " is-in" : ""}${n === scene.prev ? " is-out" : ""}`}
                      aria-hidden={n !== scene.i}
                    >
                      {s.word}.
                    </span>
                  ))}
                </span>
              </span>
              <span className="k-hero__line k-hero__line--ink">Before they go.</span>
            </h1>
            <p className="k-lead">
              Daycares, preschools and activities in one app. Our team visits
              every centre in person before it's listed, so you choose from
              places that have already been checked.
            </p>

            {surveyDone ? (
              <div className={`k-hero__thanks${justDone ? " is-fresh" : ""}`} role="status">
                <span className="k-hero__thanks-tick">
                  <Check size={16} />
                </span>
                <div>
                  <b>Welcome to the Kribble community.</b>
                  <p>
                    {justDone
                      ? "Your answers are in, and you're on our early access list. We'll be in touch the moment Kribble opens near you."
                      : "You're on our early access list. We'll be in touch the moment Kribble opens near you."}
                  </p>
                </div>
              </div>
            ) : (
              <div className="k-hero__actions">
                <Link to="/waitlist" className="k-btn k-btn--white">
                  Get early access <ArrowRight />
                </Link>
                <Link to="/survey" className="k-btn k-btn--outline-white">
                  Take the 2 minute survey
                </Link>
              </div>
            )}
          </div>

          <div className="k-stage">
            <span className="k-stage__ring" aria-hidden="true" />
            <div className="k-stage__device">
              <figure className="k-phone k-stage__phone" aria-hidden="true">
                <div className="k-stage__screen">
                  {SCENES.map((s, n) => (
                    <img key={s.word} src={s.img} alt="" className={n === scene.i ? "is-on" : ""} />
                  ))}
                </div>
              </figure>
              <Seal />
              <p className="k-stage__caption" key={scene.i}>
                <span>{current.word}</span>
                {current.caption}
              </p>
            </div>

            <div className="k-stage__bars" role="tablist" aria-label="What Kribble shows you">
              {SCENES.map((s, n) => (
                <button
                  key={s.word}
                  type="button"
                  role="tab"
                  aria-selected={n === scene.i}
                  aria-label={s.caption}
                  className={n === scene.i ? "is-on" : n < scene.i ? "is-done" : ""}
                  onClick={() => go(n)}
                >
                  <i key={n === scene.i ? `on-${scene.i}-${scene.prev}` : "off"} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="k-ticker" aria-hidden="true">
        <div className="k-ticker__track">
          {[...TICKER, ...TICKER].map((t, n) => (
            <span key={n}>
              {t}
              <i />
            </span>
          ))}
        </div>
      </div>

      <div className="k-shell k-search-wrap">
        <SearchForm title="What are you looking for?" />
      </div>
    </>
  );
}

export default Hero;
