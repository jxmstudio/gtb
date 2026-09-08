import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * MeetTheTeam — about-page section that puts Tara Tofa on camera as the
 * face of TOFA Group's client-relations and admin side. Brand-owner
 * positioning (per Aaron's "purely my wife and my brother" instruction)
 * rather than a customer testimonial slot.
 *
 * TODO: swap in new team video when provided. The previous video
 * (/team/tara/video.mp4) was reported broken by the client, so the
 * play button + modal have been removed and the card now shows the
 * static poster only. When the replacement video arrives, restore the
 * click-to-play modal pattern used in VideoTestimonials.tsx (this file
 * previously mirrored it — see git history).
 *
 * NOTE: the old /team/tara/video.mp4 was actually a *customer* testimonial
 * (speaker talks about renting/saving), not Tara — it was mislabeled,
 * which is likely why it was reported "broken". It now lives at
 * /testimonials/homeowner-story/ and is surfaced on the home page in
 * VideoTestimonials.tsx. The poster below is a neutral build shot until
 * the real team video/photo arrives.
 */

const POSTER_SRC = '/team/tara/poster.webp';
const CLIENT_NAME = 'Tara Tofa';

export function MeetTheTeam() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Static team photo card (video placeholder) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[9/16] w-full max-w-sm mx-auto lg:max-w-none overflow-hidden rounded-2xl bg-gtb-navy shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${POSTER_SRC}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gtb-navy/85 via-gtb-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
                <div className="text-xs font-bold text-gtb-aero mb-2 tracking-widest uppercase">
                  Meet the team
                </div>
                <div className="text-xl font-semibold">{CLIENT_NAME}</div>
                <div className="text-sm text-white/80">Director · Client Relations</div>
              </div>
            </div>
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
  );
}
