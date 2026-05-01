import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { HeroVideo } from './HeroVideo';

interface HeroProps {
  headline?: string;
  subline?: string;
  showTrustIndicators?: boolean;
}

export function Hero({
  headline = "Built once. Built right.",
  subline = "TOFA Group designs, builds, and manages premium homes across Melbourne's northwest. One team, one contract, one point of accountability — from concept to handover.",
  showTrustIndicators = true,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[620px] lg:min-h-[680px]">

      {/* Background video — see HeroVideo.tsx for mobile/data-saver strategy */}
      <HeroVideo />

      {/* Overlay — left heavy for legibility, right opens up so photo breathes */}
      <div className="absolute inset-0 bg-gradient-to-r from-gtb-navy/92 via-gtb-navy/75 to-gtb-navy/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — copy */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 text-gtb-aero border border-white/20 px-3 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide">
              <span className="w-1.5 h-1.5 bg-gtb-aero rounded-full"></span>
              Melbourne · Custom Homes · Since 2010
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {headline}
            </h1>

            {/* Subline */}
            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
              {subline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gtb-aero hover:bg-gtb-aero-light text-white font-semibold px-7 py-3.5 rounded-lg transition-colors group"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="tel:1300000685"
                className="inline-flex items-center justify-center border border-white/50 text-white hover:bg-white hover:text-gtb-navy font-semibold px-7 py-3.5 rounded-lg transition-all"
              >
                <Phone className="mr-2 h-4 w-4" />
                1300 000 685
              </a>
            </div>

            {/* Trust indicators */}
            {showTrustIndicators && (
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-white/70">
                {[
                  "Licensed & insured",
                  "Fixed-price contracts",
                  "15+ years building locally",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-gtb-aero flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right — stats floating over the photo */}
          <div className="lg:pt-4">
            {/* Primary stat */}
            <div className="bg-white rounded-2xl p-8 mb-4 text-center shadow-2xl">
              <div className="text-6xl font-bold text-gtb-navy mb-1 font-brand">500+</div>
              <div className="text-gtb-aero font-semibold text-sm uppercase tracking-widest mb-1">Projects Completed</div>
              <p className="text-gray-400 text-sm">Across Melbourne &amp; surrounds</p>
            </div>

            {/* Secondary stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center shadow-xl">
                <div className="text-3xl font-bold text-gtb-navy mb-1 font-brand">$75M+</div>
                <div className="text-gray-500 text-sm font-medium uppercase tracking-wide">Delivered</div>
                <p className="text-gray-400 text-xs mt-1">In construction value</p>
              </div>
              <div className="bg-gtb-aero rounded-xl p-6 text-center shadow-xl">
                <div className="text-3xl font-bold text-white mb-1 font-brand">$2M+</div>
                <div className="text-white/80 text-sm font-medium uppercase tracking-wide">Saved</div>
                <p className="text-white/60 text-xs mt-1">By our clients vs. competitors</p>
              </div>
            </div>

            {/* Experience badge */}
            <div className="mt-4 flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3">
              <div className="flex -space-x-1">
                {['T','O','F','A'].map((letter) => (
                  <div
                    key={letter}
                    className="w-7 h-7 rounded-full bg-gtb-aero border-2 border-white/30 flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-bold">{letter}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-white">15+ years</span>
                <span className="text-white/60"> building in Melbourne</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
