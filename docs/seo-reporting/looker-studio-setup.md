# Looker Studio Dashboard — Setup Guide

One-time setup (~45 minutes). Produces a shareable, auto-updating dashboard you can send to TOFA Group as a view-only link. Data refreshes daily. Free.

---

## Prerequisites

- A Google account with **owner or full access** to:
  - Google Search Console property for `www.tofagroup.com.au`
  - Google Analytics 4 property for tofagroup.com.au (created before this; see `docs/seo-reporting/ga4-setup.md` if needed)
- Browser signed in to that Google account

---

## Step 1 — Create a blank report

1. Go to https://lookerstudio.google.com
2. Click **Create → Report** (top-left, blue + button)
3. A blank report canvas opens with a "Add data to report" modal

---

## Step 2 — Connect Google Search Console

1. In the data source picker, search for **Search Console**
2. Select it, then authenticate if prompted
3. Pick:
   - Site: `sc-domain:tofagroup.com.au` **OR** `https://www.tofagroup.com.au/`
   - Table: **URL impression** (gives per-page metrics, not just site-level)
4. Click **Add** → **Add to report**
5. You'll see a default table appear. Delete it — we'll build custom widgets.

---

## Step 3 — Connect Google Analytics 4

1. Top bar → **Add data** → **Google Analytics**
2. Authenticate, pick the TOFA account → TOFA Group property → default web data stream
3. Click **Add** → **Add to report**

You now have two data sources connected. Confirm via **Resource → Manage added data sources**.

---

## Step 4 — Build Page 1: Search Performance (GSC)

Rename the current page to **"Search Performance"** (click page tab at top, rename).

### Date range control
1. **Insert → Date range control**
2. Place at top-right
3. Default: **Last 28 days** with **Compare to previous period** toggled ON

### Scorecards (row of 4)
Insert → **Scorecard** × 4. For each:
- Data source: **Search Console**
- Configure metric, title, and comparison as below

| Title | Metric | Comparison |
|---|---|---|
| Total Clicks | `Url Clicks` | vs. previous period |
| Total Impressions | `Impressions` | vs. previous period |
| Avg CTR | `Url CTR` (format: %) | vs. previous period |
| Avg Position | `Average Position` (lower = better, flip comparison colours in Style) | vs. previous period |

### Time-series chart
- **Insert → Time series**
- Data source: Search Console
- Dimension: `Date`
- Metrics: `Url Clicks`, `Impressions` (dual Y-axis in Style tab)
- Title: "Clicks & Impressions over time"

### Top queries table
- **Insert → Table**
- Data source: Search Console
- Dimension: `Query`
- Metrics: `Url Clicks`, `Impressions`, `Url CTR`, `Average Position`
- Sort: `Url Clicks` descending
- Rows: 25
- Title: "Top 25 search queries"

### Top pages table
- Duplicate the query table, then change dimension to `Landing Page`
- Title: "Top 25 landing pages (from search)"

### Device breakdown (optional)
- **Insert → Donut chart**
- Dimension: `Device`, Metric: `Url Clicks`

---

## Step 5 — Build Page 2: Traffic & Users (GA4)

**Insert → Page → New page** (top-left page menu). Rename **"Traffic & Users"**.

### Scorecards (row of 4)

| Title | Metric |
|---|---|
| Users | `Total users` |
| Sessions | `Sessions` |
| Avg engagement time | `Average engagement time per session` |
| Engaged sessions % | `Engagement rate` |

All with "vs. previous period" comparison.

### Time-series
- Dimension: `Date`
- Metrics: `Sessions`, `Total users`

### Channel donut
- Dimension: `Session default channel group`
- Metric: `Sessions`

### Top landing pages table
- Dimension: `Landing page + query string` (or `Landing page`)
- Metrics: `Sessions`, `Users`, `Engagement rate`, `Conversions`
- Sort: `Sessions` desc, 10 rows

### Geo map
- **Insert → Google Map**
- Dimension: `Region` (filter to Country = Australia in the filter panel)
- Metric: `Sessions`

---

## Step 6 — Build Page 3: Conversions

New page → rename **"Conversions"**.

### GA4 event scorecards (row of 3)

Filter each to a specific event name.

| Title | Metric | Filter |
|---|---|---|
| Phone clicks | `Event count` | Event name = `click` (or custom `phone_click` once configured — see note) |
| "Free Consultation" CTA clicks | `Event count` | Event name contains `button_click`, label contains "Free Consultation" |
| Lead form submits | `Event count` | Event name = `generate_lead` |

> Note: phone-click tracking relies on GA4's Enhanced Measurement "outbound click" auto-event. Confirm it's ON in **GA4 → Admin → Data Streams → Web stream → Enhanced measurement**.

### Manual lead count (updated monthly)
- **Insert → Scorecard** with no data source. In the content field type the prior-month count pulled from Google Sheets.
- Title: "Leads (Google Sheets) — <Month>"
- We update this field manually as part of the monthly workflow.

---

## Step 7 — Brand the dashboard

1. **Theme and layout** (right-hand panel when nothing selected)
2. Custom theme colours:
   - Primary: `#0A3370` (gtb-navy)
   - Accent: `#00B4CD` (gtb-aero)
   - Background: white
3. **Insert → Image** — upload `public/TofaGroup_Logo_Green_Web_1920px.png` from the repo and place top-left on every page
4. **Insert → Text** — add footer on each page: "Prepared by [agency name] · Data live from Google Search Console & GA4 · Updated daily"

---

## Step 8 — Share with the client

1. Top-right **Share → Share with others**
2. Add client email → set to **Viewer**
3. Copy the link — this is the link you send each month with the invoice
4. Optional: schedule an emailed PDF (**Share → Schedule delivery**) for the 1st of each month

---

## Troubleshooting

- **"No data" on GSC widgets**: GSC has a 2-day lag. If the site was just verified, wait 48h.
- **GA4 widgets empty**: GA4 takes up to 24–48h to populate historical data after first install. Use **Realtime** in GA4 to confirm the tag is firing.
- **Scorecard comparison shows up as grey**: make sure the date-range control is on the page and the scorecard's date range is set to "Auto" (inherit from control).
- **Too many rows in tables**: add a filter for **Country = Australia** if you want local-only traffic.
