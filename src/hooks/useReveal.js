import { useEffect } from "react";

const MARGIN = 120; // start the fade slightly before the element is fully in view

/**
 * Fades sections in as they scroll into view.
 *
 * Any element carrying `data-reveal` or `data-reveal-stagger` gets an
 * `is-visible` class once it reaches the viewport.
 *
 * Because hidden content is far worse than un-animated content, this is
 * deliberately belt-and-braces: an IntersectionObserver does the work, a
 * passive scroll/resize listener backs it up, and a timer sweeps anything
 * still unrevealed. If any one of those never fires, the others still show
 * the content.
 */
export default function useReveal(deps = []) {
  useEffect(() => {
    const selector =
      "[data-reveal]:not(.is-visible), [data-reveal-stagger]:not(.is-visible)";
    let nodes = [...document.querySelectorAll(selector)];
    if (!nodes.length) return;

    const show = (el) => {
      el.classList.add("is-visible");
      if (io) io.unobserve(el);
    };

    const revealAll = () => nodes.forEach(show);

    // No observer support — show everything rather than risk a blank page.
    if (typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && show(e.target));
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    nodes.forEach((n) => io.observe(n));

    // Backup: plain geometry check. Scroll events fire even in situations
    // where observer callbacks or animation frames do not.
    const sweep = () => {
      nodes = nodes.filter((n) => !n.classList.contains("is-visible"));
      if (!nodes.length) {
        window.removeEventListener("scroll", sweep);
        window.removeEventListener("resize", sweep);
        return;
      }
      nodes.forEach((n) => {
        if (n.getBoundingClientRect().top < window.innerHeight - MARGIN) show(n);
      });
    };

    window.addEventListener("scroll", sweep, { passive: true });
    window.addEventListener("resize", sweep, { passive: true });

    // Reveal whatever is already on screen at mount, then sweep once more in
    // case the first pass ran before layout settled.
    const t1 = setTimeout(sweep, 0);
    const t2 = setTimeout(sweep, 600);

    return () => {
      io.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("scroll", sweep);
      window.removeEventListener("resize", sweep);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
