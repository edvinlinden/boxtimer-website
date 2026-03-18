# SEO & LLM Search Audit — boxtimer.app

**Date:** 2026-02-20
**Analyst:** Claude (acting as SEO specialist)
**Site:** https://boxtimer.app/
**Stack:** Astro + Tailwind, static site, iOS app marketing site

## Target Keywords

crossfit timer, crossfit timer app, crossfit clock app, crossfit timer online, crossfit wod timer, crossfit clock online, best crossfit timer app, timer crossfit online, box timer app, crossfit timer app free, emom timer app, emom timer, fitness timer app, timer for crossfit, best hiit timer app for iphone, best hiit timer, best interval timer app for iphone, interval timer, timer for iphone, workout timer, workout timer app, best workout timer app, wod timer, wod timer app, free workout timer apps for iphone, iphone workout timer, tabata timer, tabata timer app, tabata timer iphone, tabata app, best tabata timer, best tabata timer for iphone

---

## Current Site Inventory (33 URLs in sitemap)

**Landing pages:** `/crossfit-timer/`, `/emom-timer/`, `/hiit-timer/`, `/tabata-timer/`, `/boxing-round-timer/`
**Comparison pages:** `/box-timer-vs-smartwod/`, `/box-timer-vs-interval-timer/`, `/box-timer-vs-seconds-pro/`, `/box-timer-vs-tabata-stopwatch-pro/`, `/box-timer-vs-tabata-timer/`
**Editorial:** `/2026-best-workout-timers-iphone/`
**Support:** 18 how-to pages under `/support/`
**Other:** `/`, `/privacy/`

---

## Tier 1 — Highest Impact (Do These First)

### 1. Fix the Homepage H1 — It Contains Zero Target Keywords

**Current H1:** *"A workout timer wherever you go!"*
This is the single biggest on-page SEO failure on the site. Google and LLMs heavily weight H1 content as the primary topic signal, and right now it tells them nothing. Every competitor targeting the same keywords uses keyword-rich H1s.

**Fix:** Change to something like:
> *"Free CrossFit & HIIT Timer for iPhone — AMRAP, EMOM, Tabata & More"*

File: `src/components/Hero.astro:9`

The H2 tags below the H1 ("Your workout, your way", "Stop arguing over the timer on the wall") are also keyword-free. At minimum, rename the features H2 to something like *"The interval timer built for CrossFit WODs, HIIT, and Tabata"*.

File: `src/pages/index.astro:21`

---

### 2. Create 3 Missing High-Volume Landing Pages

These keyword groups have no dedicated page and represent large traffic gaps:

| Missing Page | Target Keywords |
|---|---|
| `/wod-timer/` | wod timer, wod timer app, crossfit wod timer, timer crossfit online |
| `/interval-timer/` | interval timer, interval timer app, best interval timer app for iphone |
| `/workout-timer/` | workout timer, workout timer app, best workout timer app, free workout timer apps for iphone |

Each page should mirror the structure of the existing `/emom-timer/` and `/hiit-timer/` pages: ~800–1000 words, "What is X?", "How to use Box Timer for X", step-by-step instructions, a formats comparison table, HowTo JSON-LD schema, and internal links to related pages.

---

### 3. Add `lastmod` Dates to the Sitemap

The sitemap has 33 URLs with **no `lastmod` dates on any of them**. Google uses `lastmod` to prioritize re-crawling updated content. Stale-looking sitemaps get lower crawl priority.

Astro's sitemap integration supports `lastmod` via the `serialize` option in `astro.config.mjs`.

File: `astro.config.mjs:8`

---

### 4. Add HowTo Schema to `/crossfit-timer/`

The `/crossfit-timer/` page has step-by-step setup instructions for AMRAP, For Time, EMOM, and Tabata — but **no JSON-LD structured data at all**. The EMOM, HIIT, and Tabata pages all have HowTo schema. This inconsistency means the most commercially important landing page (crossfit is in 8 of the 30 target keywords) gets no rich result eligibility.

