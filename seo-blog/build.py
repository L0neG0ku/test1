#!/usr/bin/env python3
"""
Kribble blog builder. Python 3.8+, standard library only. No installs needed.

  python3 build.py            build posts whose publish date has arrived
  python3 build.py --all      build every post (local preview only, never deploy this)
  python3 build.py --serve    build, then preview at http://localhost:8000/blog/

Output goes to ./dist. Copy dist/ into the root of the site (see CLAUDE.md).
"""
import datetime as dt
import html
import json
import os
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
POSTS = ROOT / "content" / "posts"
STATIC = ROOT / "static"
DIST = ROOT / "dist"
CFG_PATH = ROOT / "site.json"

CFG = json.loads(CFG_PATH.read_text(encoding="utf-8"))
SITE = CFG["site_url"].rstrip("/")
BLOG = "/" + CFG["blog_path"].strip("/") + "/"
TODAY = dt.date.today()
WARNINGS = []


def warn(msg):
    WARNINGS.append(msg)


def esc(s):
    return html.escape(str(s), quote=True)


# ---------------------------------------------------------------- front matter
def parse_post(path):
    raw = path.read_text(encoding="utf-8")
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", raw, re.S)
    if not m:
        sys.exit(f"ERROR: {path.name} has no front matter")
    meta = {}
    for line in m.group(1).splitlines():
        if not line.strip() or line.strip().startswith("#"):
            continue
        k, _, v = line.partition(":")
        meta[k.strip()] = v.strip().strip('"')
    for req in ("title", "seo_title", "description", "slug", "category", "keyword", "day"):
        if req not in meta:
            sys.exit(f"ERROR: {path.name} is missing '{req}'")
    meta["day"] = int(meta["day"])
    meta["tags"] = [t.strip() for t in meta.get("tags", "").split(",") if t.strip()]
    meta["related"] = [t.strip() for t in meta.get("related", "").split(",") if t.strip()]
    meta["body_md"] = m.group(2).strip() + "\n"
    meta["file"] = path.name
    return meta


# ---------------------------------------------------------------- markdown
def slugify(s):
    s = re.sub(r"<[^>]+>", "", s)
    s = re.sub(r"[^a-z0-9\s-]", "", s.lower())
    return re.sub(r"[\s-]+", "-", s).strip("-")


def inline(t):
    codes = []

    def keep(m):
        codes.append(m.group(1))
        return f"\x00{len(codes) - 1}\x00"

    t = re.sub(r"`([^`]+)`", keep, t)
    t = esc(t).replace("&#x27;", "'")

    def link(m):
        text, url = m.group(1), html.unescape(m.group(2))
        ext = url.startswith("http") and not url.startswith(SITE)
        attrs = ' rel="noopener" target="_blank"' if ext else ""
        return f'<a href="{esc(url)}"{attrs}>{text}</a>'

    t = re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)", link, t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", t)
    t = re.sub(r"\x00(\d+)\x00", lambda m: f"<code>{esc(codes[int(m.group(1))])}</code>", t)
    return t


