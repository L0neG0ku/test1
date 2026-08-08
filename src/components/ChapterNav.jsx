import { NavLink } from "react-router-dom";

const CHAPTERS = [
  { to: "/problem", label: "I · Problem" },
  { to: "/solution", label: "II · Solution" },
  { to: "/why-kribble", label: "Why Kribble" },
  { to: "/how-it-works", label: "III · How it works" },
  { to: "/why-parents", label: "IV · Why parents love it" },
  { to: "/developmental-story", label: "From Day One" },
  { to: "/what-we-cover", label: "V · What we cover" },
  { to: "/team", label: "VI · Team" },
  { to: "/faq", label: "FAQ" },
];

/** Header shown on each standalone chapter page. */
function ChapterNav({ eyebrow, title }) {
  return (
    <header className="k-pagehead">
      <div className="k-shell">
        <p className="k-eyebrow k-eyebrow--rule">{eyebrow}</p>
        <h1 className="k-h2" style={{ maxWidth: "18ch" }}>
          {title}
        </h1>

        <nav className="k-pagenav">
          {CHAPTERS.map((c) => (
            <NavLink
              key={c.to}
              to={c.to}
              className={({ isActive }) => `k-chip ${isActive ? "is-active" : ""}`}
            >
              {c.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default ChapterNav;