Add a `HowTo` schema block to `src/pages/crossfit-timer.astro` following the pattern from `src/pages/emom-timer.astro`.

---

### 5. Expand the Comparison Pages — Currently Thin Content at ~350–400 Words

All five comparison pages are ~350–400 words. Google's quality guidelines flag pages under 500 words in competitive verticals as thin content. LLMs do not cite thin pages — they need enough substance to extract a reliable answer.

Expand each to 800+ words by adding:
- Who each app is best for (specific user personas)
- Detailed setup comparison for a specific workout type
- Pricing and upgrade path context
- User review themes from the App Store
- A clear verdict/recommendation section

Files: `src/pages/box-timer-vs-*.astro`

---

## Tier 2 — High Impact

### 6. Build One Authoritative "Definitive Guide" Page — LLM Citation Target

LLMs (ChatGPT, Claude, Gemini, Perplexity) prioritize citing comprehensive, educational content when answering questions like *"What is the best CrossFit timer app?"*. The site currently has no single page that would get cited as a reference.

**Create: `/crossfit-workout-timer-guide/`** — ~2,000+ words covering:
- Every WOD format (AMRAP, EMOM, For Time, Tabata, RFT) with definitions, scoring, and timer setup
- How to pick a timer app for CrossFit
- Common mistakes athletes make with timers
- Comparison table of timer apps with Box Timer leading

This page becomes a citation magnet. When someone asks an LLM "what's a good free CrossFit timer app?", this is the content that gets Box Timer mentioned.

---

### 7. Add MobileApplication Schema to All Category Landing Pages

The `MobileApplication` JSON-LD schema with ratings (4.9 stars, 4,030 reviews) currently renders only on the homepage via `Layout.astro`. Pages like `/crossfit-timer/`, `/tabata-timer/`, and `/emom-timer/` get none of it.

Add the `MobileApplication` schema block (including `aggregateRating`) to the `Page.astro` layout or pass it as a per-page prop. This gives Google the star rating signal on every keyword landing page.

File: `src/layouts/Page.astro`

---

### 8. Fix Internal Linking — The Homepage Doesn't Link to Its Own Landing Pages

The homepage (`index.astro`) has **zero internal links** to `/crossfit-timer/`, `/emom-timer/`, `/tabata-timer/`, `/hiit-timer/`, or `/boxing-round-timer/`. These landing pages exist but receive no link equity from the highest-authority page on the site.

Add a "Timer guides" or "Explore by workout type" section near the features area, or add these as navigation items. The feature cards in `index.astro` are a natural place to link.

File: `src/pages/index.astro`

---

### 9. Make Meta Titles More Keyword-Dense for Landing Pages

Current pattern: `"Box Timer – Free [X] Timer App for iPhone"`

Use remaining title character budget for keywords:

- `/crossfit-timer/` → *"Box Timer — Free CrossFit Timer App | AMRAP, EMOM, WOD"*
- `/tabata-timer/` → *"Box Timer — Free Tabata Timer App for iPhone | No Ads"*
- `/hiit-timer/` → *"Box Timer — Best Free HIIT Timer App for iPhone"*

The word "best" in title tags correlates with ranking for "best X" queries.

---

### 10. Add Breadcrumb Schema to All Sub-Pages

None of the sub-pages have `BreadcrumbList` JSON-LD. Breadcrumb rich results display the URL path in SERPs (e.g., `boxtimer.app › crossfit-timer`), which increases CTR and helps Google understand site hierarchy.