def md_to_html(md):
    lines = md.split("\n")
    out, toc, i = [], [], 0
    para = []

    def flush():
        if para:
            out.append("<p>" + inline(" ".join(para)) + "</p>")
            para.clear()

    while i < len(lines):
        ln = lines[i]
        s = ln.strip()
        if not s:
            flush(); i += 1; continue
        if s.startswith("```"):
            flush()
            lang = s[3:].strip()
            buf = []
            i += 1
            while i < len(lines) and not lines[i].strip().startswith("```"):
                buf.append(lines[i]); i += 1
            i += 1
            cls = f' class="lang-{esc(lang)}"' if lang else ""
            out.append(f"<pre><code{cls}>{esc(chr(10).join(buf))}</code></pre>")
            continue
        h = re.match(r"^(#{2,4})\s+(.*)$", s)
        if h:
            flush()
            lvl, txt = len(h.group(1)), h.group(2).strip()
            hid = slugify(txt)
            if lvl == 2:
                toc.append((hid, txt))
            out.append(f'<h{lvl} id="{hid}">{inline(txt)}</h{lvl}>')
            i += 1; continue
        if s.startswith("|") and i + 1 < len(lines) and re.match(r"^\|?\s*:?-{2,}", lines[i + 1].strip()):
            flush()
            head = [c.strip() for c in s.strip("|").split("|")]
            i += 2
            rows = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                rows.append([c.strip() for c in lines[i].strip().strip("|").split("|")]); i += 1
            th = "".join(f"<th>{inline(c)}</th>" for c in head)
            tb = "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>" for r in rows)
            out.append(f'<div class="table"><table><thead><tr>{th}</tr></thead><tbody>{tb}</tbody></table></div>')
            continue
        if s.startswith(">"):
            flush()
            buf = []
            while i < len(lines) and lines[i].strip().startswith(">"):
                buf.append(lines[i].strip()[1:].strip()); i += 1
            out.append("<blockquote><p>" + inline(" ".join(buf)) + "</p></blockquote>")
            continue
        if re.match(r"^([-*]|\d+\.)\s+", s):
            flush()
            ordered = bool(re.match(r"^\d+\.", s))
            tag = "ol" if ordered else "ul"
            items = []
            while i < len(lines) and re.match(r"^([-*]|\d+\.)\s+", lines[i].strip()):
                items.append(re.sub(r"^([-*]|\d+\.)\s+", "", lines[i].strip())); i += 1
                while i < len(lines) and lines[i].startswith("  ") and lines[i].strip() and not re.match(r"^([-*]|\d+\.)\s+", lines[i].strip()):
                    items[-1] += " " + lines[i].strip(); i += 1
            out.append(f"<{tag}>" + "".join(f"<li>{inline(x)}</li>" for x in items) + f"</{tag}>")
            continue
        para.append(s)
        i += 1
    flush()
    return "\n".join(out), toc


def plain_text(md):
    t = re.sub(r"```.*?```", "", md, flags=re.S)
    t = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", t)
    t = re.sub(r"[#>*`|]", " ", t)
    return re.sub(r"\s+", " ", t).strip()


def extract_faq(md):
    m = re.search(r"^## Frequently asked questions\s*$(.*?)(?=^## |\Z)", md, re.M | re.S)
    if not m:
        return []
    faqs = []
    for q in re.finditer(r"^### (.+?)\n(.*?)(?=^### |\Z)", m.group(1), re.M | re.S):
        ans = plain_text(q.group(2))
        if ans:
            faqs.append((q.group(1).strip(), ans))
    return faqs


# ---------------------------------------------------------------- templates
def head(title, desc, url, og_img, og_type="website", extra=""):
    tw = CFG.get("twitter_handle") or ""
    tw_tag = f'<meta name="twitter:site" content="{esc(tw)}">' if tw else ""
    return f"""<!doctype html>
<html lang="{CFG.get('lang', 'en')}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<link rel="canonical" href="{esc(url)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="{CFG.get('theme_color', '#6C47F0')}">
<meta property="og:site_name" content="{esc(CFG['product_name'])}">
<meta property="og:type" content="{og_type}">
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:url" content="{esc(url)}">
<meta property="og:image" content="{esc(og_img)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{esc(title)}">
<meta name="twitter:description" content="{esc(desc)}">
<meta name="twitter:image" content="{esc(og_img)}">
{tw_tag}
<link rel="alternate" type="application/rss+xml" title="{esc(CFG['product_name'])} blog" href="{SITE}{BLOG}rss.xml">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/favicon.png">
<link rel="stylesheet" href="{BLOG}blog.css">
{extra}
</head>
<body>
<header class="top"><div class="wrap">
<a class="brand" href="/"><img src="/logo-wordmark.png" alt="{esc(CFG['product_name'])}" width="96" height="30"></a>
<nav><a href="{BLOG}">Blog</a><a href="{BLOG}category/gurgaon-guides/">Gurgaon guides</a><a href="https://centres.kribblecare.com/">For Centres</a>
<a class="btn" href="{esc(CFG['cta_url'])}">{esc(CFG['cta_label'])}</a></nav>
</div></header>
"""


