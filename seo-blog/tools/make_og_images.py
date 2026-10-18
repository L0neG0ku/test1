#!/usr/bin/env python3
"""
Regenerate the social share images in static/og/ (one per post, plus default.png and logo.png).
Optional: only needed when you add a post or change a title.
Needs Playwright:  pip install playwright && python -m playwright install chromium
Run from the package root:  python3 tools/make_og_images.py
"""
import asyncio, html, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
import build  # noqa: E402

OUT = ROOT / "static" / "og"
OUT.mkdir(parents=True, exist_ok=True)

import base64
MARK = '<img src="data:image/png;base64,' + base64.b64encode((ROOT / "tools" / "logo_white.png").read_bytes()).decode() + '" style="height:64px">'

CSS = """*{margin:0;box-sizing:border-box}body{width:1200px;height:630px;background:#6C47F0;color:#ffffff;
font-family:Oswald,Inter,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;padding:64px 72px;display:flex;flex-direction:column}
.top{display:flex;align-items:center;gap:16px;font-weight:700;font-size:30px;letter-spacing:-.01em}
.cat{margin-top:auto;font:600 22px/1 Inter,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#E4DDFC}
h1{font-size:60px;line-height:1.08;letter-spacing:-.025em;margin-top:18px;max-width:1040px}
.foot{margin-top:36px;font-size:24px;color:#E4DDFC;display:flex;justify-content:space-between}"""


def page(title, cat):
    size = 60 if len(title) < 70 else 50 if len(title) < 100 else 44
    return (f"<html><head><style>{CSS}h1{{font-size:{size}px}}</style></head><body>"
            f"<div class='top'>{MARK}</div><div class='cat'>{html.escape(cat)}</div>"
            f"<h1>{html.escape(title)}</h1><div class='foot'><span>Verified childcare, starting in Gurugram</span>"
            f"<span>kribblecare.com</span></div></body></html>")


async def main():
    from playwright.async_api import async_playwright
    posts = [build.parse_post(p) for p in sorted(build.POSTS.glob("*.md"))]
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 1200, "height": 630})
        jobs = [(x["slug"], x["title"], x["category"]) for x in posts]
        jobs.append(("default", "Choosing childcare, made simpler", "Kribble blog"))
        jobs.append(("home", "Childcare, wherever you need it.", "Verified daycares and preschools in Gurugram"))
        for slug, title, cat in jobs:
            await pg.set_content(page(title, cat))
            await pg.screenshot(path=str(OUT / f"{slug}.png"))
        await pg.set_viewport_size({"width": 512, "height": 512})
        await pg.set_content("<body style='margin:0;width:512px;height:512px;background:#6C47F0;display:grid;place-items:center'>" + MARK.replace("height:64px", "width:400px") + "</body>")
        await pg.screenshot(path=str(OUT / "logo.png"))
        await b.close()
    print(f"Wrote {len(jobs) + 1} images to {OUT}")

asyncio.run(main())
