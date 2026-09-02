const CARDS = [
  {
    n: "01",
    title: "Too much information. Too little clarity",
    body: "Google, Instagram, WhatsApp, reviews and word of mouth leave you with scattered information and no clear way to know what’s actually right for your child.",
  },
  {
    n: "02",
    title: "You can’t see what you’re choosing",
    body: "Is the centre safe? Is it genuine? What is the environment really like? Online information rarely tells you what you need to know before trusting someone with your child.",
  },
  {
    n: "03",
    title: "Everything happens separately",
    body: "Enquiries, visits, forms, payments, updates and communication happen across different places, making an already important decision unnecessarily stressful.",
  },
   {
    n: "04",
    title: "Finding a trusted caregiver at home is even harder",
    body: "When a parent needs someone to look after their child at home, they often rely on personal referrals, informal networks, or unstructured platforms with limited transparency around availability, experience, and trust.",
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
              Childcare is still fragmented, unpredictable,{" "}
              <span className="k-dim">and difficult to access when parents actually need it.</span>
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
