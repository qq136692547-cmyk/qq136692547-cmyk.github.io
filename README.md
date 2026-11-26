# qq136692547-cmyk.github.io

[![GeoScore](https://geoscore.help/badge/qq136692547-cmyk.github.io.svg)](https://geoscore.help/)

Zero-dependency static **GitHub Pages Open-Source Hub** showcasing all 12 original open-source projects by [qq136692547-cmyk](https://github.com/qq136692547-cmyk), with **[antigravity-aistudio](https://github.com/qq136692547-cmyk/antigravity-aistudio) v0.2.2** and **[antigravity-flow](https://github.com/qq136692547-cmyk/antigravity-flow) v0.3.2** featured alongside **[geo-score](https://github.com/qq136692547-cmyk/geo-score) v1.9**.

Live URL: [https://qq136692547-cmyk.github.io/](https://qq136692547-cmyk.github.io/)

## Architecture Highlights

- **Zero Runtime Dependencies**: Pure semantic HTML5, modern CSS, and vanilla ES2022 JavaScript (`index.html`, `styles.css`, `app.js`).
- **Automatic & Manual Bilingual UI (`中文 / EN`)**: Detects visitor language via `?lang=zh|en` query parameter, `localStorage("site-lang")`, and `navigator.language` (with an anti-flash `<head>` script setting `<html lang>` and `data-lang` before first paint), includes a header toggle button, cross-tab `storage` sync, and bilingual search keywords across all 12 cards, comparison matrix, case study, quickstart, FAQ, and trust pages.
- **Dual Light/Dark Theme**: Uses `<meta name="color-scheme" content="light dark">` with an inline anti-flash script, CSS `light-dark(...)` tokens, system-preference tracking, and cross-tab `storage` synchronization.
- **GEO & AI Discovery Endpoints**: Ships explicit 20-crawler `robots.txt`, `sitemap.xml`, `/llms.txt`, `/.well-known/ai.txt`, `/ai/summary.json`, `/ai/faq.json`, dedicated trust pages (`about.html`, `privacy.html`, `terms.html`), and 6 standalone top-level JSON-LD schemas (`Organization`, `WebSite`, `Person`, `Article`, `FAQPage`, `HowTo`).
- **Hardened CSP**: Enforces hash-based `<meta http-equiv="Content-Security-Policy">` allowing only same-origin assets, the deterministic head anti-flash script hash, `https://api.github.com`, `https://raw.githubusercontent.com`, and `https://geoscore.help`.
- **Modern CSS Layout**: CSS `subgrid` row alignment across project cards, `@container` inline-size queries on each `<article class="card">` and responsive comparison table, and stretched-link card hit targets with elevated secondary links.
- **Accessible Filtering & Live Search**: Non-wrapping horizontal category strip (`aria-pressed` with high-contrast underline indicator) and `aria-live="polite"` result announcements.
- **Silent GitHub Star Sync**: Client-side fetch against the GitHub Users Repos API with a 10-minute `sessionStorage` cache and silent fallback to verified static counts.

## Local Preview

```bash
python -m http.server 8080
```

Then open `http://localhost:8080/` (or `?lang=zh` / `?lang=en`) in your browser.
