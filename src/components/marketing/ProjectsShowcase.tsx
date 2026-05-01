import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

/**
 * Projects Showcase — Verv-style vertical project card stack.
 *
 * Five real recent TOFA builds. Each card uses real address + suburb +
 * service-type chip. Vertical stack (not grid) gives each project room to
 * breathe and matches the cadence of Verv's "Our Projects" listing page.
 *
 * Photos source: public/projects/<slug>/hero.jpg (extracted from project
 * walkthrough videos via ffmpeg).
 */

export type ProjectShowcaseItem = {
  slug: string;
  name: string;
  suburb: string;
  service: string;
  blurb: string;
  image: string;
  /** Optional second photo revealed on hover. Falls back to `image` if absent. */
  imageHover?: string;
  href: string;
};

export const featuredProjects: ProjectShowcaseItem[] = [
  {
    slug: '44-yucamane-truganina',
    name: 'Truganina',
    suburb: 'Melbourne West, VIC',
    service: 'Custom Family Home',
    blurb: 'Four-bedroom build on a 480m² block. 2.7m ceilings, full-stone kitchen, double-glazed throughout. Delivered three weeks ahead of schedule.',
    image: '/projects/44-yucamane-truganina/hero.jpg',
    imageHover: '/projects/44-yucamane-truganina/alt.jpg',
    href: '/projects',
  },
  {
    slug: '116-mckenzie-clyde-north',
    name: 'Clyde North',
    suburb: 'Melbourne South-East, VIC',
    service: 'Custom Home',
    blurb: 'A growing-family home in Clyde North. Open-plan living, integrated outdoor entertaining, and a streetscape that fits the heritage overlay.',
    image: '/projects/116-mckenzie-clyde-north/hero.jpg',
    imageHover: '/projects/116-mckenzie-clyde-north/alt.jpg',
    href: '/projects',
  },
  {
    slug: '10-lena-cr-truganina',
    name: 'Truganina',
    suburb: 'Melbourne West, VIC',
    service: 'Custom Home — Returning Client',
    blurb: 'A second TOFA build for a returning client. Brief refined from build #1 — bigger pantry, dedicated study, and a quieter master orientation.',
    image: '/projects/10-lena-cr-truganina/hero.jpg',
    imageHover: '/projects/10-lena-cr-truganina/alt.jpg',
    href: '/projects',
  },
  {
    slug: '268-mt-alexander-ascot-vale-showroom',
    name: 'Ascot Vale',
    suburb: 'Melbourne North-West, VIC',
    service: 'TOFA Showroom · Commercial',
    blurb: 'Our flagship Ascot Vale showroom. Full retail fit-out and material library — drop in to see finishes, fittings, and signature joinery in person.',
    image: '/projects/268-mt-alexander-ascot-vale-showroom/hero.jpg',
    imageHover: '/projects/268-mt-alexander-ascot-vale-showroom/alt.jpg',
    href: '/projects',
  },
  {
    slug: 'glen-waverley',
    name: 'Glen Waverley',
    suburb: 'Melbourne South-East, VIC',
    service: 'Knockdown Rebuild',
    blurb: 'Knockdown rebuild on a tight inner-east block. Family kept their suburb, school zone, and street — and got a brand-new home built to their brief.',
    image: '/projects/glen-waverley/hero.jpg',
    imageHover: '/projects/glen-waverley/alt.jpg',
    href: '/projects',
  },
];

export function ProjectsShowcase() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <div className="text-xs font-bold text-gtb-aero mb-3 tracking-widest uppercase">
              Recent Builds
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gtb-navy leading-tight font-brand">
              Real projects. Real addresses.
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Five TOFA Group homes recently delivered across Melbourne. Click any project to see
              the build story.
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

        <div className="space-y-6 lg:space-y-8">
          {featuredProjects.map((project, i) => (
            <Link
              key={project.slug}
              href={project.href}
              className="group block"
            >
              <article className={`grid lg:grid-cols-12 gap-6 lg:gap-10 items-center bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gtb-aero hover:shadow-xl transition-all ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                {/* Photo — primary always loaded; hover image cross-fades on top */}
                <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-gtb-navy">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  {project.imageHover && (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 motion-safe:duration-500"
                      style={{ backgroundImage: `url('${project.imageHover}')` }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Copy */}
                <div className="lg:col-span-5 p-6 lg:p-10">
                  <div className="inline-flex items-center text-xs font-bold text-gtb-aero mb-3 tracking-widest uppercase">
                    {project.service}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gtb-navy mb-2 leading-tight font-brand group-hover:text-gtb-aero transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-5">
                    <MapPin className="h-3.5 w-3.5 mr-1.5 text-gtb-aero" />
                    {project.suburb}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{project.blurb}</p>
                  <span className="inline-flex items-center text-gtb-navy font-semibold text-sm group-hover:text-gtb-aero transition-colors">
                    View project
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
