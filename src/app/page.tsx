import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { IntegratedServices } from '@/components/marketing/IntegratedServices';
import { HomesShowcase } from '@/components/marketing/HomesShowcase';
import { MidPageCTA } from '@/components/marketing/MidPageCTA';
import { VideoTestimonials } from '@/components/marketing/VideoTestimonials';
import Testimonials from '@/components/marketing/Testimonials';
import { HomeContactForm } from '@/components/marketing/HomeContactForm';
import { FacebookFollow } from '@/components/marketing/FacebookFollow';
import Link from 'next/link';
import {
  ArrowRight,
  Phone,
  Home as HomeIcon,
  Wrench,
  Layers,
  Users,
  Building2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Custom Home Builder Melbourne | TOFA Group",
  description: "Melbourne's trusted custom home builder. TOFA Group builds quality homes and commercial projects across Melbourne & surrounds — Avondale Heights, Essendon, Moonee Ponds, Keilor and beyond. Free consultation.",
  alternates: { canonical: 'https://www.tofagroup.com.au' },
};

const services = [
  {
    index: '01',
    icon: HomeIcon,
    title: 'Custom Homes',
    badge: 'Residential',
    desc: 'Bespoke residential builds designed around your block, your brief, and your budget. No volume builder compromises.',
    href: '/services/residential-construction',
    linkLabel: 'Custom homes',
  },
  {
    index: '02',
    icon: Building2,
    title: 'Knockdown Rebuild',
    badge: 'Knockdown',
    desc: 'Demolish the old, build the new. Stay in the suburb you love with a home built for how you live today.',
    href: '/services/knockdown-rebuild',
    linkLabel: 'Knockdown rebuilds',
  },
  {
    index: '03',
    icon: Wrench,
    title: 'Renovations & Extensions',
    badge: 'Renovations',
    desc: 'Second storey additions, rear extensions, full interior renovations — we work around what\'s already there.',
    href: '/services/renovations-extensions',
    linkLabel: 'Renovations',
  },
  {
    index: '04',
    icon: Layers,
    title: 'Design & Build',
    badge: 'Design',
    desc: 'One team from concept to keys. Our design and construction process eliminates costly handover gaps.',
    href: '/services/design-and-build',
    linkLabel: 'Design & build',
  },
  {
    index: '05',
    icon: HomeIcon,
    title: 'Turnkey Homes',
    badge: 'Turnkey',
    desc: 'Fully finished homes ready to move in — we handle everything from design to handover.',
    href: '/services/residential-construction',
    linkLabel: 'Turnkey homes',
  },
  {
    index: '06',
    icon: Users,
    title: 'Co-Living',
    badge: 'Co-Living',
    desc: 'Purpose-built co-living and multi-unit developments designed for modern shared living.',
    href: '/services/residential-construction',
    linkLabel: 'Co-living',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Preload the hero poster — it's the LCP element above the fold.
          Hoisted into <head> by Next.js automatically. */}
      <link
        rel="preload"
        as="image"
        href="/hero/hero-poster.webp"
        type="image/webp"
        fetchPriority="high"
      />
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Integrated Services Strip — Design / Build / Manage */}
        <IntegratedServices />

        {/* Services — 6 cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="text-xs font-bold text-gtb-aero mb-3 tracking-widest uppercase">What We Build</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gtb-navy">
                Construction Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.index}
                    className="bg-white p-7 flex flex-col hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-gtb-aero/10 p-2.5 rounded-lg">
                        <Icon className="h-5 w-5 text-gtb-aero" />
                      </div>
                      <span className="text-xs font-bold text-gray-300 tabular-nums">{service.index}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gtb-navy mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{service.desc}</p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-gtb-aero text-sm font-semibold group-hover:text-gtb-navy transition-colors"
                    >
                      Explore {service.linkLabel}
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Homes Showcase — 8-photo grid of recent builds */}
        <HomesShowcase />

        {/* Mid-page CTA — peak-interest conversion strip */}
        <MidPageCTA />

        {/* Video Testimonials — currently surfaces one TOFA Group brand
            testimonial. Add additional customer testimonials to the array in
            VideoTestimonials.tsx as they're recorded. */}
        <VideoTestimonials />

        {/* Text Testimonials carousel (additional social proof) */}
        <Testimonials />

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-gtb-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/projects/glen-waverley/hero.webp')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gtb-navy via-gtb-navy/85 to-gtb-navy/60"></div>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight font-brand">
              Ready to start your build?
            </h2>
            <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute consultation. We&apos;ll discuss your block, your brief, and your
              budget — no obligation, no pushy sales call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/contact"
                className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-10 py-4 rounded-lg text-base font-semibold shadow-lg transition-colors inline-flex items-center justify-center group"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:1300000685"
                className="bg-white/10 border border-white/30 text-white hover:bg-white hover:text-gtb-navy px-10 py-4 rounded-lg text-base font-semibold transition-all inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-4 w-4" />
                1300 000 685
              </a>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center text-white/70 hover:text-white text-sm font-medium group"
            >
              Or browse recent projects
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Inline lead form — posts to /api/lead which writes to Google Sheets */}
        <HomeContactForm />

        {/* Facebook follow strip before footer */}
        <FacebookFollow />
      </main>

      <Footer />
    </div>
  );
}
