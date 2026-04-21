# TOFA Group — Monthly SEO Report Template

This is the master template. Copy into a Google Doc (or duplicate the existing "TOFA Monthly Report — TEMPLATE" doc), rename for the month, fill in the bracketed fields, export to PDF, and attach to the invoice.

Target: **1 page**. If it spills to 2, trim the commentary.

---

```
┌─────────────────────────────────────────────────────────────────────┐
│                     [TOFA GREEN WORDMARK]                           │
│                                                                     │
│               TOFA GROUP — SEO & TRAFFIC REPORT                     │
│                          [Month] [Year]                             │
│                                                                     │
│   Prepared by: [Agency]   ·   Live dashboard: [Looker Studio URL]   │
└─────────────────────────────────────────────────────────────────────┘
```

## Executive Summary

- **Biggest win this month:** [e.g. "LocalBusiness schema polish improves Google Business surface" / "First page of 'custom home builder Keilor' reached"]
- **Headline metric:** [e.g. "1,240 impressions (+42% MoM) · 48 clicks (+60% MoM)"]
- **Next month's focus:** [1 sentence — e.g. "Expand Keilor and Aberfeldie location content to capture top-query demand"]

## Work Delivered This Month

- [Bullet list of SEO work shipped this cycle]
- [Keep it specific — "Installed GA4", "Added FAQ rich-snippet schema", "Fixed www↔apex redirect loop", "Added canonical URLs to 16 pages", not "general SEO improvements"]

## Search Performance (Google Search Console)

> Date range: [1 <Month> <Year>] – [last day of month]. Compared to previous calendar month.

| Metric | This month | Previous month | Change |
|---|---|---|---|
| Clicks | [X] | [Y] | [+/- %] |
| Impressions | [X] | [Y] | [+/- %] |
| Avg CTR | [X %] | [Y %] | [+/- pts] |
| Avg Position | [X.X] | [Y.Y] | [+/- positions] |

### Top 5 search queries

| # | Query | Clicks | Impressions | Position |
|---|---|---|---|---|
| 1 | [query] | [n] | [n] | [n] |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

### Top 5 landing pages (from search)

| # | Page | Clicks | Impressions | Position |
|---|---|---|---|---|
| 1 | / | | | |
| 2 | /services/knockdown-rebuild | | | |
| 3 | /locations/essendon | | | |
| 4 | | | | |
| 5 | | | | |

## Traffic (Google Analytics 4)

| Metric | This month | Previous month | Change |
|---|---|---|---|
| Users | [X] | [Y] | [+/- %] |
| Sessions | [X] | [Y] | [+/- %] |
| Avg engagement time | [X:XX] | [Y:YY] | [+/- %] |
| Organic search share | [X %] | [Y %] | [+/- pts] |

### Top 5 landing pages (all traffic)

| # | Page | Sessions | Users | Engagement rate |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

## Conversions

- **Lead-form submissions (from Google Sheets):** [N]
- **Phone clicks (GA4):** [N]
- **"Free Consultation" CTA clicks (GA4):** [N]
- **Lead rate (leads / sessions):** [X.X%]

## Next Month Focus

1. [Priority 1 — e.g. "Publish 2 location content expansions (Keilor, Niddrie)"]
2. [Priority 2 — e.g. "Optimise top 3 under-performing pages by CTR"]
3. [Priority 3 — e.g. "Request first batch of Google reviews for LocalBusiness rich results"]

---

## First report — April 2026 (baseline) — PRE-FILLED

Copy this block into the first month's doc; subsequent months start from the template above.

### Executive Summary

- **Biggest win this month:** Foundation laid — 16 canonical URLs added across the site, FAQ rich-snippet schema deployed, www↔apex redirect loop fixed, LocalBusiness schema enriched with logo, project images, opening hours, and full service catalogue. All 24 indexable pages now showing in Search Console.
- **Headline metric:** Baseline month — data collection begins. MoM comparisons start in May's report.
- **Next month's focus:** Ship GA4-backed conversion reporting and begin content expansion in top-query location pages (Keilor, Aberfeldie).

### Work Delivered This Month

- Fixed www ↔ apex redirect loop (both `tofagroup.com.au` and `www.tofagroup.com.au` now resolve correctly to the www-canonical version)
- Added canonical URLs to 16 pages (homepage, 7 location pages, 7 service pages, services index)
- Added FAQ rich-snippet JSON-LD schema (eligible for Google "people also ask" rich results)
- Polished LocalBusiness schema: added `logo`, `image` array (3 project photos), `foundingDate`, `openingHoursSpecification`, and a full `hasOfferCatalog` with all 6 services
- Created branded OpenGraph social-share card (1200×630) — used by Facebook, LinkedIn, Twitter, iMessage link previews
- Replaced default Vercel favicon with TOFA Group branding (favicon, icon, apple-icon)
- Added metadata + canonical URLs to 6 previously-bare pages (projects, team, packages, first-home-buyers, investors, build-now-pay-later)
- Installed Google Analytics 4 — traffic and conversion events now flowing
- Submitted refreshed sitemaps to Google Search Console (both www and apex properties now show 24 indexed pages)

### Metrics — baseline month

> GSC will show partial-month data because the refreshed site only re-indexed mid-April. GA4 begins from [install date]. May's report will be the first full MoM comparison.

### Next Month Focus

1. Publish location content expansions for Keilor and Aberfeldie (currently placeholder-linked only)
2. Set up a Looker Studio live dashboard for the client (shareable link, daily auto-refresh)
3. Monitor rich-snippet eligibility in Search Console → Enhancements tab; resolve any warnings
