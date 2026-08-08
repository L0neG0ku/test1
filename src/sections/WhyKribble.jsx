import {
  GraduationCap,
  Calendar,
  ShieldCheck,
  Compare,
  PercentBadge,
  Lock,
  Plane,
  Brain,
} from "../components/icons";

const CARDS = [
  {
    Icon: GraduationCap,
    title: "Every plan, one app",
    body: "Preschool admissions, monthly daycare, half-day plans, after-school care and holiday camps all in one place.",
  },
  {
    Icon: Calendar,
    usp: true,
    title: "One-Day Daycare",
    body: "Our exclusive convenience feature allows you to book verified childcare for a single day, whenever life demands it.",
  },
  {
    Icon: ShieldCheck,
    title: "Verified childcare centres",
    body: "Every daycare, preschool and playschool is physically checked by our team before it appears on Kribble.",
  },
  {
    Icon: Compare,
    title: "Compare fees & plans",
    body: "See admission, registration, monthly, quarterly, half-yearly and annual plans side-by-side before you choose.",
  },
  {
    Icon: PercentBadge,
    title: "Exclusive member discounts",
    body: "Save on enrolment fees, activity packs and monthly plans at partner centres across the network.",
  },
  {
    Icon: Lock,
    title: "Secure in-app payments",
    body: "Pay any plan admission, monthly, one-day safely from your phone. Receipts and reminders included.",
  },
  {
    Icon: Plane,
    title: "Childcare while travelling",
    body: "Find verified daycare in the cities you visit so travel days stay easy.",
  },
  {
    Icon: Brain,
    title: "Grow with your child",
    body: "From Day One to primary school AI-powered developmental insights follow your child's whole journey.",
  },
];

function WhyKribble({ showEyebrow = true }) {
  return (
    <section className="k-section k-bg-soft" id="why-kribble">
      <div className="k-shell">
        <div className="k-chapter-head" data-reveal>
          <div>
            {showEyebrow && <p className="k-eyebrow">Why Kribble</p>}
            <h2 className="k-h2">
              The complete childcare marketplace,{" "}
              <span className="k-em">in one calm app.</span>
            </h2>
          </div>
          <p className="k-lead">
            Whether you need childcare for a single day or a full academic year,
            Kribble helps you discover, compare and book with confidence.
          </p>
        </div>

        <div className="k-market-grid" data-reveal-stagger>
          {CARDS.map(({ Icon, title, body, usp }) => (
            <article
              className={`k-market-card ${usp ? "k-market-card--usp" : ""}`}
              key={title}
            >
              <span className="k-icon-tile">
                <Icon size={22} />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyKribble;
