'use client';

import { useEffect, useState } from 'react';

/**
 * Hero background video with mobile-aware playback.
 *
 * Strategy:
 *  - Always renders the poster image immediately (sharp, ~70 KB).
 *  - On desktop (≥768px) and unless the user prefers reduced data, autoplays
 *    a 1080p ~6 MB H.264 loop with audio stripped.
 *  - On mobile (<768px), shows the poster only; the small mobile video is
 *    available as a fallback `<source>` but never autoplayed.
 *  - Uses `preload="metadata"` so even on desktop only ~50 KB of video metadata
 *    is fetched until autoplay starts.
 *
 * Source: 25-second cut from `44 Yucamane Dr_TOFA_V3_Horizontal.mp4`
 * (encoded with `ffmpeg -c:v libx264 -preset slow -crf 23 -an`).
 */
export function HeroVideo() {
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    // `prefers-reduced-data` is a privacy-respecting hint that the user is on
    // a metered connection. Honour it on every viewport size.
    const reducedData = window.matchMedia('(prefers-reduced-data: reduce)').matches;
    if (isDesktop && !reducedData) setShouldPlay(true);
  }, []);

  return (
    <video
      key={shouldPlay ? 'play' : 'pause'}
      poster="/hero/hero-poster.jpg"
      autoPlay={shouldPlay}
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
      aria-hidden="true"
    >
      {/* Desktop: 1080p ~6 MB */}
      <source src="/hero/hero-desktop.mp4" media="(min-width: 768px)" type="video/mp4" />
      {/* Mobile: 720p ~2 MB — only used if user explicitly plays */}
      <source src="/hero/hero-mobile.mp4" type="video/mp4" />
    </video>
  );
}
