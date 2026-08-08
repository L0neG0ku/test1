import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Routing between pages should start at the top, not wherever the last page was. */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
