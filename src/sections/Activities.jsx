import rewardsShot from "../assets/app/rewards.webp";
import { Smile, Spark, Star, Users } from "../components/icons";

const WHY = [
  { Icon: Star, label: "Confidence" },
  { Icon: Users, label: "Friendships" },
  { Icon: Spark, label: "Focus & coordination" },
  { Icon: Smile, label: "Finding what they love" },
];

/* Grouped by age so parents see straight away what fits their child. */
const AGES = [
  {
    range: "15m to 3y",
    name: "First explorers",
    body: "Short, playful sessions that let little ones move, listen and discover, often with a parent alongside.",
    tags: ["Music & movement", "Sensory play", "Toddler swim", "Storytelling"],
  },
  {
    range: "3 to 6y",
    name: "Curious minds",
    body: "The years for trying everything. Small groups, gentle structure and plenty of making a mess.",
    tags: ["Art & craft", "Dance", "Swimming", "Phonics", "Yoga"],
  },
  {
    range: "6 to 10y",
    name: "Growing skills",
    body: "Real skills and their first sense of getting better at something, alongside friends.",
    tags: ["Football & sports", "Chess", "Coding", "Music lessons", "Martial arts", "Skating"],
  },
];

function Activities() {
  return (
    <section className="k-section k-bg-white" id="activities">
      <div className="k-shell">
        <div className="k-acts__intro">
          <div data-reveal>
            <p className="k-eyebrow">Activities</p>
            <h2 className="k-h2">
              Childhood happens outside <span className="k-accent">the classroom too.</span>
            </h2>
            <p className="k-lead">
              The hours after school are where children find what they love. A
              good activity builds things a classroom alone can't. The hard part
              is finding good ones close to home, at times that fit your week.
            </p>
          </div>

          <ul className="k-acts__why" data-reveal-stagger>
            {WHY.map(({ Icon, label }) => (
              <li key={label}>
                <Icon size={20} />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="k-ages" data-reveal-stagger>
          {AGES.map((a) => (
            <article className="k-age" key={a.range}>
              <div className="k-age__top">
                <p className="k-age__range">{a.range}</p>
                <p className="k-age__name">{a.name}</p>
              </div>
              <div className="k-age__body">
                <p>{a.body}</p>
                <ul className="k-tags">
                  {a.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="k-acts__more" data-reveal>
          <figure className="k-step__screen">
            <img src={rewardsShot} alt="Badges and achievements a child earns in the Kribble app" loading="lazy" />
          </figure>
          <div>
            <h3>Progress they can be proud of</h3>
            <p className="k-lead">
              Every class, every new skill and every badge, gathered in one
              place. Book activities on Kribble, checked the same way as every
              centre, and watch your child's journey grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activities;
