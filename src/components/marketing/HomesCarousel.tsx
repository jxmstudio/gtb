'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * HomesCarousel — auto-rotating, swipeable image carousel that replaced the
 * 8-image stacked grid (which made the mobile page very tall and pushed the
 * lead form far down).
 *
 * Implementation notes:
 * - Native horizontal scroll + CSS scroll-snap → swipe works on touch for
 *   free, no gesture library needed.
 * - Autoplay advances scrollLeft every AUTOPLAY_MS; it pauses on any user
 *   interaction (touch, pointer over, focus within) and while the tab is
 *   hidden, and never runs for prefers-reduced-motion users.
 * - Every slide is a fixed aspect-ratio box, so the section height is
 *   stable before/after images load → no cumulative layout shift.
 * - First image is priority-loaded; the rest lazy-load as they scroll in.
 */

const AUTOPLAY_MS = 4000;

export type CarouselImage = { src: string; alt: string };

export function HomesCarousel({ images }: { images: CarouselImage[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToSlide = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[i] as HTMLElement | undefined;
    if (slide) track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
  }, []);

  // Pause on interaction; resume after a quiet period so one tap doesn't
  // permanently stop the rotation.
  const pause = useCallback(() => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, AUTOPLAY_MS * 2);
  }, []);

  // Track which slide is in view (drives the dots + autoplay position)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const slideWidth = (track.children[0] as HTMLElement | undefined)?.offsetWidth ?? 1;
      const gap = 16; // matches gap-4 below
      setIndex(Math.round(track.scrollLeft / (slideWidth + gap)));
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  // Autoplay
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const id = setInterval(() => {
      if (pausedRef.current || document.hidden) return;
      const track = trackRef.current;
      if (!track) return;
      const count = track.children.length;
      const slideWidth = (track.children[0] as HTMLElement | undefined)?.offsetWidth ?? 1;
      const gap = 16;
      const current = Math.round(track.scrollLeft / (slideWidth + gap));
      // At wider breakpoints several slides are visible, so scrollLeft
      // clamps before the last slide's offsetLeft — detect the end by
      // position, not index, or the loop never wraps back to the start.
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      const next = atEnd ? 0 : (current + 1) % count;
      const slide = track.children[next] as HTMLElement | undefined;
      if (slide) track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const step = (dir: -1 | 1) => {
    pause();
    scrollToSlide(Math.min(images.length - 1, Math.max(0, index + dir)));
  };

  return (
    <div
      className="relative"
      onPointerDown={pause}
      onPointerEnter={pause}
      onFocus={pause}
      aria-roledescription="carousel"
      aria-label="Recent TOFA Group home builds"
    >
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            className="relative snap-center shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] aspect-[4/3] overflow-hidden rounded-xl bg-gtb-navy/5"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${images.length}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              priority={i === 0}
              loading={i === 0 ? undefined : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Prev / next arrows — desktop affordance; mobile users swipe */}
      <button
        type="button"
        onClick={() => step(-1)}
        aria-label="Previous image"
        className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gtb-navy shadow-lg items-center justify-center transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => step(1)}
        aria-label="Next image"
        className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gtb-navy shadow-lg items-center justify-center transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => {
              pause();
              scrollToSlide(i);
            }}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-gtb-aero' : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
