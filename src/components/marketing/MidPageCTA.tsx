import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

/**
 * Mid-page conversion banner — sits between the Projects Showcase and the
 * Video Testimonials sections.
 *
 * Verv Group runs a similar "ENQUIRE NOW" strip at the same scroll position;
 * the pattern works because by this point the visitor has seen real recent
 * builds and is at peak interest. One line, one primary action, one phone
 * fallback — no hesitation real-estate.
 */
export function MidPageCTA() {
  return (
    <section className="relative py-14 lg:py-16 bg-gtb-aero overflow-hidden">
      {/* Subtle diagonal pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(255,255,255,0.4) 14px, rgba(255,255,255,0.4) 15px)',
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-white/80 mb-2 tracking-widest uppercase">
              Ready when you are
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight font-brand">
              Want a build like these? Get a fixed-price quote in 7 days.
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gtb-navy font-semibold px-7 py-3.5 rounded-lg transition-colors group whitespace-nowrap shadow-lg"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="tel:1300000685"
              className="inline-flex items-center justify-center border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-lg transition-colors whitespace-nowrap"
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
