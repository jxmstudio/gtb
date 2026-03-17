import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Testimonials from '@/components/marketing/Testimonials';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Home Builder Essendon | Custom Homes, Knockdown Rebuild & Renovations",
  description: "TOFA Group builds custom homes, knockdown rebuilds, and renovations in Essendon, VIC. Licensed builder in Essendon — quality construction, fixed price, no surprises. Free consultation.",
};

const localPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Home Builder Essendon",
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
  "areaServed": { "@type": "Suburb", "name": "Essendon" },
  "description": "Licensed residential builder serving Essendon and surrounding Moonee Valley suburbs."
};

export default function EssendonPage() {
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
          <div className="absolute inset-0 bg-[url('/tofaphotos/Verv_PROJECTS_Alma.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-gtb-navy/50 to-gtb-navy/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16">
            <div className="flex items-center gap-2 text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">
              <MapPin className="h-4 w-4" />
              Essendon, VIC · Moonee Valley Council
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Home Builder in Essendon
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              Essendon is one of Melbourne&apos;s most desirable northwest suburbs — and it&apos;s an area TOFA Group knows well.
              We build custom homes, manage knockdown rebuilds, and deliver quality renovations and extensions for
              Essendon homeowners and investors. Licensed, insured, and local.
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

        {/* Building in Essendon */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-6">
                  Building in Essendon — What You Need to Know
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Essendon sits in the Moonee Valley Council area and is home to some of Melbourne&apos;s most sought-after
                  residential streets. Many blocks are ideal for knockdown rebuilds or second storey additions — whether
                  you&apos;re on a standard 600m² block near Essendon Station or a larger allotment in Essendon North.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Essendon has heritage overlays that apply to some streets and properties, which require careful planning
                  and council engagement. TOFA Group has experience working within these constraints to deliver outcomes
                  that satisfy council requirements while meeting your design goals.
                </p>
                <ul className="space-y-4">
                  {[
                    "Experience with Moonee Valley Council planning requirements",
                    "Heritage overlay expertise for period Essendon homes",
                    "Strong track record of knockdown rebuilds in Essendon",
                    "Dual occupancy and duplex construction on suitable blocks",
                    "Responsive to Essendon property market conditions",
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
                  <h3 className="text-xl font-bold text-gtb-navy mb-4">Services in Essendon</h3>
                  <ul className="space-y-3">
                    {[
                      { name: "Knockdown Rebuild Essendon", href: "/services/knockdown-rebuild" },
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
                    {["Aberfeldie", "Moonee Ponds", "Avondale Heights", "Strathmore", "Niddrie"].map((s) => (
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
              Building in Essendon — FAQs
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I do a knockdown rebuild in Essendon?",
                  a: "Yes — Essendon is a popular suburb for knockdown rebuilds. However, some streets and properties have heritage overlays under Moonee Valley Council that may restrict demolition or require specific design responses. TOFA Group will assess your specific block and advise on feasibility."
                },
                {
                  q: "How much does it cost to build a new home in Essendon?",
                  a: "Building costs in Essendon are similar to Melbourne-wide averages: $2,500 to $4,500+ per square metre for a quality new home, depending on specification. Contact TOFA Group for a free quote based on your specific requirements."
                },
                {
                  q: "Do you manage Moonee Valley Council permit applications?",
                  a: "Yes. TOFA Group manages all council planning and building permit applications, including any heritage overlay requirements specific to your Essendon property."
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
            <h2 className="text-4xl font-bold mb-4">Building in Essendon? Let&apos;s Talk.</h2>
            <p className="text-xl text-white mb-8">
              Free consultation with TOFA Group. We&apos;ll assess your Essendon block and discuss your options.
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
