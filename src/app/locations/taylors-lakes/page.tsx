import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Testimonials from '@/components/marketing/Testimonials';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Builder Taylors Lakes | Custom Homes, New Builds & Renovations",
  description: "TOFA Group builds custom homes, new builds, and renovations in Taylors Lakes, VIC. Licensed builder in Taylors Lakes — quality construction, fixed price, no surprises. Free consultation.",
};

const localPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Home Builder Taylors Lakes",
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
  "areaServed": { "@type": "Suburb", "name": "Taylors Lakes" },
  "description": "Licensed residential builder serving Taylors Lakes and surrounding Brimbank suburbs."
};

export default function TaylorsLakesPage() {
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
          <div className="absolute inset-0 bg-[url('/tofaphotos/691d82d537bc214fa00e9901_HIGHBURY-15--EDEN--OAK-VELOUR.avif')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-gtb-navy/50 to-gtb-navy/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16">
            <div className="flex items-center gap-2 text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">
              <MapPin className="h-4 w-4" />
              Taylors Lakes, VIC · Brimbank Council
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Home Builder in Taylors Lakes
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              Taylors Lakes is a well-established family suburb in Melbourne&apos;s northwest, known for its generous
              block sizes and strong community feel. Homeowners here are increasingly choosing quality custom homes
              over volume builds — and TOFA Group delivers exactly that.
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

        {/* Building in Taylors Lakes */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-6">
                  Building in Taylors Lakes — What You Need to Know
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Taylors Lakes is governed by Brimbank City Council and offers some of Melbourne&apos;s more affordable
                  land in an established northwest suburb. Many homes here are on larger blocks and were built in the
                  1980s and 90s, making them ideal candidates for knockdown rebuilds or significant renovation and
                  extension projects.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  There&apos;s a growing trend in Taylors Lakes toward custom-built homes that reflect the family-focused
                  lifestyle of the suburb — open-plan living, alfresco areas, and quality finishes. TOFA Group
                  specialises in exactly this type of build.
                </p>
                <ul className="space-y-4">
                  {[
                    "Experience with Brimbank City Council permit processes",
                    "Knockdown rebuild on established Taylors Lakes blocks",
                    "Custom home design for family living",
                    "Renovation and extension of existing homes",
                    "Responsive local team based in nearby Avondale Heights",
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
                  <h3 className="text-xl font-bold text-gtb-navy mb-4">Services in Taylors Lakes</h3>
                  <ul className="space-y-3">
                    {[
                      { name: "Knockdown Rebuild Taylors Lakes", href: "/services/knockdown-rebuild" },
                      { name: "New Home Construction", href: "/services/residential-construction" },
                      { name: "Home Renovations & Extensions", href: "/services/renovations-extensions" },
                      { name: "Design & Build", href: "/services/design-and-build" },
                      { name: "Project Management", href: "/services/project-management" },
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
                    {["Keilor", "Keilor Downs", "St Albans", "Sydenham", "Delahey"].map((s) => (
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
              Building in Taylors Lakes — FAQs
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What council is Taylors Lakes in?",
                  a: "Taylors Lakes is within Brimbank City Council. All planning and building permit applications are assessed under Brimbank's planning scheme. TOFA Group handles all permit applications on your behalf."
                },
                {
                  q: "Is Taylors Lakes good for a custom home build?",
                  a: "Yes — Taylors Lakes has well-established blocks, many of which are suitable for knockdown rebuilds or significant renovations. The suburb's family-oriented character makes it ideal for custom homes with open-plan living, outdoor entertainment areas, and quality finishes."
                },
                {
                  q: "Do you service Keilor Downs and nearby Brimbank suburbs?",
                  a: "Yes. TOFA Group services the wider Brimbank area including Keilor Downs, Taylors Hill, St Albans, Sydenham, and Delahey. Contact us to discuss your project location and we'll confirm whether we can help."
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
            <h2 className="text-4xl font-bold mb-4">Building in Taylors Lakes? Let&apos;s Talk.</h2>
            <p className="text-xl text-white mb-8">
              Free consultation with TOFA Group. We&apos;ll assess your block and discuss your options.
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
