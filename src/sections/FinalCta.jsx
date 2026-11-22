import { Link } from "react-router-dom";
import family from "../assets/parents.webp";
import { ArrowRight } from "../components/icons";

function FinalCta() {
  return (
    <section className="k-section k-bg-white">
      <div className="k-shell">
        <div className="k-final" data-reveal>
          <div className="k-final__copy">
            <p className="k-eyebrow">Launching in Gurugram</p>
            <h2 className="k-h2">
              Be one of the first families <span>on Kribble.</span>
            </h2>
            <p className="k-lead">
              Join the waitlist for early access to the app and founding-member
              benefits at partner centres.
            </p>
            <div className="k-hero__actions">
              <Link to="/waitlist" className="k-btn k-btn--primary">
                Get early access <ArrowRight />
              </Link>
            </div>
            <p className="k-final__soon">Coming to Android and iOS</p>
          </div>
          <div className="k-final__photo">
            <img src={family} alt="Parents looking at a tablet with their son" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
