# Changelog

## 2026-09-09 — Project walkthrough videos on /projects

- **Two project cards now play client-supplied walkthrough reels** instead
  of static photos (`ProjectCardVideo.tsx`, wired into
  `ProjectsShowcase.tsx`):
  - **Ascot Vale showroom** — 268 Mt Alexander Rd reel (presenter tour).
  - **Clyde North** — 116 McKenzie Drive walkthrough.
- Both sources are vertical 9:16 reels; they render contained and centred
  over a blurred still of the project rather than cropped to the card's
  16:10 slot. Autoplay muted + loop, pause off-screen
  (IntersectionObserver), sound toggle overlay (both reels have
  voiceover). Taller media slot on mobile so the reel isn't tiny.
- Originals (108MB / 164MB) compressed to ~5.5MB each with ffmpeg
  (720×1280 H.264, `-crf 27`) at `public/projects/<slug>/video.mp4`, with
  `video-poster.jpg` poster frames extracted for first paint.

## 2026-09-04 — Post-meeting website updates (lead gen + mobile UX)

All changes from the Sep 02 client meeting. Each item below was committed
separately — see git history for per-change diffs.

### Fixed
- **Projects nav link restored.** "Projects" had been dropped from the main
  nav in a previous cleanup; the page itself was fine. Re-added between
  Services and Resources (desktop + mobile menus).
- **Footer legal links removed.** "Privacy Policy", "Terms of Service" and
  "Disclaimer" pointed at pages that don't exist (404s). Removed until the
  pages are written (TODO in `Footer.tsx`).
- **Broken "Meet the Team" video hidden.** The About-page section now shows
  a static poster card (no play button/modal). The homepage testimonial
  card that reused the same video file was also removed (kept as a
  commented-out TODO).
  - **Root cause worth knowing:** `/team/tara/video.mp4` is actually a
    *customer* testimonial (speaker talks about renting/saving for a home),
    mislabeled as the team video — likely why it was reported "broken".

### Service menu restructure
- **Removed** Commercial Construction and Project Management (pages,
  nav, footer, services cards, location-page links, sitemap, structured
  data). Both URLs **301-redirect** to `/services` (`next.config.js`).
- **Added** two scaffolded service pages, in nav/footer/sitemap/schema:
  - `/services/super-kiwisaver-rollover`
  - `/services/finance`
  Both have hero, intro, key points, an inline lead form, and a
  general-information (not financial advice) disclaimer.
- **Reordered** the Services menu everywhere: Build Now, Pay Later first,
  then Super/KiwiSaver Rollover, Finance, then the residential offerings.
- Deleted the redundant `next.config.ts` (shadowed by `next.config.js`).

### Mobile UX
- **"Built across Melbourne" is now a carousel** (`HomesCarousel.tsx`)
  instead of an 8-image stacked grid: auto-rotates every 4s, swipeable on
  touch (native scroll-snap), pauses on interaction/hidden tab, disabled
  for `prefers-reduced-motion`, lazy-loads all but the first image, fixed
  aspect-ratio slides so there's no layout shift.
- **Homepage reordered for lead gen:** carousel + inline lead form moved
  directly below the hero. On a 375px viewport the form now starts ~2.3
  screen-heights down (was ~9.5) — reachable within about two scrolls.

### Content & trust
- **Testimonial thumbnail:** the walkthrough card's poster was a drone
  shot of rooftops; replaced with a face-visible frame extracted from the
  video itself. The other card already showed faces.
- **Team photo:** flagged (stock-style) Tara photo marked with a TODO;
  stays as placeholder until the client's replacement arrives.
- **Google reviews (stubbed):** new homepage section behind
  `NEXT_PUBLIC_GBP_PLACE_ID`. Renders nothing while unset; README
  documents how to enable once the client claims their GBP listing.

### QA performed
- Production build passes; route list verified (removed pages gone, new
  pages present).
- Every route + every internal link on every page returns 200; the two
  removed URLs return proper **301**s (explicit `statusCode: 301`, not
  Next's default 308).
- Sitemap verified: new pages in, removed pages out.
- Lead form tested end-to-end (UI → `/api/lead` → webhook) against a
  local webhook stub — payload correct, success state shown. Production
  still requires `GOOGLE_SHEETS_WEBHOOK_URL` to be set in Vercel.
- Lighthouse (mobile) run on the homepage — see PR/handoff notes.

### Outstanding TODOs (blocked on client)
| Item | Where |
| --- | --- |
| New "Meet the Team" video | `MeetTheTeam.tsx`, `VideoTestimonials.tsx` |
| Replacement team photo (Tara) | `src/app/team/page.tsx` |
| Carousel images for header section | `HomesShowcase.tsx` (reusing existing 8 project photos) |
| Final copy for Super/KiwiSaver Rollover + Finance pages | both new page files (interim copy flagged) |
| GBP link / Place ID (client must claim profile first) | set `NEXT_PUBLIC_GBP_PLACE_ID`, see README |
| Privacy / Terms / Disclaimer pages | restore footer links in `Footer.tsx` once written |
| Confirm "Manage" pillar copy now PM service is retired | `IntegratedServices.tsx` |

### Explicitly out of scope (per meeting)
- Chatbot (pending pricing research vs. "Tradeline" AI phone assistant)
- Paid ads setup (pending 7-day trial decision)
- Claiming the Google Business Profile (client-side action)
