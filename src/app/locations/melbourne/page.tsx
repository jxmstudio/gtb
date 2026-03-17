import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Testimonials from '@/components/marketing/Testimonials';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Home Builder Melbourne | New Homes, Renovations & Commercial Construction",
  description: "TOFA Group is a licensed home builder in Melbourne. We deliver custom homes, knockdown rebuilds, renovations, and commercial construction projects across Melbourne. Free consultation.",
};

const localPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Home Builder Melbourne",
  "provider": {
    "@type": "LocalBusiness",
    "name": "TOFA Group",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Avondale Heights",
      "addressRegion": "VIC",
      "postalCode": "3034",
      "addressCountry": "AU"
    }
  },
  "areaServed": { "@type": "City", "name": "Melbourne" },
  "description": "Licensed residential and commercial builder serving Melbourne."
};

export default function MelbournePage() {
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
          <div className="absolute inset-0 bg-[url('/tofaphotos/Verv_PROJECTS_Acacia.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-gtb-navy/50 to-gtb-navy/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16">
            <div className="flex items-center gap-2 text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">
              <MapPin className="h-4 w-4" />
              Melbourne, VIC
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Home Builder in Melbourne
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              TOFA Group is a licensed Melbourne home builder delivering residential and commercial construction
              projects across the city and its northwest suburbs. Whether you&apos;re building a new home, undertaking
              a knockdown rebuild, or embarking on a major renovation — we manage every stage of the process.
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

        {/* Services in Melbourne */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-4">
              Construction Services Available in Melbourne
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl">
              From single-storey custom homes in Melbourne&apos;s northwest suburbs to commercial fit-outs across the city,
              TOFA Group has the licensing, experience, and systems to deliver your project right.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Residential Construction",
                  desc: "Custom homes, new builds, and multi-dwelling developments across Melbourne.",
                  href: "/services/residential-construction"
                },
                {
                  title: "Knockdown Rebuild",
                  desc: "Demolish your old home and build new on your existing Melbourne block.",
                  href: "/services/knockdown-rebuild"
                },
                {
                  title: "Renovations & Extensions",
                  desc: "Home extensions, second storey additions, kitchen and bathroom renovations.",
                  href: "/services/renovations-extensions"
                },
                {
                  title: "Commercial Construction",
                  desc: "Office, retail, industrial, and mixed-use commercial builds in Melbourne.",
                  href: "/services/commercial-construction"
                },
                {
                  title: "Design & Build",
                  desc: "Integrated design and construction — one team from concept to completion.",
                  href: "/services/design-and-build"
                },
                {
                  title: "Project Management",
                  desc: "Professional construction PM to keep your Melbourne build on track.",
                  href: "/services/project-management"
                },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="border border-gray-200 rounded-xl p-6 hover:border-gtb-aero hover:shadow-md transition-all group"
                >
                  <h3 className="font-bold text-gtb-navy mb-2 group-hover:text-gtb-aero transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                  <div className="flex items-center text-gtb-aero text-sm font-semibold mt-4">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why TOFA in Melbourne */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-6">
                  Why Melbourne Homeowners Choose TOFA Group
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Based in Avondale Heights, TOFA Group has been building homes and commercial projects across Melbourne&apos;s
                  northwest for years. We understand Melbourne&apos;s planning overlays, council requirements, and the local
                  property market — and we use that knowledge to deliver better outcomes for our clients.
                </p>
                <ul className="space-y-4">
                  {[
                    "Licensed and insured builder operating in Victoria",
                    "Deep knowledge of Melbourne council requirements",
                    "Fixed-price contracts with no hidden surprises",
                    "Weekly progress updates and full site access",
                    "98% client satisfaction across 500+ Melbourne projects",
                    "Local team — we're based right here in Melbourne's northwest",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gtb-aero flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
              <div className="h-64 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-[url('/tofaphotos/Verv_PROJECTS_Terano.jpg')] bg-cover bg-center" />
              </div>
              <div className="bg-gtb-navy text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Melbourne Build Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gtb-aero">500+</div>
                    <div className="text-sm text-white/80 mt-1">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gtb-aero">15+</div>
                    <div className="text-sm text-white/80 mt-1">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gtb-aero">$75M+</div>
                    <div className="text-sm text-white/80 mt-1">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gtb-aero">98%</div>
                    <div className="text-sm text-white/80 mt-1">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suburbs We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gtb-navy mb-4">Melbourne Suburbs We Build In</h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              We primarily service Melbourne&apos;s northwest but take on projects across greater Melbourne.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Avondale Heights", href: "/locations/avondale-heights" },
                { name: "Essendon", href: "/locations/essendon" },
                { name: "Moonee Ponds", href: "/locations/moonee-ponds" },
                { name: "Keilor", href: "/locations/keilor" },
                { name: "Taylors Lakes", href: "/locations/taylors-lakes" },
                { name: "Airport West", href: "#" },
                { name: "Aberfeldie", href: "#" },
                { name: "Strathmore", href: "#" },
                { name: "Niddrie", href: "#" },
                { name: "Footscray", href: "#" },
                { name: "Sunshine", href: "#" },
                { name: "Maribyrnong", href: "#" },
              ].map((suburb) => (
                <Link
                  key={suburb.name}
                  href={suburb.href}
                  className="bg-gray-50 border border-gray-200 text-gtb-navy hover:border-gtb-aero hover:text-gtb-aero px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  {suburb.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gtb-navy mb-10 text-center">
              Melbourne Building FAQs
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Do you build homes across all of Melbourne?",
                  a: "We primarily service Melbourne's northwest suburbs (Moonee Valley, Brimbank, and Maribyrnong council areas) but take on residential and commercial projects across greater Melbourne. Contact us to discuss your location."
                },
                {
                  q: "How long does it take to get a building permit in Melbourne?",
                  a: "Building permit timeframes in Melbourne typically range from 4 to 12 weeks depending on the council, project complexity, and whether planning approval is required. TOFA Group manages all permit applications on your behalf."
                },
                {
                  q: "Are you a registered builder in Victoria?",
                  a: "Yes. TOFA Group is registered with the Victorian Building Authority (VBA) and fully insured. All construction work meets Victorian building standards and regulations."
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
            <h2 className="text-4xl font-bold mb-4">Ready to Build in Melbourne?</h2>
            <p className="text-xl text-white mb-8">
              Get a free consultation with TOFA Group — Melbourne&apos;s trusted home builder. We respond within 1 business day.
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
            <p className="text-sm text-white/70 mt-4">
              TOFA Group · PO BOX 256, Avondale Heights VIC 3034 · info@tofagroup.com.au
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
