import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";
import ChapterTeam from "../sections/ChapterTeam";
import { ArrowRight, ShieldCheck, Chat, Heart } from "../components/icons";

const VALUES = [
  {
    Icon: ShieldCheck,
    title: "Trust before scale",
    body: "A centre only goes live on Kribble after someone from our team has actually stood inside it.",
  },
  {
    Icon: Chat,
    title: "Honest information",
    body: "Real photos, real fees, real timings. If we can't confirm it, we don't publish it.",
  },
  {
    Icon: Heart,
    title: "Calm by design",
    body: "Parenting is loud enough. Kribble is built to be quiet, quick and out of your way.",
  },
];

function AboutPage() {
  useReveal();

  return (
    <>
      <header className="k-pagehead">
        <div className="k-shell">
          <p className="k-eyebrow k-eyebrow--rule">About Kribble</p>
          <h1 className="k-h2" style={{ maxWidth: "17ch" }}>
            We started Kribble because{" "}
            <span className="k-dim">
              finding good childcare shouldn't depend on luck.
            </span>
          </h1>
        </div>
      </header>

      <section className="k-section k-bg-white">
        <div className="k-shell k-why" data-reveal>
          <div className="k-why__art">
            <div className="k-why__img">
              <img
                src="/mission.png"
                alt="A parent and child together"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div>
            <h2 className="k-h3" style={{ marginBottom: 22 }}>
              Our mission
            </h2>
            <p className="k-lead" style={{ maxWidth: "52ch" }}>
              India's childcare search runs on WhatsApp forwards and hope. We
              are building the verified alternative — a single place where every
              daycare, preschool and playschool has been physically checked, and
              where enrolling, paying and staying updated all happen in one calm
              app.
            </p>
            <p className="k-lead" style={{ maxWidth: "52ch", marginTop: 20 }}>
              We would rather list ten centres we have personally walked through
              than a thousand we have not.
            </p>

            <div className="k-hero__actions">
              <Link to="/how-it-works" className="k-btn k-btn--primary">
                See how it works <ArrowRight />
              </Link>
              <Link to="/survey" className="k-btn k-btn--ghost">
                Take the survey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="k-section k-bg-soft">
        <div className="k-shell">
          <h2 className="k-h2" style={{ maxWidth: "16ch", marginBottom: 56 }}>
            What we hold ourselves to.
          </h2>

          <div className="k-feat-grid" data-reveal-stagger>
            {VALUES.map(({ Icon, title, body }, i) => (
              <article className="k-feat-card" key={title}>
                <div className="k-feat-card__top">
                  <span className="k-icon-tile">
                    <Icon size={28} />
                  </span>
                  <span className="k-feat-card__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="k-h3">{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ChapterTeam />
      <Footer />
    </>
  );
}

export default AboutPage;
