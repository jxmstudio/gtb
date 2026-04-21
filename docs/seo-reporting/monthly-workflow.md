# Monthly Reporting Workflow — Checklist

Run this on the **1st or 2nd of every month** to produce the previous month's client report. Target: 10 minutes.

---

## Prerequisites (set up once)

- [ ] Looker Studio dashboard is live (see `looker-studio-setup.md`)
- [ ] "TOFA Monthly Report — TEMPLATE" Google Doc exists (content from `monthly-report-template.md`)
- [ ] You have read access to the TOFA lead-tracker Google Sheet (the one `GOOGLE_SHEETS_WEBHOOK_URL` writes to)
- [ ] You have editor access to the Looker Studio dashboard

---

## Each month

### 1. Pull metrics from Looker Studio (3 min)

- [ ] Open the Looker Studio dashboard
- [ ] Change the date-range control to the **previous calendar month** (e.g. on 1 May → 1 Apr – 30 Apr)
- [ ] Confirm "Compare to previous period" is ON
- [ ] Take screenshots of:
  - [ ] Page 1 scorecards (Clicks / Impressions / CTR / Avg Position)
  - [ ] Page 1 top 5 queries table
  - [ ] Page 1 top 5 landing pages table
  - [ ] Page 2 scorecards (Users / Sessions / Engagement / Organic share)
  - [ ] Page 2 top 5 landing pages table
  - [ ] Page 3 scorecards (Phone / CTA / Lead form events)
- [ ] Alternative: **File → Download → PDF** to grab the entire dashboard in one shot

### 2. Count leads from Google Sheets (2 min)

- [ ] Open the TOFA lead-tracker sheet
- [ ] Filter the `Timestamp` column to show only the previous month
- [ ] Count the visible rows — this is the monthly lead count
- [ ] Note: this is the **source of truth** for lead ROI; GA4 `generate_lead` events may drift if tracking fails, but the sheet receives every successful POST to `/api/lead`

### 3. Duplicate the template (1 min)

- [ ] Open "TOFA Monthly Report — TEMPLATE"
- [ ] **File → Make a copy** → rename to `TOFA Report — <Month> <Year>` (e.g. "TOFA Report — April 2026")
- [ ] Save in the shared TOFA client folder

### 4. Fill in the report (3 min)

- [ ] Update the header month/year
- [ ] Paste scorecard screenshots or type numbers into the tables
- [ ] Paste top queries / top pages from Looker
- [ ] Fill in the manual lead count from step 2
- [ ] Write 3-bullet **Executive Summary** (biggest win, headline metric, next-month focus)
- [ ] List **Work Delivered This Month** — be specific, name each shipped change
- [ ] Write 2–3 **Next Month Focus** priorities

### 5. Export and attach (1 min)

- [ ] **File → Download → PDF document (.pdf)**
- [ ] Verify it's still 1 page (adjust font/spacing if spilled to 2)
- [ ] Attach to the monthly invoice in your accounting tool
- [ ] Send Looker Studio dashboard link as the "live data" reference in the invoice email body

---

## Tips

- **First-of-month timing:** GSC has a 2–3 day data-lag, so numbers for the last 2 days of the month may still be settling. If precision matters, wait until the 4th to generate the report.
- **Template hygiene:** never edit the TEMPLATE doc during a monthly run — always make a copy first. If you add a new metric to the template, version-bump it.
- **When a metric is flat or negative:** be honest but give context. "Impressions -5% vs. last month reflects the Easter public-holiday search dip; Avg Position improved from 12.4 → 9.8 showing underlying quality gains."
- **Quarterly retrospective:** every 3 months, review the last 3 reports side-by-side and look for trends that single-month reports hide.

---

## Data sources at a glance

| What | Where | Lag |
|---|---|---|
| Impressions, clicks, CTR, position, queries, landing pages (search) | Google Search Console | ~2 days |
| Users, sessions, engagement, channels, geo | Google Analytics 4 | Realtime; historical ~24h |
| Lead-form submissions | Google Sheets (via `/api/lead`) | Realtime |
| Phone clicks, CTA clicks | GA4 events (from `src/lib/analytics.ts`) | ~24h |
| Indexed page count, coverage errors | Google Search Console | ~7 days |
