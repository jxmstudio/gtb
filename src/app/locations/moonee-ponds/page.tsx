import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Testimonials from '@/components/marketing/Testimonials';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Builder Moonee Ponds | Home Construction, Knockdown Rebuild & Renovations",
  description: "TOFA Group builds custom homes, knockdown rebuilds, and renovations in Moonee Ponds, VIC. Licensed builder in Moonee Ponds — quality construction, fixed price. Free consultation.",
};

export default function MooneePondsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[480px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/tofaphotos/Verv_PROJECTS_Amara.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-gtb-navy/50 to-gtb-navy/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16">
            <div className="flex items-center gap-2 text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">
              <MapPin className="h-4 w-4" />
              Moonee Ponds, VIC · Moonee Valley Council
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Builder in Moonee Ponds
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              Moonee Ponds is one of Melbourne&apos;s most popular inner-northwest suburbs — and one of the most active
              markets for knockdown rebuilds and home extensions. TOFA Group has experience delivering quality
              residential construction projects in Moonee Ponds, understanding the local context, council requirements,
              and what makes a great home in this suburb.
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

        {/* Building in Moonee Ponds */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-6">
                  Building in Moonee Ponds
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Moonee Ponds sits within the Moonee Valley Council area and combines excellent transport links, good
                  schools, and a vibrant café and shopping strip. Land values have risen significantly, making knockdown
                  rebuild and renovation projects increasingly popular for homeowners who want to stay in the suburb.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Many Moonee Ponds properties are older weatherboard and brick homes with renovation potential or large
                  blocks suitable for redevelopment. TOFA Group has delivered both knockdown rebuild and renovation projects
                  in Moonee Ponds, working within Moonee Valley Council&apos;s planning framework.
                </p>
                <ul className="space-y-4">
                  {[
                    "Knockdown rebuild on established Moonee Ponds blocks",
                    "Extensions and second storey additions",
                    "Heritage-sensitive renovation of period homes",
                    "Dual occupancy on suitable blocks (subject to zoning)",
                    "New custom homes with modern design",
                    "Moonee Valley Council permit experience",
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
                  <h3 className="text-xl font-bold text-gtb-navy mb-4">Services in Moonee Ponds</h3>
                  <ul className="space-y-3">
                    {[
                      { name: "Knockdown Rebuild Moonee Ponds", href: "/services/knockdown-rebuild" },
                      { name: "Home Renovations & Extensions", href: "/services/renovations-extensions" },
                      { name: "Residential Construction", href: "/services/residential-construction" },
                      { name: "Design & Build", href: "/services/design-and-build" },
                      { name: "Project Management", href: "/services/project-management" },
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
                <div className="bg-gtb-navy text-white rounded-2xl p-6">
                  <h3 className="font-bold mb-3">Also Building In</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Essendon", "Avondale Heights", "Aberfeldie", "Strathmore", "Ascot Vale"].map((s) => (
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
              Building in Moonee Ponds — FAQs
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Is Moonee Ponds good for a knockdown rebuild?",
                  a: "Yes. Moonee Ponds has many established homes on good-sized blocks that are ideal for knockdown rebuild. However, parts of the suburb have heritage overlays. TOFA Group will assess your specific property and council requirements before advising on your options."
                },
                {
                  q: "What permits are needed to build in Moonee Ponds?",
                  a: "Most construction work in Moonee Ponds requires both a planning permit (if in a heritage or design overlay zone) and a building permit from Moonee Valley Council. TOFA Group manages both permit applications as part of our service."
                },
                {
                  q: "Do you renovate weatherboard homes in Moonee Ponds?",
                  a: "Yes. TOFA Group has experience renovating and extending weatherboard and brick homes in Moonee Ponds, including sensitive heritage renovations and modern extensions that complement the original character of the home."
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
            <h2 className="text-4xl font-bold mb-4">Building in Moonee Ponds? Let&apos;s Talk.</h2>
            <p className="text-xl text-white mb-8">
              Free consultation with TOFA Group. We&apos;ll assess your Moonee Ponds property and walk you through your options.
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
