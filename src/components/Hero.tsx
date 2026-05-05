import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { HeroVideo } from './HeroVideo';

interface HeroProps {
  headline?: string;
  subline?: string;
}

/**
 * Homepage hero — Carvera Group-inspired premium real-estate aesthetic.
 *
 * Full-viewport cinematic video, minimal typography, content positioned
 * bottom-left, neutral white-on-dark with one gtb-aero accent for the
 * eyebrow. Floating stat cards from the previous version moved off the
 * hero (the homepage already shows hard numbers in the Featured Project
 * specs and the Process / Final-CTA sections — repeating them in the
 * hero diluted the cinematic feel).
 *
 * Mobile note: HeroVideo only autoplays on >=768px. Mobile users see the
 * sharp WebP poster instantly with no autoplay video — protects iOS data
 * costs and avoids first-paint jank.
 */
export function Hero({
  headline = "Built once. Built right.",
  subline = "Premium homes, designed and delivered by one team. From concept sketches to handover keys, TOFA Group runs every stage of your build under a single contract — across Melbourne and surrounds.",
}: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Cinematic background video */}
      <HeroVideo />

      {/* Gradient overlay — light at top so the footage breathes, heavier
          at the bottom for headline legibility. */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

      {/* Content — bottom-left anchored, generous bottom padding */}
      <div className="relative z-10 flex min-h-screen items-end px-6 md:px-12 lg:px-20 pb-20 lg:pb-28 pt-32">
        <div className="max-w-4xl text-white">

          {/* Eyebrow */}
          <p className="mb-6 text-xs lg:text-sm font-semibold uppercase tracking-[0.3em] text-gtb-aero">
            Property · Design · Build
          </p>

          {/* Headline */}
          <h1 className="font-brand text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
            {headline}
          </h1>

          {/* Subline */}
          <p className="max-w-2xl text-base md:text-lg leading-7 text-white/85 mb-10">
            {subline}
          </p>

          {/* CTAs — pill-shaped, white primary on dark video */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gtb-navy transition hover:bg-white/90 group shadow-lg"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="tel:1300000685"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-gtb-navy"
            >
              <Phone className="mr-2 h-4 w-4" />
              1300 000 685
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
