import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Testimonials from '@/components/marketing/Testimonials';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Home Renovations & Extensions Melbourne | TOFA Group",
  description: "TOFA Group delivers quality home renovations and house extensions across Melbourne's northwest — Avondale Heights, Essendon, Moonee Ponds. Kitchen, bathroom, second storey, rear extension. Free quote.",
};

export default function RenovationsExtensions() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">Renovations & Extensions</div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gtb-navy mb-6 leading-tight">
                Home Renovations & Extensions in Melbourne
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your existing home without the cost and disruption of moving. TOFA Group delivers quality
                home renovations and extensions across Melbourne's northwest — from kitchen and bathroom upgrades
                to rear extensions, second storeys, and full home transformations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors inline-flex items-center justify-center group"
                >
                  Plan My Renovation
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

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-6">
                  Renovation & Extension Services
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether you want to add a bedroom, open up your living space, renovate your kitchen, or add a second
                  storey — TOFA Group has delivered these projects across Melbourne suburbs including Essendon, Avondale
                  Heights, and Moonee Ponds. We manage council approvals, structural work, and trades from start to finish.
                </p>
                <ul className="space-y-4">
                  {[
                    "Rear and side home extensions",
                    "Second storey additions",
                    "Kitchen and bathroom renovations",
                    "Open plan living transformations",
                    "Garage conversions and granny flats",
                    "Period home and heritage property renovations",
                    "Structural modifications and load-bearing changes",
                    "Full home renovations and makeovers",
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
                    { step: "1", title: "Free Consultation", desc: "We visit your home, discuss your goals, and provide a quote." },
                    { step: "2", title: "Design & Permits", desc: "Architectural plans, council approvals, and building permits." },
                    { step: "3", title: "Managed Renovation", desc: "Qualified trades, quality materials, and progress updates." },
                    { step: "4", title: "Final Inspection", desc: "Quality walkthrough and handover when everything is perfect." },
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
                <div className="mt-8 p-4 bg-gtb-aero/10 border border-gtb-aero/20 rounded-lg">
                  <p className="text-sm text-gtb-navy font-medium">
                    We service renovations across Moonee Valley, Brimbank, and Maribyrnong council areas.
                  </p>
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
              Renovation FAQs
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How much does a home extension cost in Melbourne?",
                  a: "A typical home extension in Melbourne costs between $80,000 and $300,000+ depending on size, design, and materials. Kitchen renovations start from $25,000. TOFA Group provides a free, detailed quote after an initial site visit."
                },
                {
                  q: "Do I need council approval for a home extension in Melbourne?",
                  a: "Most extensions and structural changes require a building permit and sometimes planning approval. TOFA Group manages all permits and council applications on your behalf."
                },
                {
                  q: "Can I stay in my home during a renovation?",
                  a: "For many renovations, yes. For larger works like second storey additions or structural changes, temporary relocation may be required. We advise you on this during the planning stage."
                },
                {
                  q: "Do you renovate period homes and heritage properties?",
                  a: "Yes. We have experience renovating and extending period homes across Melbourne's northwest suburbs including Avondale Heights and Essendon, working sensitively within heritage overlay requirements."
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
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
            <p className="text-xl text-white mb-8">
              Get a free renovation consultation from TOFA Group — Melbourne&apos;s northwest renovation specialists.
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
