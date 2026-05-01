import Link from 'next/link';
import { ArrowRight, PencilRuler, HardHat, ClipboardCheck } from 'lucide-react';

/**
 * Integrated Services Strip — sits directly under the hero.
 *
 * Inspired by Oreana's three-pillar above-the-fold framing
 * ("Development / Construction / Investments"). For TOFA the three
 * pillars are Design / Build / Manage — the same cycle compressed
 * into one team and one contract, which is the differentiator
 * vs. volume builders.
 */

const pillars = [
  {
    icon: PencilRuler,
    title: 'Design',
    body: 'From concept sketches to council approvals, our in-house design team turns your brief into a buildable, beautifully resolved home.',
    href: '/services/design-and-build',
    cta: 'How we design',
  },
  {
    icon: HardHat,
    title: 'Build',
    body: 'Quality trades, fixed-price contracts, weekly progress updates. We build to last, and we build on time.',
    href: '/services/residential-construction',
    cta: 'How we build',
  },
  {
    icon: ClipboardCheck,
    title: 'Manage',
    body: 'Independent project management for owner-builders, investors, and clients with their own architect. We run the build; you keep your relationships.',
    href: '/services/project-management',
    cta: 'How we manage',
  },
];

export function IntegratedServices() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <div className="text-xs font-bold text-gtb-aero mb-3 tracking-widest uppercase">
            One Team
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gtb-navy leading-tight">
            Design. Build. Manage.
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Most builders hand you off between architects, contractors, and project managers — and the
            cracks are where projects go over budget. TOFA Group keeps every stage under one roof,
            one contract, one point of accountability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
          {pillars.map(({ icon: Icon, title, body, href, cta }) => (
            <Link
              key={title}
              href={href}
              className="bg-white p-8 lg:p-10 flex flex-col group hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gtb-aero/10 text-gtb-aero flex items-center justify-center mb-6 group-hover:bg-gtb-aero group-hover:text-white transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gtb-navy mb-3 font-brand">{title}</h3>
              <p className="text-gray-600 leading-relaxed flex-1 mb-6">{body}</p>
              <span className="inline-flex items-center text-gtb-aero text-sm font-semibold group-hover:text-gtb-navy transition-colors">
                {cta}
                <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
