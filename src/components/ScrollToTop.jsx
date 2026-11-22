import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** New pages start at the top. Links like /#activities scroll to that section,
    allowing for the sticky navbar. */
function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const scrollToTarget = (behavior) => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!el) return;
      const navH = document.querySelector(".k-nav")?.offsetHeight || 0;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH, behavior });
    };
    // Wait a frame so the target page has rendered, then correct once more in
    // case images above the section were still loading.
    const id = requestAnimationFrame(() => scrollToTarget("smooth"));
    const again = setTimeout(() => scrollToTarget("instant"), 900);
    return () => {
      cancelAnimationFrame(id);
      clearTimeout(again);
    };
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToTop;