def foot():
    yr = TODAY.year
    return f"""<footer class="bottom"><div class="wrap">
<p><strong>{esc(CFG['product_name'])}</strong>: {esc(CFG['tagline'])}</p>
<p><a href="/">Home</a> · <a href="{BLOG}">Blog</a> · <a href="{BLOG}rss.xml">RSS</a> · <a href="/waitlist">Join the waitlist</a> · <a href="/contact">Contact</a></p>
<p class="muted">© {yr} {esc(CFG['company'])}</p>
</div></footer>
</body></html>
"""


def jsonld(obj):
    return '<script type="application/ld+json">' + json.dumps(obj, ensure_ascii=False).replace("</", "<\\/") + "</script>"


def org():
    return {"@type": "Organization", "name": CFG["company"], "url": SITE + "/",
            "logo": SITE + BLOG + "og/logo.png"}


def cta_box():
    return f"""<aside class="cta"><p class="kicker">{esc(CFG['product_name'])}</p>
<p class="cta-h">{esc(CFG['cta_heading'])}</p>
<p>{esc(CFG['cta_body'])}</p>
<a class="btn" href="{esc(CFG['cta_url'])}">{esc(CFG['cta_label'])}</a></aside>"""


def fmt_date(d):
    return d.strftime("%-d %B %Y") if os.name != "nt" else d.strftime("%d %B %Y").lstrip("0")


