import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/**
 * HomesShowcase — eight recent TOFA homes shown as a clean photo grid.
 *
 * Source images: public/images/tofa-homes/home-01.avif .. home-08.avif
 * (8 AVIF files, 124–211 KB each, already well-compressed).
 *
 * Layout: 1-up on mobile, 2-up on small tablets, 4-up on desktop.
 * Uniform aspect-[4/3] crops keep visual rhythm consistent regardless
 * of source orientation. Subtle zoom on hover, no busy overlays — the
 * photos do the work.
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
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {homes.map((home, i) => (
            <div
              key={home.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gtb-navy/5 shadow-sm hover:shadow-lg transition-shadow"
            >
              <Image
                src={home.src}
                alt={home.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
