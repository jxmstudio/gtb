import Link from 'next/link';
import { ArrowRight, Bed, Bath, Maximize, Calendar } from 'lucide-react';

/**
 * Featured Project — replaces the previous "Building Excellence Across Melbourne"
 * generic-photo block with a real recent build (44 Yucamane Drive, Truganina).
 *
 * Specificity = trust. Generic stock-photo competitors can't fake an address,
 * a delivery date, and a real spec sheet.
 *
 * Design borrows from Shape Homes' specs-card pattern (bed / bath / land /
 * year), with the photo on the left and copy + specs on the right.
 */

const specs = [
  { icon: Bed, label: 'Bedrooms', value: '4' },
  { icon: Bath, label: 'Bathrooms', value: '2.5' },
  { icon: Maximize, label: 'Land size', value: '480 m²' },
  { icon: Calendar, label: 'Delivered', value: '2025' },
];

export function FeaturedProject() {
  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative aspect-[4/5] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gtb-navy">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.03]"
              style={{ backgroundImage: "url('/projects/44-yucamane-truganina/featured.webp')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gtb-navy/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 z-10 text-white">
              <div className="bg-gtb-aero text-white px-3 py-1 rounded text-xs font-bold inline-block mb-3 tracking-widest uppercase">
                Featured Build
              </div>
              <h3 className="text-2xl font-bold leading-tight font-brand">Truganina</h3>
              <p className="text-white/80 text-sm mt-1">VIC, Melbourne</p>
            </div>
          </div>

          {/* Copy + specs */}
          <div>
            <div className="text-xs font-bold text-gtb-aero mb-3 tracking-widest uppercase">
              Custom Family Home · Completed 2025
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gtb-navy mb-6 leading-tight font-brand">
              A four-bedroom family home, delivered three weeks ahead of schedule.
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                The brief: open-plan living that brings the backyard into the kitchen, a master suite that
                feels like a hotel, and finishes that age well. Built on a tight 480m² block with strict
                planning overlays.
              </p>
              <p>
                Highlights: 2.7m ceilings throughout, full-stone kitchen island, 4-zone climate control,
                double-glazed throughout, and a Colorbond roof rated for 50 years. Delivered to a fixed
                price — no variations, no surprises.
              </p>
            </div>

            {/* Specs grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden mb-8">
              {specs.map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white p-4 text-center">
                  <Icon className="h-4 w-4 text-gtb-aero mx-auto mb-2" />
                  <div className="text-xl font-bold text-gtb-navy font-brand">{value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center bg-gtb-navy hover:bg-gtb-navy-light text-white px-7 py-3.5 rounded-lg font-semibold transition-colors group"
            >
              View all projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
