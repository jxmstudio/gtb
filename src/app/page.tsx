import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import Testimonials from '@/components/marketing/Testimonials';
import PartnerLogos from '@/components/marketing/PartnerLogos';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Award,
  Building2,
  Phone,
  Home as HomeIcon,
  Wrench,
  Layers,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Custom Home Builder Melbourne | TOFA Group",
  description: "Melbourne's trusted custom home builder. TOFA Group builds quality homes and commercial projects across Melbourne & surrounds — Avondale Heights, Essendon, Moonee Ponds, Keilor and beyond. Free consultation.",
};

const services = [
  {
    index: '01',
    icon: HomeIcon,
    title: 'Custom Homes',
    badge: 'Residential',
    desc: 'Bespoke residential builds designed around your block, your brief, and your budget. No volume builder compromises.',
    href: '/services/residential-construction',
  },
  {
    index: '02',
    icon: Building2,
    title: 'Knockdown Rebuild',
    badge: 'Knockdown',
    desc: 'Demolish the old, build the new. Stay in the suburb you love with a home built for how you live today.',
    href: '/services/knockdown-rebuild',
  },
  {
    index: '03',
    icon: Wrench,
    title: 'Renovations & Extensions',
    badge: 'Renovations',
    desc: 'Second storey additions, rear extensions, full interior renovations — we work around what\'s already there.',
    href: '/services/renovations-extensions',
  },
  {
    index: '04',
    icon: Layers,
    title: 'Design & Build',
    badge: 'Design',
    desc: 'One team from concept to keys. Our design and construction process eliminates costly handover gaps.',
    href: '/services/design-and-build',
  },
  {
    index: '05',
    icon: HomeIcon,
    title: 'Turnkey Homes',
    badge: 'Turnkey',
    desc: 'Fully finished homes ready to move in — we handle everything from design to handover.',
    href: '/services/residential-construction',
  },
  {
    index: '06',
    icon: Users,
    title: 'Co-Living',
    badge: 'Co-Living',
    desc: 'Purpose-built co-living and multi-unit developments designed for modern shared living.',
    href: '/services/residential-construction',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    desc: 'We come to you. Assess your site, understand your brief, and give you a straight answer on what\'s possible.',
  },
  {
    number: '02',
    title: 'Design & Quote',
    desc: 'Detailed drawings, fixed-price contract, full scope of works. No surprises when the slab goes down.',
  },
  {
    number: '03',
    title: 'Build',
    desc: 'We manage every trade, every inspection, every milestone. Weekly updates and full site access throughout.',
  },
  {
    number: '04',
    title: 'Handover',
    desc: 'Final inspection, keys in hand, warranty documents provided. Our relationship doesn\'t end at completion.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Trust Bar */}
        <div className="bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-3">
              {[
                { icon: Shield, label: 'Working with Licensed Builders' },
                { icon: Award, label: 'Registered Building Practitioner' },
                { icon: CheckCircle, label: 'Fully Insured' },
                { icon: Clock, label: 'On-Time Delivery Guarantee' },
                { icon: Building2, label: '15+ Years Experience' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Icon className="h-4 w-4 text-gtb-aero flex-shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Project */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="relative h-[500px] lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gtb-navy/70 to-gtb-navy/30 z-10"></div>
                <div className="absolute inset-0 bg-[url('/tofaphotos/Verv_PROJECTS_Terano.jpg')] bg-cover bg-center"></div>
                <div className="absolute bottom-8 left-8 z-20 text-white">
                  <div className="bg-gtb-aero text-white px-4 py-1.5 rounded text-xs font-bold inline-block mb-3 tracking-wider uppercase">
                    Residential Construction
                  </div>
                  <h3 className="text-3xl font-bold mb-1">Modern Family Homes</h3>
                  <p className="text-white/80 text-sm">Quality builds across Melbourne &amp; surrounds</p>
                </div>
              </div>

              {/* Copy */}
              <div>
                <div className="text-xs font-bold text-gtb-aero mb-4 tracking-widest uppercase">Our Expertise</div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-6 leading-tight">
                  Building Excellence Across Melbourne &amp; Surrounds
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  TOFA Group delivers quality residential and commercial construction across Avondale Heights,
                  Essendon, Moonee Ponds, Keilor and surrounding suburbs. From initial consultation to final
                  handover, we manage every stage of your build with full transparency and on-time delivery.
                </p>

                <div className="grid sm:grid-cols-2 gap-5 mb-10">
                  {[
                    { icon: Shield, title: 'Licensed & Insured', desc: 'Full compliance and warranty coverage' },
                    { icon: Clock, title: 'On-Time Delivery', desc: 'Proven track record of completion' },
                    { icon: Award, title: 'Quality Assured', desc: 'Rigorous standards and inspections' },
                    { icon: Building2, title: 'Full Project Management', desc: 'End-to-end construction oversight' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="bg-gtb-aero/10 p-2 rounded-lg flex-shrink-0">
                        <Icon className="h-5 w-5 text-gtb-aero" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gtb-navy mb-0.5 text-sm">{title}</h4>
                        <p className="text-xs text-gray-500">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/projects"
                  className="inline-flex items-center bg-gtb-navy hover:bg-gtb-navy-light text-white px-8 py-4 rounded-lg font-semibold transition-colors group"
                >
                  View Our Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

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
                      Learn more
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Project Photo Strip */}
        <section className="bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
            <div className="text-xs font-bold text-gtb-aero mb-3 tracking-widest uppercase">Our Work</div>
            <h2 className="text-4xl font-bold text-gtb-navy">Recent Projects</h2>
          </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 h-[260px] lg:h-[320px]">
          {[
            { src: '/tofaphotos/Verv_PROJECTS_Terano.jpg', label: 'Terano' },
            { src: '/tofaphotos/Verv_PROJECTS_Amara.jpg', label: 'Amara' },
            { src: '/tofaphotos/Verv_PROJECTS_Alma.jpg', label: 'Alma' },
            { src: '/tofaphotos/Verv_PROJECTS_Acacia.jpg', label: 'Acacia' },
          ].map(({ src, label }) => (
            <div key={label} className="relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${src}')` }}
              />
              <div className="absolute inset-0 bg-gtb-navy/40 group-hover:bg-gtb-navy/20 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">{label}</span>
              </div>
            </div>
          ))}
        </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-gtb-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="text-xs font-bold text-gtb-aero mb-3 tracking-widest uppercase">How It Works</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Four Steps. One Builder.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={step.number} className="relative">
                  {/* Connector line — desktop only, not on last item */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(100%_-_16px)] w-8 h-px bg-gtb-aero/40 z-10" />
                  )}
                  <div className="text-5xl font-bold text-gtb-aero mb-3 leading-none font-brand">
                    {step.number}
                  </div>
                  <div className="w-8 h-0.5 bg-gtb-aero mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-14 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: '500+', label: 'Projects Completed' },
                { num: '15+', label: 'Years Experience' },
                { num: '$75M+', label: 'Projects Delivered' },
                { num: '98%', label: 'Client Satisfaction' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-1 font-brand">{num}</div>
                  <div className="text-sm text-gray-500 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <PartnerLogos />

        {/* Testimonials */}
        <Testimonials />

        {/* CTA */}
        <section className="py-16 bg-gtb-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/tofaphotos/Verv_PROJECTS_Clara.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Start Your Build?
            </h2>
            <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">
              Free consultation. No obligation. We&apos;ll assess your block and give you a straight answer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
