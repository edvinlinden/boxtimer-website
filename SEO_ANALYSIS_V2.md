# SEO & LLM Search Audit v2 — boxtimer.app

**Date:** 2026-02-20
**Analyst:** Claude (acting as SEO specialist)
**Site:** https://boxtimer.app/
**Baseline:** SEO_ANALYSIS.md (v1, same date — prior audit)
**Stack:** Astro + Tailwind, static site, iOS app marketing site

---

## Score vs v1 Audit

| Category | v1 Score | v2 Score | Change |
|---|---|---|---|
| On-page keyword targeting | 3/10 | 6/10 | +3 |
| Site structure & depth | 5/10 | 8/10 | +3 |
| Structured data (schema) | 5/10 | 8/10 | +3 |
| Internal linking | 2/10 | 7/10 | +5 |
| Content depth | 4/10 | 7/10 | +3 |
| LLM citation readiness | 2/10 | 6/10 | +4 |
| Technical SEO | 5/10 | 7/10 | +2 |

**Overall: significant improvement across every category.** The site went from a thin, structurally weak marketing page to a properly architected SEO content hub.

---

## What Was Implemented (v1 Action Items)

### ✅ #1 — Homepage H1 (Partial)
**Was:** *"A workout timer wherever you go!"*
**Now:** *"The Workout Timer Athletes Actually Use"*

The H1 is no longer generic brand copy. The bullet list below it ("For Time, EMOM & AMRAP", "CrossFit, HIIT & Tabata") brings keyword signals into the hero section. **However, the H1 itself still contains zero target keywords.** This is a remaining gap — see New Action Item #1.

---

### ✅ #2 — 3 New High-Volume Landing Pages
All three pages were created and are well-structured:

- `/wod-timer/` — H1: "Free WOD Timer for iPhone", HowTo schema, formats table, internal links ✅
- `/interval-timer/` — H1: "Free Interval Timer for iPhone", HowTo schema ✅
- `/workout-timer/` — H1: "Free Workout Timer for iPhone", HowTo schema ✅

Each page follows the correct template: definition section, feature bullets, step-by-step setup, reference table, related links, HowTo JSON-LD. **These are solid pages.**

---

### ✅ #3 — Lastmod in Sitemap
The `@astrojs/sitemap` integration was replaced with a **custom sitemap** (`src/pages/sitemap-0.xml.ts`) that reads `export const lastmod` from every `.astro` page file. Every page now exports a `lastmod` date and the sitemap correctly includes it. This is a better implementation than the plugin approach — it is explicit, accurate, and deploy-controlled.

Example from `crossfit-timer.astro:2`: `export const lastmod = "2026-02-08";`

**One minor issue:** `box-timer-vs-smartwod.astro` has `"dateModified": "2026-02-08"` in its Article schema but `"datePublished": "2026-02-20"` — dateModified is *before* datePublished, which is an error. See New Action Item #2.

---

### ✅ #4 — HowTo Schema on `/crossfit-timer/`
Added at `src/pages/crossfit-timer.astro:157`. Covers AMRAP, For Time, EMOM, and Tabata setup steps. The page is now consistent with all other landing pages.

---

### ✅ #5 — Comparison Pages Expanded
Checked `/box-timer-vs-smartwod/` and `/box-timer-vs-seconds-pro/`. Both are now **600–700 words** with:
- "Who should choose X?" sections with user personas ✅
- Detailed setup comparison for a specific workout format ✅
- Pricing section ✅
- Clear verdict paragraph ✅
- Related links to other comparison pages ✅

This is a meaningful upgrade from the ~350-word tables that existed in v1. These pages now meet Google's quality threshold and provide enough substance for LLM citation.

---

### ✅ #6 — Definitive Guide Page
`/crossfit-workout-timer-guide/` was created and is the strongest new page on the site. It is ~2,200 words and covers:
- All 5 WOD formats (AMRAP, EMOM, For Time, Tabata, RFT) with definitions and scoring
- Highlighted timer setup steps for each format (styled callout boxes)
- WOD format quick reference table
- "How to choose a CrossFit timer app" (6 criteria)
- "Common timer mistakes CrossFit athletes make" (6 mistakes)
- App comparison table (5 apps)
- FAQ section (5 questions + FAQPage JSON-LD)
- Article schema with both `datePublished` and `dateModified`

