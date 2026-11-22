import { useEffect, useRef } from "react";

/* Figures from the October 2026 pitch deck. Update here as they grow. */
const FACTS = [
  { n: 50, suffix: "+", label: "childcare centres visited in person by our team" },
  { n: 400, suffix: "+", label: "Gurugram parents told us what they need" },
  { n: 1, suffix: " app", label: "from first daycare to after-school activities" },
];

/* The real figures are in the HTML (for search engines and no-JS readers);
   in the browser they count up from zero the first time they scroll into view. */
function Proof() {
  const wrap = useRef(null);

  useEffect(() => {
    const root = wrap.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const nodes = [...root.querySelectorAll("[data-count]")];
    let frame;

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / 1400);
        const eased = 1 - Math.pow(1 - t, 3);
        nodes.forEach((el) => {
          el.textContent = Math.round(Number(el.dataset.count) * eased) + el.dataset.suffix;
        });
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        run();
      },
      { threshold: 0.4 }
    );
    io.observe(root);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="k-shell">
      <div className="k-proof" ref={wrap}>
        {FACTS.map((f) => (
          <div key={f.label}>
            <b data-count={f.n} data-suffix={f.suffix}>
              {f.n}
              {f.suffix}
            </b>
            <span>{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proof;
