# Conversion Action Plan — Box Timer Website

Created: 2026-02-24

---

## The Data Tells a Stark Story

**Working backwards from the numbers (as of Feb 2026):**

- Traffic: ~180 visitors/week
- 54% direct/no referrer (~97 visitors), 36% ChatGPT (~65 visitors), ~10% other (Google etc.)
- Overall CVR: 29% → ~52 CTA clicks/week
- ChatGPT CVR: 78% → ~51 clicks
- Google CVR: 42% → ~4 clicks
- **Direct traffic (~97 visitors): generates ~0–5 clicks — an estimated 2–5% CVR**

ChatGPT is carrying the entire site. 54% of all visitors — the largest segment — barely converts. That is the real problem and where all the leverage is.

---

## Why Direct Traffic Barely Converts

Three likely explanations, in order of probability:

1. **Device mismatch.** Desktop visitors cannot act on an iOS-only CTA. No path forward exists for them.
2. **Already-have-the-app traffic.** Support seekers, returning users, and bookmarked visitors have nothing to download.
3. **Low-intent browsing.** Some portion arrived without a specific goal.

ChatGPT traffic converts at 78% because the AI pre-sold the app. Visitors arrive with one purpose: confirm this is right and tap download. The site handles this well. The challenge is cold, unprimed traffic.

---

## Action Plan

### Priority 1 — Add a QR code alongside the hero CTA
**Impact: High | Effort: Medium**

Desktop visitors who want the app have no frictionless path to download it. Add a QR code next to or below the `GetAppButton` in the hero, visible only on non-mobile screens (`hidden lg:flex`). Label: _"On your iPhone? Scan to download."_

This creates a complete conversion path for desktop visitors who are already interested. QR codes on app landing pages routinely lift desktop-to-mobile conversion by 20–40%. Zero SEO impact.

---

### Priority 2 — Add a CTA immediately after "Stop arguing over the timer on the wall"
**Impact: High | Effort: Minimal**

The most emotionally resonant copy on the page has no CTA below it. Add a single `<GetAppButton />` directly after that section to catch visitors at peak motivation. One line of code — fastest win on the list.

---

### Priority 3 — Add a CTA after the review grid
**Impact: Medium-high | Effort: Minimal**

After 18 reviews, the only button is "READ ALL REVIEWS" — which sends visitors away to the App Store review listing instead of the download page. Add `<GetAppButton />` below the review grid to catch visitors the moment they become convinced.

---

### Priority 4 — Change CTA button text from "GET APP" to "Download Free"
**Impact: Medium | Effort: Minimal**

The strongest differentiator is the price. At the decision moment, reinforcing "free, no risk" removes the last hesitation. The Apple logo already implies "on the App Store." The word "Free" does conversion work the current text leaves on the table.

---

### Priority 5 — Add device-aware messaging for Android/non-iOS visitors
**Impact: Medium | Effort: Medium**

Android visitors hit a dead-end App Store page. A JavaScript OS detection can show a different message: _"Currently iOS only — Android version in development."_ The FAQ already mentions Android plans — this surfaces that message for the visitors who need it. Reduces frustration, improves brand perception.

---

### Priority 6 — Add mid-content CTAs to comparison pages
**Impact: Medium | Effort: Medium**

Comparison pages are where Google traffic lands (42% CVR). The CTA currently appears only at the bottom. Adding a CTA after the comparison table and after the "Verdict" section would improve an already-converting segment. Additive content, no SEO impact.

---

### Priority 7 — Use PostHog data to validate assumptions
**Impact: Diagnostic | Effort: None (analysis only)**

Before investing deeper effort, check PostHog for:
- OS/device breakdown of direct traffic (confirms or disproves the device-mismatch theory)
- Which pages direct traffic lands on (support pages = already have the app; homepage = convertible)
- Scroll depth on the homepage for direct traffic

---

## What Not to Change

- **Hero headline and structure** — clear and functional for high-intent visitors
- **FAQ and schema markup** — doing important SEO work
- **Popups or exit-intent modals** — ChatGPT and Google traffic converts cleanly without them; adding friction hurts the already-working segments
- **Email capture as primary CTA** — the goal is App Store downloads; email capture for Android visitors (Priority 5) is fine but should not dilute the primary CTA

---

## Expected Impact Summary

| Priority | Action | Effort | Estimated lift |
|---|---|---|---|
| 1 | QR code for desktop visitors | Medium | Largest single gain |
| 2 | CTA after "Stop arguing" section | Minimal | 2–4% absolute |
| 3 | CTA after reviews grid | Minimal | 1–3% absolute |
| 4 | Button text → "Download Free" | Minimal | 1–2% absolute |
| 5 | Android device-aware messaging | Medium | Friction reduction |
| 6 | Mid-content CTAs on comparison pages | Medium | Lifts already-performing segment |
| 7 | PostHog data analysis | None | Validates next steps |

Implementing Priorities 1–4 should move overall CVR from ~29% toward 35–40%, primarily by recovering conversions from direct desktop traffic that currently has no path to download.