**This is exactly the LLM citation magnet the site needed.** When ChatGPT, Claude, or Perplexity is asked "what CrossFit timer app should I use?" or "what is AMRAP?", this page is the type of comprehensive, structured, definitional content that gets cited.

---

### ✅ #7 — MobileApplication Schema on All Landing Pages
The `MobileApplication` JSON-LD with `aggregateRating` (4.9 stars, 4,030 reviews) was added to `src/layouts/Page.astro`. All category pages (`/crossfit-timer/`, `/emom-timer/`, `/tabata-timer/`, etc.) now emit this schema on every render.

---

### ✅ #8 — Internal Links from Homepage
An "Explore by workout type" section was added to `src/pages/index.astro:57–110`. It contains pill-shaped links to:
- CrossFit Timer, EMOM Timer, Tabata Timer, HIIT Timer, WOD Timer, Interval Timer, Boxing Timer, Workout Timer, AMRAP Timer

This gives all 9 landing pages a direct link from the highest-authority page on the site. **Excellent implementation.** The link equity flow is now correct.

---

### ✅ #9 — Meta Title Improvements
- `/crossfit-timer/` → *"Box Timer – Free CrossFit Timer App | AMRAP, EMOM, WOD"* ✅
- `/interval-timer/` → *"Box Timer – Best Free Interval Timer App for iPhone"* ✅
- `/workout-timer/` → *"Box Timer – Best Free Workout Timer App for iPhone"* ✅
- `/wod-timer/` → *"Box Timer – Free WOD Timer App | CrossFit AMRAP & EMOM"* ✅
- `/amrap-timer/` → *"Box Timer – Free AMRAP Timer App for iPhone | CrossFit"* ✅

The word "best" is now used in the titles for `/interval-timer/` and `/workout-timer/`, which correlates with "best X" query ranking.

---

### ✅ #10 — Breadcrumb Schema
Added to `src/layouts/Page.astro:70–77` as a dynamic `BreadcrumbList` JSON-LD block. Uses `set:html={JSON.stringify(...)}` to pass the current page's `title` and `url` as the second breadcrumb item. All sub-pages now emit this schema. **Correctly implemented.**

---

### ✅ #11 — `/amrap-timer/` Page
Created. H1: "Free AMRAP Timer for iPhone". Has HowTo schema, format table, good meta description. Internal links to crossfit-timer, emom-timer, wod-timer, and the guide. **Well done.**

---

## Remaining Items from v1 (Not Yet Done)

### ❌ #12 — Per-Page OG Images
`src/layouts/Page.astro:15` and `src/layouts/Layout.astro:13` both still point to `"https://boxtimer.app/images/og.png"` for all pages. Every page shares the same OG image. Custom images per category would improve CTR when links are shared. Low urgency but still an open item.

### ❌ #15 — About / Story Page
No `/about/` page exists. This remains the primary E-E-A-T gap. The schema in `Page.astro` and `Layout.astro` does correctly attribute authorship to "Edvin Lindén" with a link to `edvinlinden.se`, which is the minimum. A full about page would strengthen this signal significantly.

### ❌ #14 — Backlinks
Cannot be assessed from code. Still the primary long-term ceiling on domain authority. Priority targets remain the same as v1: r/crossfit, r/homegym, CrossFit affiliate blogs, AlternativeTo.net.

### ❌ #16 — Web-Based Timer Widget
Still no `/crossfit-timer-online/` page. "Crossfit timer online" remains an uncaptured intent cluster. Low urgency given the volume of iOS-specific content now on the site.

---

## New Action Items (Issues Found in v2 Audit)

### 1. Homepage H1 Still Has Zero Target Keywords — Fix This

**Current H1 (`src/components/Hero.astro:13`):**
> *"The Workout Timer Athletes Actually Use"*

