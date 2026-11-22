import exploreShot from "../assets/app/explore.webp";
import listingShot from "../assets/app/listing.webp";
import homeShot from "../assets/app/home.webp";
import chatShot from "../assets/app/chat.webp";

/* Four steps, each shown on a real screen from the app. */
const STEPS = [
  {
    title: "Discover",
    body: "Verified daycares, preschools and activities near home or work, filtered by your child's age.",
    img: exploreShot,
    alt: "The Kribble explore screen listing nearby daycares and activities",
  },
  {
    title: "Compare",
    body: "Real photos, timings, facilities and every fee side by side. No calling around for prices.",
    img: listingShot,
    alt: "A centre page in the Kribble app with photos, facilities and fees",
  },
  {
    title: "Enrol in one tap",
    body: "Fill in your child's details once. Admission forms, payments and receipts happen in the app.",
    img: homeShot,
    alt: "The Kribble home screen tracking a child's meals, sleep and activities",
  },
  {
    title: "Stay close",
    body: "Photos, meals, naps and notes from teachers through the day, in one feed.",
    img: chatShot,
    alt: "A chat with a teacher in the Kribble app",
  },
];

function HowItWorks() {
  return (
    <section className="k-section k-bg-soft" id="how-it-works">
      <div className="k-shell">
        <div className="k-head k-head--center" data-reveal>
          <p className="k-eyebrow">How it works</p>
          <h2 className="k-h2">
            Fewer calls. Fewer forms. <span className="k-accent">More of your day back.</span>
          </h2>
        </div>

        <div className="k-steps" data-reveal-stagger>
          {STEPS.map((s, i) => (
            <article className="k-step" key={s.title}>
              <span className="k-step__n">{i + 1}</span>
              <figure className="k-step__screen">
                <img src={s.img} alt={s.alt} loading="lazy" />
              </figure>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
