import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";
import { ArrowRight } from "../components/icons";
import piyush from "../assets/piyush.webp";
import ishan from "../assets/ishan.webp";
import ketan from "../assets/ketan.jpg";
import anand from "../assets/anand.jpg";

/* Roles and backgrounds from the October 2026 pitch deck. */
const TEAM = [
  {
    name: "Piyush Chawla",
    role: "Co-founder & CEO",
    img: piyush,
    body: "Leads vision, centre partnerships and operations. Grew a family hospitality business tenfold.",
  },
  {
    name: "Ishan Mahendra",
    role: "Co-founder & CGO",
    img: ishan,
    body: "Leads how parents find Kribble. Scaled growth at Pocket FM, OfBusiness and Reckitt.",
  },
  {
    name: "Ketan Pandey",
    role: "Co-founder & CTO",
    img: ketan,
    body: "Leads product, engineering and child-safety tech. Built a school bus tracking app.",
  },
  {
    name: "Anand Singh",
    role: "Co-founder & CMO",
    img: anand,
    body: "Leads brand, content and the Kribble parent community.",
  },
];

function AboutPage() {
  useReveal();

  return (
    <>
      <header className="k-pagehead">
        <div className="k-shell">
          <p className="k-eyebrow">About Kribble</p>
          <h1 className="k-h2" style={{ maxWidth: "18ch" }}>
            Childcare, simplified. Starting in Gurugram.
          </h1>
        </div>
      </header>

      <section className="k-section k-bg-white">
        <div className="k-shell k-story" data-reveal>
          <div>
            <p>
              Choosing where your child spends the day is one of the biggest
              decisions a parent makes. Most of us still make it from word of
              mouth, scattered listings and a lot of phone calls.
            </p>
          </div>
          <div>
            <p>
              We spoke to more than 400 parents and visited over 50 centres in
              Gurugram before building the app. The same things came up every
              time: no way to know what a centre is really like before visiting,
              fees that only appear after a call, paperwork for every enrolment,
              and nothing for the days plans fall apart.
            </p>
            <p>
              Kribble brings it into one app. Centres our team has visited in
              person, every fee up front, enrolment in a tap, one-day care when
              you need it, and activities as your child grows, from 15 months to
              10 years.
            </p>
          </div>
        </div>
      </section>

      <section className="k-section k-bg-soft">
        <div className="k-shell">
          <div className="k-head k-head--center" data-reveal>
            <p className="k-eyebrow">The team</p>
            <h2 className="k-h2">The people building Kribble</h2>
          </div>

          <div className="k-team" data-reveal-stagger>
            {TEAM.map((m) => (
              <article className="k-member" key={m.name}>
                <div className="k-member__photo">
                  <img src={m.img} alt={m.name} loading="lazy" />
                </div>
                <h3>{m.name}</h3>
                <p className="k-member__role">{m.role}</p>
                <p>{m.body}</p>
              </article>
            ))}
          </div>

          <div className="k-hero__actions" style={{ justifyContent: "center", marginTop: 56 }}>
            <Link to="/waitlist" className="k-btn k-btn--primary">
              Get early access <ArrowRight />
            </Link>
            <Link to="/contact" className="k-btn k-btn--ghost">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;