This is better brand copy than v1 but still SEO-neutral. The words "workout", "timer", and "athletes" are present, which is a mild improvement — but none of the actual target keywords appear: no "CrossFit", no "HIIT", no "interval", no "iPhone", no "free".

**Recommended fix:**
> *"Free CrossFit & HIIT Timer for iPhone"*

With the subheadline handling the brand positioning ("Built for the box, the garage, and the grind"). The bullet list already covers the keyword expansion (AMRAP, EMOM, Tabata, CrossFit, HIIT). The H1 just needs to anchor the primary keyword cluster.

**Impact: High. Effort: Low.** File: `src/components/Hero.astro:13`

---

### 2. Article Schema dateModified Bug on Comparison Pages

`src/pages/box-timer-vs-smartwod.astro:267`:
```json
"datePublished": "2026-02-20",
"dateModified": "2026-02-08"
```

`dateModified` is 12 days *before* `datePublished`. This is logically impossible and will confuse Google's structured data parser. Fix by setting both to the same date, or updating `dateModified` to match `lastmod`.

Also check all other comparison pages for the same pattern.

**Impact: Medium. Effort: Low.** Files: `src/pages/box-timer-vs-*.astro`

---

### 3. `/crossfit-workout-timer-guide/` Doesn't Link to Comparison Pages

The definitive guide page (`crossfit-workout-timer-guide.astro`) links outward to:
- `/crossfit-timer/`, `/emom-timer/`, `/tabata-timer/`, `/wod-timer/`, `/2026-best-workout-timers-iphone/`

But it does **not** link to any of the 5 comparison pages despite having an entire "CrossFit timer app comparison" table. A reader who just read the comparison table is the perfect audience for the full comparison pages.

**Fix:** Add "See full comparison →" links from the app comparison table rows (or a "Related comparisons" section at the bottom).

**Impact: Medium. Effort: Low.** File: `src/pages/crossfit-workout-timer-guide.astro:383`

---

### 4. Homepage H2 Tags Still Keyword-Free

The two H2 tags in `src/pages/index.astro`:
- `"Your workout, your way"` (line 26) — zero keywords
- `"Stop arguing over the timer on the wall"` (line 129) — zero keywords

The features H2 is the natural place to add a keyword anchor. Suggested fix:
> *"The interval timer built for CrossFit, HIIT, and Tabata"*

**Impact: Medium. Effort: Low.** File: `src/pages/index.astro:22–27`

---

### 5. Add `WebSite` and `Organization` Schema to Homepage

`src/layouts/Layout.astro` has `MobileApplication` + (implicitly via FAQPage in index.astro) `FAQPage` schema. But there is no:

- `WebSite` schema with a `SearchAction` — enables Google Sitelinks search box
- `Organization` schema — reinforces brand identity in Knowledge Graph

Add to `Layout.astro`:
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Box Timer",
  "url": "https://boxtimer.app/"
}
```

And optionally an `Organization` block. These are low-cost additions that improve Knowledge Graph representation.

**Impact: Low-Medium. Effort: Low.** File: `src/layouts/Layout.astro`

---

### 6. Comparison Pages Missing HowTo Schema

The 5 comparison pages all have `Article` schema but **none have `HowTo` schema**. Each comparison page includes a step-by-step "Setup comparison" section — for example, "20-minute AMRAP setup on Box Timer" (4 steps). This is exactly the structure that qualifies for a HowTo rich result.

Adding HowTo schema to the "Box Timer setup steps" on each comparison page would give them a second type of rich result eligibility on top of the Article markup.

**Impact: Medium. Effort: Low.** Files: `src/pages/box-timer-vs-*.astro`

---

### 7. Sitemap Missing the Homepage `lastmod` Export

`src/pages/index.astro:2` exports `export const lastmod = "2026-02-20"` — good. The custom sitemap generator at `src/pages/sitemap-0.xml.ts` globs all `.astro` files and reads `lastmod`. This should work for the homepage.

**Verify this is working correctly** by checking the built sitemap at `/sitemap-0.xml` after deploy. The homepage URL `https://boxtimer.app/` should appear with `<lastmod>2026-02-20</lastmod>`. If it doesn't, there is a path-mapping issue in `filePathToUrl`.

