import { LineChart, Brain, Sparkle } from "../components/icons";

const FEATURES = [
  {
    Icon: LineChart,
    title: "Track milestones",
    body: "A gentle timeline of every step, word and skill.",
  },
  {
    Icon: Brain,
    title: "AI powered insights",
    body: "Understand strengths and areas to grow, longitudinally.",
  },
  {
    Icon: Sparkle,
    title: "From Day One",
    body: "A complete developmental history, all the way to primary school.",
  },
];

const BARS = [30, 36, 41, 46, 54, 60, 67, 73, 80, 86, 93, 100];

const STATS = [
  { label: "Language", tag: "Advanced" },
  { label: "Motor", tag: "On track" },
  { label: "Social", tag: "Excelling" },
];

function DevelopmentalStory({ showEyebrow = true }) {
  return (
    <section className="k-section k-bg-white" id="developmental-story">
      <div className="k-shell">
        <div className="k-devstory" data-reveal>
          <div className="k-devstory__grid">
            <div>
              {showEyebrow && (
                <p className="k-eyebrow" style={{ color: "#b39dff" }}>
                  Coming to Kribble
                </p>
              )}
              <h2 className="k-h2">
                A developmental story, <span className="k-em">from Day One.</span>
              </h2>

              <p className="k-devstory__intro">
                Kribble will build a longitudinal profile of your child's early
                years, combining teacher notes, milestone tracking and AI
                insights to help you make better informed parenting decisions,
                all the way to primary school.
              </p>

              <div>
                {FEATURES.map(({ Icon, title, body }) => (
                  <div className="k-devfeat" key={title}>
                    <span className="k-devfeat__icon">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h4>{title}</h4>
                      <p>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustrative report card */}
            <div className="k-report" aria-hidden="true">
              <div className="k-report__head">
                <div>
                  <p className="k-report__who">
                    Aanya · 3y 4m <span className="k-report__example">Example</span>
                  </p>
                  <h3>Developmental Journey</h3>
                </div>
                <span className="k-report__spark">
                  <Sparkle size={20} />
                </span>
              </div>

              <div className="k-report__chart">
                {BARS.map((h, i) => (
                  <span
                    className="k-report__bar"
                    key={i}
                    style={{ height: `${h}%`, animationDelay: `${i * 55}ms` }}
                  />
                ))}
              </div>

              <div className="k-report__stats">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <span>{s.label}</span>
                    <em className="k-report__tag" style={{ fontStyle: "normal" }}>
                      {s.tag}
                    </em>
                  </div>
                ))}
              </div>

              <div className="k-report__insight">
                <span>AI Insight</span>
                <p>
                  Aanya has grown her vocabulary 32% this term. Try more
                  open-ended story time to build on this momentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevelopmentalStory;
