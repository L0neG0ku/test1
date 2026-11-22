import { useSyncExternalStore } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import { ArrowRight } from "../components/icons";
import { AGE_BANDS, CARE_TYPES, labelFor } from "../data/search";
import useReveal from "../hooks/useReveal";

const noSubscribe = () => () => {};

const WHAT = {
  daycare: "daycares",
  preschool: "preschools",
  activities: "activities",
  "one-day": "centres offering one-day care",
};

/* Search lives here. Listings arrive with the app, so for now every search
   ends in an honest empty state that turns the visit into a waitlist signup. */
function ExplorePage() {
  useReveal();
  const [params] = useSearchParams();

  // The prerendered page has no query string, so the first client render
  // ignores it too (matching the HTML), then remounts the form with it.
  const inBrowser = useSyncExternalStore(noSubscribe, () => true, () => false);
  const query = inBrowser
    ? { type: params.get("type") || "", age: params.get("age") || "", area: params.get("area") || "" }
    : { type: "", age: "", area: "" };

  const chips = [labelFor(CARE_TYPES, query.type), labelFor(AGE_BANDS, query.age), query.area].filter(Boolean);
  const what = WHAT[query.type] || "daycares, preschools and activities";

  return (
    <>
      <header className="k-pagehead">
        <div className="k-shell">
          <p className="k-eyebrow">Explore</p>
          <h1 className="k-h2">Daycares, preschools & activities in Gurugram</h1>
          <div className="k-explore__bar">
            <SearchForm key={inBrowser ? "client" : "server"} initial={query} title="Search" />
          </div>
        </div>
      </header>

      <section className="k-section k-bg-white">
        <div className="k-shell">
          <div className="k-results" data-reveal>
            <div>
              {chips.length > 0 && (
                <p className="k-results__query">
                  {chips.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </p>
              )}
              <h2>Listings open with the app</h2>
              <p>
                Our team is visiting {what} across Gurugram right now, and each one
                is checked in person before it's listed. Join the waitlist and
                we'll tell you as soon as they go live near you.
              </p>
              <Link to="/waitlist" className="k-btn k-btn--primary">
                Notify me <ArrowRight />
              </Link>
            </div>

            <div className="k-results__ghosts" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <div className="k-ghost" key={i}>
                  <i />
                  <div>
                    <b />
                    <em />
                    <em />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ExplorePage;