**Impact: Medium. Effort: Low (verification only).**

---

### 8. FAQ on Homepage Has First-Person Voice Inconsistency

`src/pages/index.astro:265`:
> *"I plan to release the app on the Google Play Store in the future."*

The `FAQPage` schema answer for "Where can I get the app?" (`index.astro:424`) correctly uses "You can get Box Timer free on the Apple App Store." But the visible HTML text uses first-person "I" while the schema uses third-person. This is a minor but visible inconsistency on the page.

**Impact: Low. Effort: Low.** File: `src/pages/index.astro:266`

---

## Updated Summary Table

| # | Action | Effort | Impact | Status |
|---|---|---|---|---|
| 1 | Keyword-rich H1 on homepage | Low | Critical | ⚠️ Partially done |
| 2 | Fix dateModified bug in Article schema | Low | Medium | 🔴 Not done |
| 3 | Link comparison pages from guide | Low | Medium | 🔴 Not done |
| 4 | Keyword-rich H2 on homepage | Low | Medium | 🔴 Not done |
| 5 | WebSite + Organization schema | Low | Low-Medium | 🔴 Not done |
| 6 | HowTo schema on comparison pages | Low | Medium | 🔴 Not done |
| 7 | Verify sitemap lastmod in prod | Low | Medium | ⚠️ Unverified |
| 8 | Fix first-person FAQ voice | Low | Low | 🔴 Not done |
| 9 | Per-page OG images | Medium | Medium | 🔴 Carried from v1 |
| 10 | About/story page | Low | Medium | 🔴 Carried from v1 |
| 11 | Backlink acquisition | High | High (long-term) | 🔴 Carried from v1 |
| 12 | Web-based timer widget | High | Medium-High | 🔴 Carried from v1 |

---

## LLM Citation Readiness Assessment

In the v1 audit the site had no content that an LLM would cite. After this round of improvements:

**Pages that are now citation-worthy:**

- `/crossfit-workout-timer-guide/` — Comprehensive, factual, definitional. High citation probability for "what is AMRAP/EMOM/Tabata", "how to use iPhone as CrossFit timer", "CrossFit timer app comparison" queries.
- `/box-timer-vs-smartwod/` and `/box-timer-vs-seconds-pro/` — Now substantive enough to be cited for "Box Timer vs SmartWOD" or "best CrossFit timer app" queries.
- `/emom-timer/`, `/tabata-timer/`, `/hiit-timer/` — Established pages with good depth. Likely already indexed.

**Citation gap that remains:**

The site has no content targeting **general fitness queries** beyond CrossFit. Queries like "best HIIT timer app", "best interval timer for iPhone", or "free workout timer iPhone" are high-volume and the `/hiit-timer/`, `/interval-timer/`, and `/workout-timer/` pages target them — but the guide page (`/crossfit-workout-timer-guide/`) only covers CrossFit formats. A parallel "HIIT workout timer guide" or "interval timer guide" would capture the non-CrossFit HIIT audience that represents a large portion of the target keyword list.

---

## Key Technical Notes (Updated)

- **Sitemap:** Custom implementation via `src/pages/sitemap-0.xml.ts` + `sitemap-index.xml.ts` (replaces `@astrojs/sitemap` plugin). Uses `export const lastmod` pattern on all pages.
- **Schema in use (now):** `MobileApplication` (Layout.astro + Page.astro), `FAQPage` (index.astro, crossfit-workout-timer-guide.astro), `HowTo` (all landing pages + new pages), `Article` (all comparison pages + editorial + guide), `BreadcrumbList` (all Page.astro pages)
- **Robots.txt:** Allows all major AI crawlers (GPTBot, ClaudeBot, Google-Extended, PerplexityBot) — confirmed from v1 audit, no change needed
- **Page count:** ~40 URLs (up from 33 in v1 sitemap)
- **New landing pages:** `/wod-timer/`, `/interval-timer/`, `/workout-timer/`, `/amrap-timer/`
- **New editorial:** `/crossfit-workout-timer-guide/`
