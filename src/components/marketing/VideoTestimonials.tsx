'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, X, Quote } from 'lucide-react';
import { analytics } from '@/lib/analytics';

/**
 * Video Testimonials — biggest single trust upgrade on the page.
 *
 * No competitor in this segment uses real customer video. TOFA has 3 ready
 * testimonials sitting in their media folder; this component surfaces them.
 *
 * Design: 3 vertical poster cards (matches the source videos' 9:16 aspect).
 * Click → modal overlay with the video playing, sound on. ESC + backdrop
 * click close. Body scroll-locked while open.
 *
 * No new dependencies — self-contained with framer-free state.
 */

type Testimonial = {
  id: string;
  client: string;
  suburb: string;
  quote: string;
  poster: string;
  video: string;
};

const testimonials: Testimonial[] = [
  {
    id: 'george',
    client: 'George',
    suburb: 'Melbourne, VIC',
    quote: '"Honest, on-time, and zero budget surprises."',
    poster: '/testimonials/george/poster.webp',
    video: '/testimonials/george/video.mp4',
  },
  {
    id: '116-mckenzie-clyde-north',
    client: 'McKenzie Family',
    suburb: 'Clyde North, VIC',
    quote: '"Treated us like family from day one to handover."',
    poster: '/testimonials/116-mckenzie-clyde-north/poster.webp',
    video: '/testimonials/116-mckenzie-clyde-north/video.mp4',
  },
  {
    id: '10-lena-cr-truganina',
    client: 'Lena Crescent Family',
    suburb: 'Truganina, VIC',
    quote: '"Came back to TOFA for our second build — that says it all."',
    poster: '/testimonials/10-lena-cr-truganina/poster.webp',
    video: '/testimonials/10-lena-cr-truganina/video.mp4',
  },
];

export function VideoTestimonials() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = testimonials.find((t) => t.id === openId);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (openId) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [openId]);

  // ESC closes modal
  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenId(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openId]);

  const handleOpen = (id: string, client: string) => {
    setOpenId(id);
    analytics.track({
      action: 'video_testimonial_open',
      category: 'engagement',
      label: client,
    });
  };

  return (
    <>
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <div className="text-xs font-bold text-gtb-aero mb-3 tracking-widest uppercase">
              Testimonials
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gtb-navy leading-tight font-brand">
              What our clients say.
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Real homeowners. Real builds. Pressed play instead of pressed PR.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => handleOpen(t.id, t.client)}
                className="group relative aspect-[9/16] sm:aspect-[3/4] lg:aspect-[9/14] overflow-hidden rounded-2xl bg-gtb-navy shadow-lg hover:shadow-2xl transition-shadow text-left"
              >
                {/* Poster */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url('${t.poster}')` }}
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gtb-navy/95 via-gtb-navy/30 to-transparent" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/95 group-hover:bg-gtb-aero text-gtb-navy group-hover:text-white shadow-2xl flex items-center justify-center transition-colors">
                    <Play className="h-7 w-7 lg:h-8 lg:w-8 fill-current ml-1" />
                  </div>
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Quote className="h-5 w-5 text-gtb-aero mb-3" aria-hidden="true" />
                  <span className="sr-only">Play video testimonial: </span>
                  <p className="text-base lg:text-lg font-semibold leading-snug mb-3">
                    {t.quote}
                  </p>
                  <div className="text-sm font-medium">{t.client}</div>
                  <div className="text-xs text-white/70">{t.suburb}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gtb-navy/90 backdrop-blur-sm"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Video testimonial — ${open.client}`}
        >
          <button
            type="button"
            onClick={() => setOpenId(null)}
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative w-full max-w-md aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={open.video}
              poster={open.poster}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
