import { Link } from "react-router-dom";
import blobImg from "../assets/parent.jpeg";
import circleImg from "../assets/daycare.jpeg";
import { ArrowRight, Check } from "../components/icons";

function Hero() {
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
          Discover trusted childcare centres nearby or book an on-demand nanny for your home. 
          Stay connected with updates and access your child growth analytics in one App
          </p>

          <div className="k-hero__actions">
            <Link to="/waitlist" className="k-btn k-btn--primary">
              Join the waitlist <ArrowRight />
            </Link>
            <Link to="/survey" className="k-btn k-btn--ghost">
              Take survey
            </Link>
          </div>

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
