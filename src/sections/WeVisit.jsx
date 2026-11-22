import photo from "../assets/daycare.webp";
import { Camera, Check, ShieldCheck, Users, Utensils } from "../components/icons";

const CHECKS = [
  {
    Icon: ShieldCheck,
    title: "Safety & CCTV",
    body: "Entry and exit, play areas, emergency plans, and whether parents can see the CCTV.",
  },
  {
    Icon: Users,
    title: "Staff & caregivers",
    body: "Who looks after the children, their background checks and how many children each adult has.",
  },
  {
    Icon: Utensils,
    title: "Hygiene & food",
    body: "Kitchens, washrooms, nap rooms and what's on the plate each day.",
  },
  {
    Icon: Camera,
    title: "Real photos, real fees",
    body: "We photograph the rooms ourselves and list every fee up front, from admission to monthly.",
  },
];

function WeVisit() {
  return (
    <section className="k-section k-bg-white" id="verified">
      <div className="k-shell k-visit">
        <div className="k-visit__photo" data-reveal>
          <img src={photo} alt="Children at a table in a bright daycare classroom" loading="lazy" />
          <p className="k-visit__stamp">
            <span>
              <Check size={18} />
            </span>
            <span>
              <b>Kribble Verified</b> means our team has been inside.
            </span>
          </p>
        </div>

        <div>
          <div data-reveal>
            <p className="k-eyebrow">Checked in person</p>
            <h2 className="k-h2">
              We visit. <span className="k-accent">You decide.</span>
            </h2>
            <p className="k-lead" style={{ marginTop: 20 }}>
              Reviews tell you what other parents felt. We go and look. Before any
              centre appears on Kribble, someone from our team walks through it.
            </p>
          </div>

          <div className="k-checks" data-reveal-stagger>
            {CHECKS.map(({ Icon, title, body }) => (
              <article className="k-card" key={title}>
                <span className="k-card__icon">
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>

          <p className="k-note" data-reveal>
            Then go and see it for yourself. Kribble helps you book the visit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WeVisit;
