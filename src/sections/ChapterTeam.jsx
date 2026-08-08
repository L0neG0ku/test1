import piyushImg from "../assets/piyush.jpg";
import ketanImg from "../assets/ketan.jpg";
import anandImg from "../assets/anand.jpg";

const TEAM = [
  {
    photo: piyushImg,
    name: "Piyush Chawla",
    role: "Co-founder & CEO",
    body: "Sets Kribble's direction and holds the verification standard that every centre has to clear. Works directly with daycare and preschool operators to build a network parents can rely on without checking twice.",
  },
  {
    photo: ketanImg,
    name: "Ketan Pandey",
    role: "Co-founder & CTO",
    body: "Leads product and engineering across the Kribble app and platform from centre discovery and fee comparison to secure in app payments and the developmental insights layer.",
  },
  {
    photo: anandImg,
    name: "Anand Singh",
    role: "Co-founder & CMO",
    body: "Owns growth and partnerships, bringing new cities and centres onto the platform. Spends his time with parents and operators, turning what they tell us into what we build next.",
  },
];

function ChapterTeam({ showEyebrow = true }) {
  return (
    <section className="k-section k-bg-lav-solid" id="team">
      <div className="k-shell">
        <div className="k-chapter-head" data-reveal>
          <div>
            {showEyebrow && <p className="k-eyebrow">Chapter VI · The team</p>}
            <h2 className="k-h2">
              Built by three parents-at-heart —{" "}
              <span className="k-dim">for the ones doing the school runs.</span>
            </h2>
          </div>
          <p className="k-lead">
            We're not building this for the "childcare industry." We're building
            it for the parent picking up their child at 6:30.
          </p>
        </div>

        <div className="k-team-grid" data-reveal-stagger>
          {TEAM.map((m) => (
            <article className="k-team-card" key={m.name}>
              <div className="k-team-card__photo">
                <img src={m.photo} alt={m.name} loading="lazy" decoding="async" />
              </div>
              <h3>{m.name}</h3>
              <p className="k-team-card__role">{m.role}</p>
              <p>{m.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChapterTeam;
