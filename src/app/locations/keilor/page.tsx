import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Testimonials from '@/components/marketing/Testimonials';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Luxury Home Builder Keilor | Custom Homes | TOFA Group",
  description: "Luxury custom home builder in Keilor. Family-run, fixed-price contracts, generous 700–1,000m² block expertise. Free site assessment.",
  alternates: { canonical: 'https://www.tofagroup.com.au/locations/keilor' },
};

const localPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Home Builder Keilor",
  "provider": {
    "@type": "LocalBusiness",
    "name": "TOFA Group",
    "telephone": "+611300000685",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Avondale Heights",
      "addressRegion": "VIC",
      "postalCode": "3034",
      "addressCountry": "AU"
    }
  },
  "areaServed": { "@type": "Suburb", "name": "Keilor" },
  "description": "Residential construction group working with fully licensed builders, serving Keilor and surrounding Brimbank suburbs. Based in Avondale Heights — 5 minutes from Keilor."
};

export default function KeilorPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localPageSchema) }}
      />
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[480px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/tofaphotos/Verv_PROJECTS_Terano.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-gtb-navy/50 to-gtb-navy/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16">
            <div className="flex items-center gap-2 text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">
              <MapPin className="h-4 w-4" />
              Keilor, VIC · Brimbank Council
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Luxury Home Builder in Keilor
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              Building a luxury custom home in Keilor isn&apos;t like building anywhere else in Melbourne — generous
              700–1,000m² blocks, wide streets, protected heritage trees, and street character worth respecting.
              TOFA Group has been delivering custom builds, knockdown rebuilds, and luxury extensions across Keilor
              and the surrounding north-western suburbs for 15+ years, run from our base just 5 minutes away in
              Avondale Heights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors inline-flex items-center justify-center group"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:1300000685"
                className="border-2 border-white text-white hover:bg-white hover:text-gtb-navy px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                1300 000 685
              </a>
            </div>
          </div>
        </section>

        {/* Building in Keilor */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-6">
                  Why build a luxury home in Keilor?
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Keilor offers something rare in modern Melbourne: established blocks, mature trees, and street
                  character that hasn&apos;t been bulldozed. With most lots sitting between 700–1,000m², there&apos;s
                  room to design generously — wide frontages, garaging that doesn&apos;t dominate, and rear yards that
                  work for entertaining and growing families.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our recent Keilor portfolio includes a 5-bedroom contemporary build on an 850m² block with full-stone
                  kitchen and integrated alfresco; a heritage-front retention with a modern rear extension preserving
                  streetscape character; and a knockdown rebuild for a returning client moving from Niddrie into a
                  larger Keilor block. Each delivered fixed-price, no variations, on or ahead of schedule.
                </p>
                <ul className="space-y-4">
                  {[
                    "Experience with Brimbank City Council planning requirements",
                    "Larger block expertise — dual occupancy and knockdown rebuild",
                    "5-minute response from our Avondale Heights base",
                    "Custom home designs tailored to Keilor&apos;s block sizes",
                    "Established trades network in the Brimbank area",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gtb-aero flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gtb-navy mb-4">Services in Keilor</h3>
                  <ul className="space-y-3">
                    {[
                      { name: "Knockdown Rebuild Keilor", href: "/services/knockdown-rebuild" },
                      { name: "New Home Construction", href: "/services/residential-construction" },
                      { name: "Home Renovations & Extensions", href: "/services/renovations-extensions" },
                      { name: "Design & Build", href: "/services/design-and-build" },
                      { name: "Commercial Construction", href: "/services/commercial-construction" },
                    ].map((s) => (
                      <li key={s.name}>
                        <Link
                          href={s.href}
                          className="flex items-center justify-between text-gtb-navy hover:text-gtb-aero transition-colors group"
                        >
                          <span className="font-medium">{s.name}</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gtb-navy text-white rounded-2xl p-6">
                  <h3 className="font-bold mb-2">Nearby Suburbs We Also Build In</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Avondale Heights", "Essendon", "Airport West", "Keilor East", "Keilor Park"].map((s) => (
                      <span key={s} className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gtb-navy mb-10 text-center">
              Building in Keilor — FAQs
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What council is Keilor in?",
                  a: "Keilor falls within Brimbank City Council. Council requirements, permit processes, and planning zones will all be assessed under Brimbank's planning scheme. TOFA Group manages all permit applications on your behalf."
                },
                {
                  q: "Is Keilor good for a knockdown rebuild?",
                  a: "Yes — Keilor's larger allotments (typically 700m²–1,000m²) make it excellent for knockdown rebuilds, including dual occupancy and custom home builds on generous blocks. TOFA Group will assess your specific property and advise on feasibility and options."
                },
                {
                  q: "How far is TOFA Group from Keilor?",
                  a: "TOFA Group is based in Avondale Heights, approximately 5 minutes from Keilor. This means fast response times, easy site visits, and close oversight of your project throughout construction."
                },
              ].map((item) => (
                <div key={item.q} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gtb-navy mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-gtb-navy to-gtb-navy-light text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-4">Building in Keilor? Let&apos;s Talk.</h2>
            <p className="text-xl text-white mb-8">
              Free consultation with TOFA Group. We&apos;ll assess your Keilor block and discuss your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-colors inline-flex items-center justify-center group"
              >
                Get My Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:1300000685"
                className="bg-white text-gtb-navy hover:bg-gray-100 px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
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