# ---------------------------------------------------------------- build
def build(include_all=False):
    if not CFG.get("launch_date"):
        CFG["launch_date"] = TODAY.isoformat()
        CFG_PATH.write_text(json.dumps(CFG, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        print(f"launch_date was empty: set it to {TODAY} in site.json (keep it fixed from now on)")
    launch = dt.date.fromisoformat(CFG["launch_date"])

    posts = [parse_post(p) for p in sorted(POSTS.glob("*.md"))]
    slugs = [p["slug"] for p in posts]
    dupes = {s for s in slugs if slugs.count(s) > 1}
    if dupes:
        sys.exit(f"ERROR: duplicate slugs {dupes}")
    for p in posts:
        p["date"] = launch + dt.timedelta(days=p["day"])
        p["updated_date"] = dt.date.fromisoformat(p["updated"]) if p.get("updated") else p["date"]
    live = [p for p in posts if include_all or p["date"] <= TODAY]
    live.sort(key=lambda p: p["file"])
    live.sort(key=lambda p: p["date"], reverse=True)
    live_slugs = {p["slug"] for p in live}
    by_slug = {p["slug"]: p for p in live}

    if DIST.exists():
        shutil.rmtree(DIST)
    (DIST / BLOG.strip("/")).mkdir(parents=True)
    bdir = DIST / BLOG.strip("/")
    shutil.copy(STATIC / "blog.css", bdir / "blog.css")
    if (STATIC / "og").exists():
        shutil.copytree(STATIC / "og", bdir / "og")

    all_slugs = set(slugs)
    seen_titles, seen_desc = {}, {}
    for p in live:
        # ---------- checks
        if len(p["seo_title"]) > 60:
            warn(f"{p['slug']}: seo_title is {len(p['seo_title'])} chars (aim for 60 or fewer)")
        if not 110 <= len(p["description"]) <= 160:
            warn(f"{p['slug']}: description is {len(p['description'])} chars (aim for 110-160)")
        if p["seo_title"] in seen_titles:
            warn(f"{p['slug']}: same seo_title as {seen_titles[p['seo_title']]}")
        seen_titles[p["seo_title"]] = p["slug"]
        if p["description"] in seen_desc:
            warn(f"{p['slug']}: same description as {seen_desc[p['description']]}")
        seen_desc[p["description"]] = p["slug"]
        internal = re.findall(r"\]\((" + re.escape(BLOG) + r"[^)#\s]*)", p["body_md"])
        for href in internal:
            target = href[len(BLOG):].strip("/")
            if target and target not in all_slugs and not target.startswith("category/"):
                warn(f"{p['slug']}: broken internal link {href}")
            elif target and target in all_slugs and target not in live_slugs:
                p["body_md"] = re.sub(r"\[([^\]]+)\]\(" + re.escape(href) + r"\)", r"\1", p["body_md"])
        if len(set(internal)) < 3:
            warn(f"{p['slug']}: only {len(set(internal))} internal links (aim for 3+)")
        if p["keyword"].lower().split()[0] not in (p["title"] + p["description"]).lower():
            warn(f"{p['slug']}: primary keyword '{p['keyword']}' not obviously in title/description")
        for r in p["related"]:
            if r not in all_slugs:
                warn(f"{p['slug']}: related slug '{r}' does not exist")

    for p in live:
        body, toc = md_to_html(p["body_md"])
        words = len(plain_text(p["body_md"]).split())
        p["words"] = words
        mins = max(1, round(words / 230))
        url = f"{SITE}{BLOG}{p['slug']}/"
        og_rel = f"og/{p['slug']}.png" if (STATIC / "og" / f"{p['slug']}.png").exists() else "og/default.png"
        og = f"{SITE}{BLOG}{og_rel}"
        cat_slug = slugify(p["category"])
        faqs = extract_faq(p["body_md"])
        graph = [
            {"@type": "BlogPosting", "@id": url + "#article", "headline": p["title"][:110],
             "description": p["description"], "image": og, "url": url,
             "mainEntityOfPage": url, "datePublished": p["date"].isoformat(),
             "dateModified": p["updated_date"].isoformat(), "wordCount": words,
             "keywords": ", ".join([p["keyword"]] + p["tags"]), "articleSection": p["category"],
             "inLanguage": CFG.get("lang", "en"),
             "author": {"@type": "Organization", "name": CFG["author_name"], "url": SITE + "/"},
             "publisher": org(),
             "about": {"@type": "Organization", "name": CFG["product_name"], "url": SITE + "/",
                       "areaServed": {"@type": "City", "name": "Gurugram"}}},
            {"@type": "BreadcrumbList", "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/"},
                {"@type": "ListItem", "position": 2, "name": "Blog", "item": SITE + BLOG},
                {"@type": "ListItem", "position": 3, "name": p["category"], "item": f"{SITE}{BLOG}category/{cat_slug}/"},
                {"@type": "ListItem", "position": 4, "name": p["title"], "item": url}]},
        ]
        if faqs:
            graph.append({"@type": "FAQPage", "mainEntity": [
                {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faqs]})
        ld = jsonld({"@context": "https://schema.org", "@graph": graph})

        rel = [by_slug[r] for r in p["related"] if r in by_slug]
        for q in live:
            if len(rel) >= 3:
                break
            if q["slug"] != p["slug"] and q["category"] == p["category"] and q not in rel:
                rel.append(q)
        rel_html = "".join(
            f'<li><a href="{BLOG}{r["slug"]}/"><span>{esc(r["category"])}</span>{esc(r["title"])}</a></li>' for r in rel[:3])
        toc_html = ""
        if len(toc) >= 3:
            toc_html = '<nav class="toc"><p>On this page</p><ol>' + "".join(
                f'<li><a href="#{a}">{inline(t)}</a></li>' for a, t in toc) + "</ol></nav>"
        upd = ""
        if p["updated_date"] != p["date"]:
            upd = f' · Updated <time datetime="{p["updated_date"]}">{fmt_date(p["updated_date"])}</time>'
        page = head(p["seo_title"], p["description"], url, og, "article",
                    f'<meta property="article:published_time" content="{p["date"]}">\n'
                    f'<meta property="article:modified_time" content="{p["updated_date"]}">\n'
                    f'<meta property="article:section" content="{esc(p["category"])}">\n' + ld)
        page += f"""<main class="wrap post">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="{BLOG}">Blog</a> / <a href="{BLOG}category/{cat_slug}/">{esc(p['category'])}</a></nav>
<article>
<header class="post-head">
<h1>{esc(p['title'])}</h1>
<p class="lede">{esc(p['description'])}</p>
<p class="meta">By {esc(CFG['author_name'])} · <time datetime="{p['date']}">{fmt_date(p['date'])}</time>{upd} · {mins} min read</p>
</header>
{toc_html}
<div class="prose">
{body}
</div>
{cta_box()}
</article>
<section class="related"><h2>Keep reading</h2><ul>{rel_html}</ul></section>
</main>
"""
        page += foot()
        d = bdir / p["slug"]
        d.mkdir(parents=True)
        (d / "index.html").write_text(page, encoding="utf-8")

    # ---------- index and category pages
    cats = {}
    for p in live:
        cats.setdefault(p["category"], []).append(p)
    cat_order = CFG.get("category_order", [])
    cat_names = sorted(cats, key=lambda c: (cat_order.index(c) if c in cat_order else 99, c))

    def card(p):
        return (f'<li class="card"><a href="{BLOG}{p["slug"]}/"><span class="cat">{esc(p["category"])}</span>'
                f'<h3>{esc(p["title"])}</h3><p>{esc(p["description"])}</p></a></li>')

    def listing(title, desc, url, intro_h, intro_p, items, crumbs_extra=""):
        ld = jsonld({"@context": "https://schema.org", "@graph": [
            {"@type": "CollectionPage", "name": title, "description": desc, "url": url,
             "isPartOf": {"@type": "WebSite", "name": CFG["product_name"], "url": SITE + "/"}},
            {"@type": "ItemList", "itemListElement": [
                {"@type": "ListItem", "position": n + 1, "url": f"{SITE}{BLOG}{p['slug']}/"} for n, p in enumerate(items)]}]})
        chips = "".join(f'<a href="{BLOG}category/{slugify(c)}/">{esc(c)}</a>' for c in cat_names)
        h = head(title, desc, url, f"{SITE}{BLOG}og/default.png", "website", ld)
        h += f"""<main class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="{BLOG}">Blog</a>{crumbs_extra}</nav>
<header class="index-head"><h1>{esc(intro_h)}</h1><p class="lede">{esc(intro_p)}</p>
<div class="chips">{chips}</div></header>
<ul class="cards">{''.join(card(p) for p in items)}</ul>
{cta_box()}
</main>
""" + foot()
        return h

    (bdir / "index.html").write_text(listing(
        CFG["blog_title"], CFG["blog_description"], SITE + BLOG,
        CFG["blog_h1"], CFG["blog_intro"], live), encoding="utf-8")
    for c in cat_names:
        cs = slugify(c)
        d = bdir / "category" / cs
        d.mkdir(parents=True)
        desc = CFG.get("category_descriptions", {}).get(c, f"Articles about {c.lower()} from the {CFG['product_name']} team.")
        d.joinpath("index.html").write_text(listing(
            f"{c} | {CFG['product_name']} blog", desc, f"{SITE}{BLOG}category/{cs}/",
            c, desc, cats[c], f' / <a href="{BLOG}category/{cs}/">{esc(c)}</a>'), encoding="utf-8")

    # ---------- sitemap
    urls = [(SITE + BLOG, max(p["updated_date"] for p in live) if live else TODAY)]
    urls += [(f"{SITE}{BLOG}category/{slugify(c)}/", max(p["updated_date"] for p in cats[c])) for c in cat_names]
    urls += [(f"{SITE}{BLOG}{p['slug']}/", p["updated_date"]) for p in live]
    sm = ['<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    sm += [f"  <url><loc>{esc(u)}</loc><lastmod>{d}</lastmod></url>" for u, d in urls]
    sm.append("</urlset>")
    (DIST / "sitemap-blog.xml").write_text("\n".join(sm) + "\n", encoding="utf-8")

    # ---------- rss
    items = []
    for p in live[:50]:
        pub = dt.datetime.combine(p["date"], dt.time(9, 0)).strftime("%a, %d %b %Y %H:%M:%S +0000")
        items.append(f"<item><title>{esc(p['title'])}</title><link>{SITE}{BLOG}{p['slug']}/</link>"
                     f"<guid>{SITE}{BLOG}{p['slug']}/</guid><pubDate>{pub}</pubDate>"
                     f"<category>{esc(p['category'])}</category><description>{esc(p['description'])}</description></item>")
    rss = (f'<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel>'
           f"<title>{esc(CFG['blog_title'])}</title><link>{SITE}{BLOG}</link>"
           f"<description>{esc(CFG['blog_description'])}</description><language>{CFG.get('lang', 'en')}</language>"
           + "".join(items) + "</channel></rss>\n")
    (bdir / "rss.xml").write_text(rss, encoding="utf-8")

    # ---------- llms.txt (for AI assistants and AI search)
    facts = (ROOT / "FACTS.md").read_text(encoding="utf-8")
    summary = re.search(r"<!-- llms-summary -->(.*?)<!-- /llms-summary -->", facts, re.S)
    lines = [f"# {CFG['product_name']}", "", f"> {CFG['llms_summary']}", ""]
    if summary:
        lines += [summary.group(1).strip(), ""]
    lines += ["## Key pages", "", f"- [Home]({SITE}/): what Kribble is, how verification works, FAQ and the waitlist",
              f"- [Blog]({SITE}{BLOG}): childcare guides for parents and area guides for Gurugram", ""]
    for c in cat_names:
        lines += [f"## {c}", ""]
        lines += [f"- [{p['title']}]({SITE}{BLOG}{p['slug']}/): {p['description']}" for p in cats[c]]
        lines.append("")
    (DIST / "llms.txt").write_text("\n".join(lines), encoding="utf-8")
    full = ["# " + CFG["product_name"] + ": full blog text", "", CFG["llms_summary"], ""]
    for p in live:
        full += ["", "---", "", f"# {p['title']}", f"URL: {SITE}{BLOG}{p['slug']}/", "", p["body_md"]]
    (DIST / "llms-full.txt").write_text("\n".join(full), encoding="utf-8")

    # ---------- robots suggestion (merge with the site's own, see CLAUDE.md)
    (DIST / "robots.suggested.txt").write_text(
        "User-agent: *\nAllow: /\n\n"
        f"Sitemap: {SITE}/sitemap.xml\nSitemap: {SITE}/sitemap-blog.xml\n", encoding="utf-8")

    total = sum(p.get("words", 0) for p in live)
    scheduled = [p for p in posts if p["slug"] not in live_slugs]
    print(f"Built {len(live)} posts ({total:,} words), {len(cat_names)} categories -> {DIST}")
    if scheduled:
        nxt = min(p["date"] for p in scheduled)
        print(f"{len(scheduled)} posts scheduled for later; next one goes live {nxt}. Rebuild and redeploy on or after that date.")
    if WARNINGS:
        print(f"\n{len(WARNINGS)} warning(s):")
        for w in WARNINGS:
            print("  - " + w)
    else:
        print("No warnings.")


if __name__ == "__main__":
    build(include_all="--all" in sys.argv)
    if "--serve" in sys.argv:
        import functools, http.server
        os.chdir(DIST)
        print(f"Preview: http://localhost:8000{BLOG}  (Ctrl+C to stop)")
        http.server.ThreadingHTTPServer(("127.0.0.1", 8000),
                                        functools.partial(http.server.SimpleHTTPRequestHandler)).serve_forever()