Add to `Page.astro`:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://boxtimer.app/" },
    { "@type": "ListItem", "position": 2, "name": "[Page Title]", "item": "[Page URL]" }
  ]
}
```

File: `src/layouts/Page.astro`

---

## Tier 3 — Medium Impact

### 11. Create a `/amrap-timer/` Page

AMRAP is the most commonly searched CrossFit workout format after EMOM and Tabata. It appears throughout the site but there is no dedicated page targeting "amrap timer". Follow the same content template as the other landing pages.

---

### 12. Add Per-Page OG Images for Social Sharing

All 33 pages share the same generic `og.png` (`src/layouts/Layout.astro:13` and `src/layouts/Page.astro:15`). Custom OG images per category improve CTR when pages are shared on Reddit, Twitter, or fitness forums, which drives both direct traffic and secondary backlinks.

---

### 13. Add `dateModified` Freshness to Article Schema

The comparison and landing pages have `Article` schema but `dateModified` is hardcoded. Dynamically update this field (via frontmatter dates or build-time values) to signal freshness to Google on every deploy.

---

### 14. Pursue Backlinks from Fitness/CrossFit Publications

Current external links pointing to the site: Product Hunt and Boxletes.com only. This is the primary ceiling on domain authority and limits how high all keyword pages can rank.

High-priority targets:
- **r/crossfit** and **r/homegym** — engage in "what timer do you use?" threads
- **CrossFit affiliate blogs** — outreach to WOD-programming sites
- **App review sites** — AppAdvice, iPhoneLife, MacStories, 9to5Mac
- **AlternativeTo.net** — create a listing; ranks well for "[app] alternative" queries
- **Fitness YouTubers** — offer a feature mention in "free app" roundup content

---

### 15. Add an "About / Story" Page for E-E-A-T

Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) framework rewards content with a credible author. LLMs also weigh named authors in attribution. An about page establishing the developer as a CrossFit athlete who built this to solve a real problem adds a human, authoritative signal that most competitor apps lack.

---

### 16. Target "Crossfit Timer Online" with a Web-Based Timer Widget

"crossfit timer online" and "crossfit clock online" have search intent for **browser-based** timers. Box Timer only targets iOS, leaving this segment entirely uncaptured. Even a basic JavaScript timer at `/crossfit-timer-online/` would rank for a cluster of online-timer queries the iOS-only pages cannot touch.

---

## Summary Table

| # | Action | Effort | Impact |
|---|---|---|---|
| 1 | Keyword-rich H1 on homepage | Low | Critical |
| 2 | New pages: /wod-timer/, /interval-timer/, /workout-timer/ | Medium | Very High |
| 3 | Add lastmod to sitemap | Low | High |
| 4 | HowTo schema on /crossfit-timer/ | Low | High |
| 5 | Expand comparison pages to 800+ words | Medium | High |
| 6 | Definitive guide page for LLM citation | High | High |
| 7 | MobileApplication schema on all landing pages | Low | Medium-High |
| 8 | Internal links from homepage to landing pages | Low | Medium-High |
| 9 | Improve meta title formula | Low | Medium |
| 10 | Breadcrumb schema on sub-pages | Low | Medium |
| 11 | /amrap-timer/ page | Low | Medium |
| 12 | Per-page OG images | Medium | Medium |
| 13 | dateModified freshness in schema | Low | Medium |
| 14 | Backlink acquisition | High | High (long-term) |
| 15 | About/story page | Low | Medium |
| 16 | Web-based timer widget | High | Medium-High |

---

## Key Technical Notes for Implementing Agents

- Site is built with **Astro** + Tailwind CSS
- Homepage uses `src/layouts/Layout.astro` (includes Hero, hardcoded description)
- All other pages use `src/layouts/Page.astro` (accepts `title`, `description`, `url`, `canonical` props)
- Sitemap is auto-generated via `@astrojs/sitemap` in `astro.config.mjs`
- robots.txt already allows all major AI crawlers (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, etc.)
- Existing landing pages with good structure to copy from: `src/pages/emom-timer.astro`, `src/pages/hiit-timer.astro`
- JSON-LD schemas in use: `MobileApplication` (homepage only), `FAQPage` (homepage), `HowTo` (EMOM, HIIT, Tabata, boxing pages), `Article` (comparison and editorial pages)
