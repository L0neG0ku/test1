import { Search, Scales, Card, Bell } from "../components/icons";

const STEPS = [
  {
    n: "01",
    Icon: Search,
    title: "Search verified centres near you",
    body: "Discover daycares, preschools and playschools that our team has personally checked.",
  },
  {
    n: "02",
    Icon: Scales,
    title: "Compare and shortlist",
    body: "See real photos, fees, timings and safety details side by side. Save the ones you love.",
  },
  {
    n: "03",
    Icon: Card,
    title: "Enrol and pay in the app",
    body: "Handle admissions and fees securely. No more cash, cheques or paperwork chases.",
  },
  {
    n: "04",
    Icon: Bell,
    title: "Stay connected to your child's day",
    body: "Photos, updates and notes from teachers, all in one calm, tidy feed.",
  },
];

function ChapterHowItWorks({ showEyebrow = true }) {
  return (
    <section className="k-section k-bg-white" id="how-it-works">
      <div className="k-shell">
        <div style={{ marginBottom: "clamp(48px, 6vw, 80px)" }}>
          {showEyebrow && (
            <p className="k-eyebrow">Chapter III · How it works</p>
          )}
          <h2 className="k-h2">
            Four simple steps.
            <br />
            <span className="k-dim">One peaceful morning.</span>
          </h2>
        </div>

        <div className="k-steps" data-reveal-stagger>
          {STEPS.map(({ n, Icon, title, body }) => (
            <article className="k-step" key={n}>
              <div className="k-step__tile">
                <Icon size={32} />
                <span className="k-step__badge">{n}</span>
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChapterHowItWorks;
