import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Testimonials from '@/components/marketing/Testimonials';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Knockdown Rebuild Melbourne | Demolish & Build New Home",
  description: "TOFA Group specialises in knockdown rebuilds across Melbourne's northwest. Demolish your old home and build your dream new home on the same block. Free consultation — Essendon, Moonee Ponds, Avondale Heights.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a knockdown rebuild cost in Melbourne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A knockdown rebuild in Melbourne typically costs between $350,000 and $700,000+ including demolition and construction. The total depends on the size of the new home, block size, and design requirements. TOFA Group provides a fixed-price quote after a site consultation."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a knockdown rebuild take in Melbourne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical knockdown rebuild takes 12 to 24 months from initial consultation to handover, depending on design approval, permits, and build complexity."
      }
    },
    {
      "@type": "Question",
      "name": "Can I live on site during a knockdown rebuild?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — you must vacate the property during both demolition and construction. TOFA Group can advise on temporary accommodation options and timelines so you can plan accordingly."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle the demolition permit and council approvals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. TOFA Group manages the full knockdown rebuild process including demolition permits, council planning approvals, building permits, and construction on your behalf."
      }
    }
  ]
};

export default function KnockdownRebuild() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative bg-gtb-navy py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/tofaphotos/Verv_PROJECTS_Amara.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gtb-navy/75" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">Knockdown Rebuild</div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Knockdown Rebuild Specialists in Melbourne
              </h1>
              <p className="text-xl text-white/75 mb-8 leading-relaxed">
                Love your location but not your home? A knockdown rebuild lets you demolish your old property and build
                a brand-new home on the same block — in the suburb you already love. TOFA Group manages the entire
                process from demolition permit to handover.
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
                  className="border-2 border-white/50 text-white hover:bg-white hover:text-gtb-navy px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  1300 000 685
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Knockdown Rebuild */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-6">
                  Why Choose a Knockdown Rebuild?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  For many Melbourne homeowners — especially in established northwest suburbs like Essendon, Avondale Heights,
                  and Moonee Ponds — a knockdown rebuild is the smartest way to get a new home without losing your street,
                  school zone, or community. You keep your location and start fresh with a home built exactly the way you want.
                </p>
                <ul className="space-y-4">
                  {[
                    "Keep the suburb, street, and school zone you love",
                    "Build a modern home designed exactly to your brief",
                    "Avoid the premium of buying in a competitive market",
                    "Potential for dual occupancy or multi-dwelling on larger blocks",
                    "New home warranty and full compliance",
                    "We manage demolition, permits, and construction end-to-end",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gtb-aero flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gtb-navy mb-6">The Process</h3>
                <ol className="space-y-6">
                  {[
                    { step: "1", title: "Site Assessment", desc: "We assess your block, existing services, and council requirements." },
                    { step: "2", title: "Design & Permits", desc: "New home design, demolition permits, and building approvals." },
                    { step: "3", title: "Demolition", desc: "Safe, compliant demolition of the existing structure." },
                    { step: "4", title: "Build Your New Home", desc: "Construction with full project management and progress updates." },
                    { step: "5", title: "Handover", desc: "Final inspection and keys to your brand-new home." },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <div className="w-10 h-10 bg-gtb-aero text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-bold text-gtb-navy">{item.title}</div>
                        <div className="text-gray-600 text-sm mt-0.5">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Suburbs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gtb-navy mb-4">
              Popular Knockdown Rebuild Suburbs
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              These Melbourne northwest suburbs are among the most popular for knockdown rebuilds due to established
              infrastructure, good schools, and strong land values.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Avondale Heights", href: "/locations/avondale-heights" },
                { name: "Essendon", href: "/locations/essendon" },
                { name: "Moonee Ponds", href: "/locations/moonee-ponds" },
                { name: "Melbourne", href: "/locations/melbourne" },
                { name: "Keilor", href: "#" },
                { name: "Aberfeldie", href: "#" },
                { name: "Strathmore", href: "#" },
                { name: "Niddrie", href: "#" },
              ].map((suburb) => (
                <Link
                  key={suburb.name}
                  href={suburb.href}
                  className="bg-white border border-gray-200 text-gtb-navy hover:border-gtb-aero hover:text-gtb-aero px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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
              Knockdown Rebuild FAQs
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How much does a knockdown rebuild cost in Melbourne?",
                  a: "A knockdown rebuild in Melbourne typically costs between $350,000 and $700,000+ including demolition and construction. The total depends on the size of the new home, block size, and design requirements. TOFA Group provides a fixed-price quote after a site consultation."
                },
                {
                  q: "How long does a knockdown rebuild take in Melbourne?",
                  a: "A typical knockdown rebuild takes 12 to 24 months from initial consultation to handover, depending on design approval, permits, and build complexity."
                },
                {
                  q: "Can I live on site during a knockdown rebuild?",
                  a: "No — you must vacate the property during both demolition and construction. TOFA Group can advise on temporary accommodation options and timelines so you can plan accordingly."
                },
                {
                  q: "Do you handle the demolition permit and council approvals?",
                  a: "Yes. TOFA Group manages the full knockdown rebuild process including demolition permits, council planning approvals, building permits, and construction on your behalf."
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
            <h2 className="text-4xl font-bold mb-4">Ready to Knock Down and Start Fresh?</h2>
            <p className="text-xl text-white mb-8">
              Book a free site consultation with TOFA Group. We&apos;ll assess your block and walk you through your options.
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
