import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HomesCarousel } from './HomesCarousel';

/**
 * HomesShowcase — "Built across Melbourne" section, now a rotating carousel
 * instead of the previous 8-image stacked grid. The grid made the mobile
 * page extremely tall (8 full-width images) and pushed the lead form far
 * below the fold; the carousel keeps the section to one row.
 *
 * Source images: public/images/tofa-homes/home-01.avif .. home-08.avif.
 * TODO: swap in the client-supplied carousel images when provided — until
 * then we reuse the existing project photos.
 */

const homes = Array.from({ length: 8 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return {
    src: `/images/tofa-homes/home-${num}.avif`,
    alt: `TOFA Group recent home build — image ${i + 1}`,
  };
});

export function HomesShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-12">
          <div>
            <div className="text-xs font-bold text-gtb-aero mb-3 tracking-widest uppercase">
              Recent Homes
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gtb-navy leading-tight font-brand">
              Built across Melbourne.
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              A snapshot of recent TOFA Group builds — from custom family homes to knockdown
              rebuilds across Melbourne&apos;s west and north-west.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-gtb-navy hover:text-gtb-aero font-semibold whitespace-nowrap group"
          >
            View all projects
            <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <HomesCarousel images={homes} />
      </div>
    </section>
  );
}
