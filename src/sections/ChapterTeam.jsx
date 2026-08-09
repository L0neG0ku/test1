import piyushImg from "../assets/piyush.jpg";
import ketanImg from "../assets/ketan.jpg";
import anandImg from "../assets/anand.jpg";

const TEAM = [
  {
    photo: piyushImg,
    name: "Piyush Chawla",
    role: "Co-founder & CEO",
    body: "Entrepreneur and business operator with experience scaling multi-location service businesses and managing operations, teams and customer experience. Leads Kribble’s vision, operations and centre partnerships.",
  },
  {
    photo: ketanImg,
    name: "Ketan Pandey",
    role: "Co-founder & CTO",
    body: "AI and full-stack technology professional with experience across machine learning, product engineering and application development. Leads Kribble’s technology and product.",
  },
  {
    photo: anandImg,
    name: "Anand Singh",
    role: "Co-founder & CMO",
    body: "Growth and marketing professional with experience in brand building, partnerships and customer acquisition. Leads Kribble’s growth, brand and market expansion.",
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
              Three founders. One shared ambition:{" "}
              <span className="k-dim"> to make childcare simpler, more transparent and easier to manage.</span>
            </h2>
          </div>
          <p className="k-lead">
           We at kribble are making childcare simpler, more connected and easier to manage for families and providers alike.
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
