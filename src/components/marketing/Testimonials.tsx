"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Testimonial {
  id: string;
  name: string;
  suburb: string;
  quote: string;
  rating: number;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah & Michael Chen",
    suburb: "Melbourne, VIC",
    quote: "TOFA Group delivered our residential project on time and within budget. The quality of workmanship exceeded our expectations and the team was professional throughout the entire build.",
    rating: 5,
    project: "Custom 4BR Family Home",
  },
  {
    id: "2",
    name: "David Rodriguez",
    suburb: "Sydney, NSW",
    quote: "Outstanding construction management from start to finish. Every stage was completed to the highest standard and communication was excellent throughout the project.",
    rating: 5,
    project: "Commercial Renovation",
  },
  {
    id: "3",
    name: "Emma Thompson",
    suburb: "Brisbane, QLD",
    quote: "The Build Now, Pay Later option made our dream home possible. The flexibility in payment combined with quality construction made all the difference.",
    rating: 5,
    project: "New Residential Build",
  },
  {
    id: "4",
    name: "James & Lisa Wilson",
    suburb: "Perth, WA",
    quote: "Professional service from consultation through to handover. TOFA Group's attention to detail and commitment to quality really set them apart.",
    rating: 5,
    project: "Luxury Family Home",
  },
  {
    id: "5",
    name: "Maria Santos",
    suburb: "Adelaide, SA",
    quote: "Excellent project management and quality construction. The team handled everything professionally and delivered exactly what was promised.",
    rating: 5,
    project: "Duplex Development",
  },
  {
    id: "6",
    name: "Robert & Jennifer Lee",
    suburb: "Gold Coast, QLD",
    quote: "From planning to completion, TOFA Group exceeded our expectations. The build quality is exceptional and we couldn't be happier with the result.",
    rating: 5,
    project: "Coastal Property Build",
  },
];

// Each card is 380px wide + 24px gap = 404px per slot.
// One full set of 6 cards = 6 × 380 + 5 × 24 = 2400px
const CARD_WIDTH = 380;
const GAP = 24;
const FULL_SET_WIDTH = testimonials.length * CARD_WIDTH + (testimonials.length - 1) * GAP;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Section header — constrained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center">
          <div className="text-xs font-bold text-gtb-aero mb-3 tracking-widest uppercase">
            Client Feedback
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Trusted by homeowners and businesses across Melbourne&apos;s northwest
          </p>
        </div>
      </div>

      {/* Full-width carousel — NOT inside max-w-7xl */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex flex-nowrap"
          style={{ gap: `${GAP}px`, paddingLeft: `${GAP}px`, paddingRight: `${GAP}px` }}
          animate={{ x: [0, -FULL_SET_WIDTH - GAP] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
          suppressHydrationWarning
        >
          {duplicated.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="flex-shrink-0 bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gtb-aero/30 hover:shadow-lg transition-all"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              <StarRating count={t.rating} />

              <svg className="h-7 w-7 text-gtb-aero/40 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm min-h-[100px]">
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gtb-navy flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gtb-navy text-sm truncate">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.suburb}</div>
                  <div className="text-xs text-gtb-aero font-medium mt-0.5">{t.project}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA — constrained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-gtb-navy hover:bg-gtb-navy-light text-white rounded-lg transition-colors font-semibold text-base"
        >
          Start Your Build Today
        </Link>
      </div>
    </section>
  );
}
