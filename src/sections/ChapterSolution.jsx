import showcaseImg from "../assets/childcare.png";
import appShot from "../assets/peak.png";
import { ShieldCheck, Grid, Wallet } from "../components/icons";

const CARDS = [
  {
    n: "01",
    Icon: ShieldCheck,
    title: "Verified centres",
    body: "Every centre on Kribble goes through our verification process, so you can discover childcare with greater confidence.",
  },
  {
    n: "02",
    Icon: Grid,
    title: "Compare with confidence",
    body: "See the information that matters location, approach, facilities, fees, availability and more in one place. No more piecing it together from Google, Instagram and WhatsApp",
  },
  {
    n: "03",
    Icon: Wallet,
    title: "Choose, enroll & stay connected",
    body: "Enquire, book care, complete enrolment, manage payments and stay connected with your child’s centre all through Kribble.",
  },
];

function ChapterSolution({ showEyebrow = true }) {
  return (
    <section className="k-section k-bg-soft" id="solution">
      <div className="k-shell">
        <div className="k-chapter-head" data-reveal>
          <div>
            {showEyebrow && (
              <p className="k-eyebrow">Chapter II · The solution</p>
            )}
            <h2 className="k-h2">
              Kribble brings {" "}
              <span className="k-accent">discover, trust</span> and everyday childcare into one simple app.
            </h2>
          </div>
          <p className="k-lead">
            One app. Verified centres. No more chasing information across ten
            different places.
          </p>
        </div>

        <div className="k-feat-grid" data-reveal-stagger>
          {CARDS.map(({ n, Icon, title, body }) => (
            <article className="k-feat-card" key={n}>
              <div className="k-feat-card__top">
                <span className="k-icon-tile">
                  <Icon size={28} />
                </span>
                <span className="k-feat-card__num">{n}</span>
              </div>
              <h3 className="k-h3">{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>

        {/* Showcase: real photo + app preview */}
        <div className="k-showcase" data-reveal-stagger>
          <figure className="k-shot">
            <img
              src={showcaseImg}
              alt="Inside a verified Kribble preschool"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="k-shot__caption">
              <h3>Real centres. Real photos. Real information.</h3>
              <span className="k-pill">Verified by Kribble</span>
            </figcaption>
          </figure>

          <div className="k-phone">
            {/* intrinsic size keeps the bezel from collapsing before the
                lazy-loaded screenshot arrives */}
            <img
              src={appShot}
              alt="The Kribble app showing a verified daycare listing"
              width="409"
              height="881"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChapterSolution;
