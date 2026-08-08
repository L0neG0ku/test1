import { Heart, Sparkle, Wallet, Chat } from "../components/icons";

const CARDS = [
  {
    Icon: Heart,
    title: "Peace of mind",
    body: "Every centre verified for safety, staff and standards before it's ever shown to you.",
  },
  {
    Icon: Sparkle,
    title: "No more endless scrolling",
    body: "Trusted options in one place, curated rather than crowdsourced from strangers.",
  },
  {
    Icon: Wallet,
    title: "Simple and cashless",
    body: "Pay fees and manage admissions from your phone. No cash envelopes, ever.",
  },
  {
    Icon: Chat,
    title: "Stay in the loop",
    body: "Gentle daily updates from teachers so you're always close to your child's day.",
  },
];

function ChapterWhyParents({ showEyebrow = true }) {
  return (
    <section className="k-section k-bg-lav" id="why-parents">
      <div className="k-shell">
        <div style={{ marginBottom: "clamp(48px, 6vw, 78px)" }}>
          {showEyebrow && (
            <p className="k-eyebrow">Chapter IV · Why parents love it</p>
          )}
          <h2 className="k-h2" style={{ maxWidth: "18ch" }}>
            Warm, quiet, in the background.{" "}
            <span className="k-accent">The way parenting help should feel.</span>
          </h2>
        </div>

        <div className="k-why" data-reveal>
          <div className="k-why__art">
            <div className="k-why__img">
              <img
                src="/about-hero.jpg"
                alt="A happy day at preschool"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="k-why__note">
              <span>Built for parents</span>
              <p>
                Made by parents who have done the daycare hunt themselves and
                did not enjoy it.
              </p>
            </div>
          </div>

          <div className="k-why__cards" data-reveal-stagger>
            {CARDS.map(({ Icon, title, body }) => (
              <article className="k-mini-card" key={title}>
                <span className="k-icon-tile">
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChapterWhyParents;
