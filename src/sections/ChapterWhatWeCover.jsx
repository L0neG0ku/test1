import { Link } from "react-router-dom";
import { ArrowRight } from "../components/icons";

const WORDS = ["Daycares", "Preschools", "Playschools", "After-school care"];

function ChapterWhatWeCover({ showEyebrow = true }) {
  return (
    <section className="k-section k-bg-white" id="what-we-cover">
      <div className="k-shell">
        {showEyebrow && (
          <p className="k-eyebrow">Chapter V · What we cover</p>
        )}
        <h2 className="k-h2" style={{ maxWidth: "16ch" }}>
          Verified childcare for every stage{" "}
          <span className="k-dim">of your little one's early years.</span>
        </h2>
      </div>

      <div className="k-marquee" aria-hidden="true">
        <div className="k-marquee__track">
          {[0, 1].map((copy) => (
            <div style={{ display: "flex" }} key={copy}>
              {WORDS.map((w) => (
                <span className="k-marquee__item" key={w + copy}>
                  {w}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="k-shell">
        <p className="k-lead" style={{ maxWidth: "54ch" }}>
          From your baby's first daycare to their first playschool morning
          Kribble covers the full early-years journey, with the same
          verification standard at every stage.
        </p>

        <div className="k-cta" data-reveal style={{ marginTop: "clamp(40px, 5vw, 64px)" }}>
          <div>
            <h3>Help us decide what we build next.</h3>
            <p>
              We are still early. Two minutes of your answers shapes what
              Kribble becomes for parents like you.
            </p>
          </div>
          <Link to="/survey" className="k-btn k-btn--primary">
            Take the survey <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ChapterWhatWeCover;
