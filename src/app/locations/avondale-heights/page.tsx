import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Testimonials from '@/components/marketing/Testimonials';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Builder Avondale Heights | Home Construction, Renovations & Extensions",
  description: "TOFA Group is based in Avondale Heights and builds custom homes, knockdown rebuilds, and renovations throughout the suburb. Local builder, local knowledge — free consultation.",
  alternates: { canonical: 'https://www.tofagroup.com.au/locations/avondale-heights' },
};

export default function AvondalHeightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[480px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/tofaphotos/Verv_PROJECTS_Clara.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-gtb-navy/50 to-gtb-navy/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16">
            <div className="flex items-center gap-2 text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">
              <MapPin className="h-4 w-4" />
              Avondale Heights, VIC · Moonee Valley Council
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Builder in Avondale Heights
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              TOFA Group is based right here in Avondale Heights. We build custom homes, handle knockdown rebuilds,
              and deliver quality renovations and extensions throughout the suburb. As a local builder, we understand
              the streets, the blocks, the council requirements, and the community — and that makes a difference.
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

        {/* Local Knowledge */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-6">
                  Your Local Avondale Heights Builder
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Avondale Heights is a tightly held suburb on Melbourne&apos;s Maribyrnong River corridor, with established
                  residential streets and a strong community. Many homeowners are now choosing to extend or rebuild
                  rather than move — and that&apos;s exactly what we specialise in.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  As a builder based in Avondale Heights, we can respond quickly, we know which blocks have challenging
                  sites, and we have an established relationship with Moonee Valley Council processes. You get the
                  advantage of a builder who is genuinely local.
                </p>
                <ul className="space-y-4">
                  {[
                    "Based in Avondale Heights — fastest response times",
                    "Deep knowledge of local blocks and site conditions",
                    "Established Moonee Valley Council processes",
                    "Community reputation built on local project delivery",
                    "Can mobilise trades quickly for Avondale Heights projects",
                    "References from completed projects in the suburb available",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gtb-aero flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-gtb-navy text-white rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-2">TOFA Group HQ</h3>
                  <p className="text-white/80 text-sm mb-4">Our base of operations — right here in your suburb.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gtb-aero" />
                      <span>PO BOX 256, Avondale Heights VIC 3034</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gtb-aero" />
                      <a href="tel:1300000685" className="hover:text-gtb-aero transition-colors">1300 000 685</a>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gtb-navy mb-4">Services in Avondale Heights</h3>
                  <ul className="space-y-3">
                    {[
                      { name: "New Home Construction", href: "/services/residential-construction" },
                      { name: "Knockdown Rebuild", href: "/services/knockdown-rebuild" },
                      { name: "Home Renovations & Extensions", href: "/services/renovations-extensions" },
                      { name: "Design & Build", href: "/services/design-and-build" },
                    ].map((s) => (
                      <li key={s.name}>
                        <Link
                          href={s.href}
                          className="flex items-center justify-between text-gtb-navy hover:text-gtb-aero transition-colors group"
                        >
                          <span className="font-medium text-sm">{s.name}</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </li>
                    ))}
                  </ul>
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
              Building in Avondale Heights — FAQs
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Are there good blocks for knockdown rebuild in Avondale Heights?",
                  a: "Yes. Avondale Heights has many established blocks that are ideal for knockdown rebuild — particularly those with good orientation, R2 zoning, and no significant heritage or vegetation overlays. TOFA Group can assess your specific block for feasibility."
                },
                {
                  q: "What council is Avondale Heights in?",
                  a: "Avondale Heights is within the City of Moonee Valley council area. TOFA Group has established experience with Moonee Valley Council planning and building applications."
                },
                {
                  q: "Can I build a dual occupancy in Avondale Heights?",
                  a: "It depends on your block size and zoning. Many Avondale Heights blocks with 600m²+ are suitable for dual occupancy. TOFA Group can assess your specific block and advise on feasibility and potential yield."
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
            <h2 className="text-4xl font-bold mb-4">Your Local Avondale Heights Builder</h2>
            <p className="text-xl text-white mb-8">
              TOFA Group is right here in Avondale Heights. Get a free consultation today — no obligation.
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
