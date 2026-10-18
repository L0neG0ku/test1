import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { metaFor } from "./routes";

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el && value != null) el.setAttribute(attr, value);
}

/** Keeps the title, description, canonical and social tags in step with the
    route during in-app navigation. The first load already has them baked into
    the prerendered HTML; this only matters after the visitor clicks around. */
export default function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = metaFor(pathname);
    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);
    if (meta.canonical) {
      setMeta('link[rel="canonical"]', "href", meta.canonical);
      setMeta('meta[property="og:url"]', "content", meta.canonical);
    }
  }, [pathname]);
}
