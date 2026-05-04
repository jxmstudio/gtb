'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { analytics } from '@/lib/analytics';

/**
 * MeetTheTeam — about-page section that puts Tara Tofa on camera as the
 * face of TOFA Group's client-relations and admin side. Brand-owner
 * positioning (per Aaron's "purely my wife and my brother" instruction)
 * rather than a customer testimonial slot.
 *
 * Layout: vertical video (9:16) on the left at desktop sizes, copy on the
 * right. Same click-to-play modal pattern as VideoTestimonials so the
 * UX stays consistent across the site.
 */

const VIDEO_SRC = '/team/tara/video.mp4';
const POSTER_SRC = '/team/tara/poster.webp';
const CLIENT_NAME = 'Tara Tofa';

export function MeetTheTeam() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Body scroll lock
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // ESC closes modal
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
    analytics.track({
      action: 'team_video_open',
      category: 'engagement',
      label: CLIENT_NAME,
    });
  };

  return (
    <>
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Video card */}
            <div className="lg:col-span-5">
              <button
                type="button"
                onClick={handleOpen}
                className="group relative aspect-[9/16] w-full max-w-sm mx-auto lg:max-w-none overflow-hidden rounded-2xl bg-gtb-navy shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url('${POSTER_SRC}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gtb-navy/85 via-gtb-navy/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/95 group-hover:bg-gtb-aero text-gtb-navy group-hover:text-white shadow-2xl flex items-center justify-center transition-colors">
                    <span className="sr-only">Play video — meet Tara Tofa</span>
                    <Play className="h-7 w-7 lg:h-8 lg:w-8 fill-current ml-1" aria-hidden="true" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
                  <div className="text-xs font-bold text-gtb-aero mb-2 tracking-widest uppercase">
                    Meet the team
                  </div>
                  <div className="text-xl font-semibold">{CLIENT_NAME}</div>
                  <div className="text-sm text-white/80">Director · Client Relations</div>
                </div>
              </button>
            </div>

            {/* Copy */}
            <div className="lg:col-span-7">
              <div className="text-xs font-bold text-gtb-aero mb-3 tracking-widest uppercase">
                People behind TOFA
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gtb-navy leading-tight font-brand mb-6">
                A family-run builder, run like a business.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  TOFA Group is run by directors Tara and Aaron — a brother-and-sister-in-law team
                  who&apos;ve spent the last 15 years building homes across Melbourne&apos;s
                  northwest. Tara handles client relations, finance coordination, and the day-to-day
                  rhythm of every project; Aaron drives operations, builder partnerships, and
                  on-site delivery.
                </p>
                <p>
                  No anonymous account managers, no offshore call centres. When you ring TOFA
                  Group, you&apos;re talking to the people whose names are on the contract —
                  and that means you get straight answers, faster decisions, and a build that
                  stays on track.
                </p>
              </div>
              <Link
                href="/team"
                className="inline-flex items-center text-gtb-navy hover:text-gtb-aero font-semibold group"
              >
                Meet the full team
                <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gtb-navy/90 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Video — meet ${CLIENT_NAME}`}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
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
              src={VIDEO_SRC}
              poster={POSTER_SRC}
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
