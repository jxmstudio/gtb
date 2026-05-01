import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectsShowcase } from '@/components/marketing/ProjectsShowcase';
import PartnerLogos from '@/components/marketing/PartnerLogos';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Our Projects | Melbourne Custom Home Builder Portfolio | TOFA Group",
  description: "Recent TOFA Group homes and commercial builds across Melbourne — Truganina, Clyde North, Glen Waverley, Ascot Vale. Real addresses, real builds, no stock photos.",
  alternates: { canonical: 'https://www.tofagroup.com.au/projects' },
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gtb-navy">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/projects/44-yucamane-truganina/featured.jpg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gtb-navy/95 via-gtb-navy/80 to-gtb-navy/50" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-gtb-aero border border-white/20 px-3 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide">
                <span className="w-1.5 h-1.5 bg-gtb-aero rounded-full" />
                Portfolio · 2024 – 2025
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-brand">
                Real projects. Real addresses.
              </h1>
              <p className="text-lg lg:text-xl text-white/75 leading-relaxed mb-8 max-w-2xl">
                Every TOFA build is custom — different block, different brief, different brief. Below are
                five recent homes and our flagship Ascot Vale showroom. No stock photos, no rendered concepts.
                If you can&apos;t drive past it, it&apos;s not on this page.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
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
            </div>
          </div>
        </section>

        {/* Projects Showcase — 5 real builds */}
        <ProjectsShowcase />

        {/* Partner Logos — credibility through suppliers */}
        <PartnerLogos />

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-gtb-navy to-gtb-navy-light text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight font-brand">
              Want a build like these?
            </h2>
            <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute consultation. We&apos;ll talk about your block, your brief, and your
              budget — and give you a straight answer on what&apos;s possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-10 py-4 rounded-lg text-base font-semibold shadow-lg transition-colors inline-flex items-center justify-center group"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:1300000685"
                className="bg-white text-gtb-navy hover:bg-gray-100 px-10 py-4 rounded-lg text-base font-semibold shadow-lg transition-colors inline-flex items-center justify-center"
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
