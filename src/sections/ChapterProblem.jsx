const CARDS = [
  {
    n: "01",
    title: "Scattered and confusing",
    body: "Information is spread across Google searches, WhatsApp groups and word of mouth you never really know what you're getting.",
  },
  {
    n: "02",
    title: "No way to know it's safe",
    body: "You can't easily check if a centre is verified or legitimate. Photos online rarely match what you see when you visit.",
  },
  {
    n: "03",
    title: "Messy after you choose",
    body: "Payments happen in cash, updates come through five different apps, and the paperwork lives in a folder somewhere.",
  },
];

function ChapterProblem({ showEyebrow = true }) {
  return (
    <section className="k-section k-bg-white" id="problem">
      <div className="k-shell">
        <div className="k-chapter-head" data-reveal>
          <div>
            {showEyebrow && <p className="k-eyebrow">Chapter I · The problem</p>}
            <h2 className="k-h2">
              Choosing where your child spends the day is a big decision{" "}
              <span className="k-dim">and it shouldn't feel like guesswork.</span>
            </h2>
          </div>
          <p className="k-lead">
            Every parent we spoke to described the same three frustrations. So
            we started there.
          </p>
        </div>

        <div className="k-prob-grid" data-reveal-stagger>
          {CARDS.map((c) => (
            <article className="k-prob-card" key={c.n}>
              <span className="k-prob-card__ghost">{c.n}</span>
              <p className="k-prob-card__num">{c.n}</p>
              <h3 className="k-h3">{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChapterProblem;
