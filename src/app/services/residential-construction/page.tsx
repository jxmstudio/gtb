import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Testimonials from '@/components/marketing/Testimonials';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Residential Home Builder Melbourne | Custom Homes & New Builds",
  description: "TOFA Group is Melbourne's trusted residential home builder. We build custom homes, new builds, and multi-dwelling developments across Melbourne's northwest — Avondale Heights, Essendon, Moonee Ponds and beyond.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to build a new home in Melbourne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost to build a new home in Melbourne typically ranges from $250,000 to $600,000+ depending on size, materials, and site conditions. TOFA Group provides a detailed fixed-price quote after an initial consultation."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a new home in Melbourne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential builds take between 9 and 18 months from permit approval to handover. Timelines vary based on design complexity, site conditions, and council approvals."
      }
    },
    {
      "@type": "Question",
      "name": "Does TOFA Group build in my suburb?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We primarily build across Melbourne's northwest including Avondale Heights, Essendon, Moonee Ponds, Keilor, Taylors Lakes, Airport West, and surrounding suburbs. Contact us to confirm your area."
      }
    },
    {
      "@type": "Question",
      "name": "Are you a licensed builder in Victoria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. TOFA Group is a fully licensed and insured builder operating in Victoria. All works are completed in accordance with the Building Act 1993 and Victorian Building Authority requirements."
      }
    }
  ]
};

export default function ResidentialConstruction() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">Residential Construction</div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gtb-navy mb-6 leading-tight">
                Custom Home Builder in Melbourne
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                TOFA Group builds quality custom homes across Melbourne's northwest. Whether you're building a new family home,
                multi-dwelling development, or project home — we manage every stage of the build with full transparency,
                licensed tradespeople, and on-time delivery.
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
                  className="border-2 border-gtb-navy text-gtb-navy hover:bg-gtb-navy hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  1300 000 685
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-6">
                  What We Build in Melbourne
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We specialise in residential construction for Melbourne families and investors. From a single-storey
                  custom home to a dual-occupancy development in Essendon, we bring the same level of care, quality,
                  and project management discipline to every build.
                </p>
                <ul className="space-y-4">
                  {[
                    "Custom design and build homes",
                    "Project homes and house-and-land packages",
                    "Dual occupancy and multi-dwelling developments",
                    "Knockdown rebuild (full demolish + new home)",
                    "Owner-builder support and project management",
                    "Full compliance with Victorian building standards",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gtb-aero flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gtb-navy mb-6">How It Works</h3>
                <ol className="space-y-6">
                  {[
                    { step: "1", title: "Free Consultation", desc: "We discuss your block, budget, and vision. No obligation." },
                    { step: "2", title: "Design & Planning", desc: "We coordinate design, permits, and final specifications." },
                    { step: "3", title: "Construction", desc: "We build your home with weekly updates and full site access." },
                    { step: "4", title: "Handover", desc: "Final inspection, quality walkthrough, and keys in hand." },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <div className="w-10 h-10 bg-gtb-aero text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
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

        {/* Build in These Suburbs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gtb-navy mb-4 text-center">
              We Build Across Melbourne's Northwest
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Our team services homes across the Moonee Valley, Brimbank, and Maribyrnong council areas.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Avondale Heights", href: "/locations/avondale-heights" },
                { name: "Essendon", href: "/locations/essendon" },
                { name: "Moonee Ponds", href: "/locations/moonee-ponds" },
                { name: "Melbourne", href: "/locations/melbourne" },
                { name: "Keilor", href: "#" },
                { name: "Taylors Lakes", href: "#" },
                { name: "Airport West", href: "#" },
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
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How much does it cost to build a new home in Melbourne?",
                  a: "The cost to build a new home in Melbourne typically ranges from $250,000 to $600,000+ depending on size, materials, and site conditions. TOFA Group provides a detailed fixed-price quote after an initial consultation."
                },
                {
                  q: "How long does it take to build a new home in Melbourne?",
                  a: "Most residential builds take between 9 and 18 months from permit approval to handover. Timelines vary based on design complexity, site conditions, and council approvals."
                },
                {
                  q: "Are you a licensed builder in Victoria?",
                  a: "Yes. TOFA Group is a fully licensed and insured builder operating in Victoria. All works are completed in accordance with the Building Act 1993 and Victorian Building Authority requirements."
                },
                {
                  q: "Does TOFA Group build in my suburb?",
                  a: "We primarily build across Melbourne's northwest including Avondale Heights, Essendon, Moonee Ponds, Keilor, Taylors Lakes, Airport West, and surrounding suburbs. Contact us to confirm your area."
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
            <h2 className="text-4xl font-bold mb-4">Ready to Build Your New Home?</h2>
            <p className="text-xl text-white mb-8">
              Get a free, no-obligation consultation with Melbourne's trusted residential builder.
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
            <p className="text-sm text-white/70 mt-4">We respond within 1 business day · Licensed & insured · Melbourne's northwest</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
