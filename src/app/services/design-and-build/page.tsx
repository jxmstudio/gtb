import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Testimonials from '@/components/marketing/Testimonials';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Design and Build Melbourne | Integrated Design & Construction",
  description: "TOFA Group offers design and build services in Melbourne — one team, one contract, one point of contact for your entire project. From concept to construction across Melbourne's northwest.",
};

export default function DesignAndBuild() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">Design & Build</div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gtb-navy mb-6 leading-tight">
                Design & Build Construction in Melbourne
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                TOFA Group offers a fully integrated design and build service — you work with one team from concept through
                to construction. No architect/builder gap. No conflicting advice. Just a single, coordinated team dedicated
                to bringing your vision to life, on time and on budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors inline-flex items-center justify-center group"
                >
                  Start the Design Process
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

        {/* What's Included */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-6">
                  One Team for Design and Construction
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  The traditional model of hiring an architect separately from your builder creates gaps, misalignment,
                  and budget blowouts. With TOFA Group&apos;s design and build approach, design decisions are made with
                  construction costs and buildability in mind from day one. You get a better result, faster.
                </p>
                <ul className="space-y-4">
                  {[
                    "Architectural design collaboration from day one",
                    "Planning permit and council approval management",
                    "Interior design and material selection guidance",
                    "Budget optimisation built into the design process",
                    "Structural engineering coordination",
                    "Construction documentation and specifications",
                    "Single point of contact for the entire project",
                    "Fixed-price contracts for cost certainty",
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
                  <h3 className="text-2xl font-bold mb-4">The Design & Build Advantage</h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Design decisions informed by real construction costs",
                      "No misalignment between architect and builder",
                      "Faster project delivery through parallel processes",
                      "One contract, one warranty, one point of accountability",
                      "Budget certainty from early in the design phase",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-gtb-aero flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gtb-navy mb-4">Ideal For</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Custom home builds with a unique brief</li>
                    <li>• Knockdown rebuild projects</li>
                    <li>• Multi-dwelling and duplex developments</li>
                    <li>• Commercial fit-outs requiring design coordination</li>
                    <li>• Complex renovation projects requiring structural changes</li>
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
              Design & Build FAQs
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is design and build construction?",
                  a: "Design and build is an integrated delivery model where one company is responsible for both the design and construction of your project. This eliminates the gap between architect and builder, reduces risk, and typically delivers projects faster and at lower cost."
                },
                {
                  q: "Do I need to provide plans for a design and build project?",
                  a: "No. We start from your brief — your wish list, lifestyle needs, block, and budget. Our team develops the design from scratch and coordinates all documentation through to planning approval and construction."
                },
                {
                  q: "Is design and build more expensive than hiring an architect separately?",
                  a: "Not typically. Because our design decisions are informed by real construction costs from day one, you avoid expensive redesigns and budget mismatches. Most clients find the total project cost is comparable or lower, with fewer surprises."
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
            <h2 className="text-4xl font-bold mb-4">Start Your Design & Build Project</h2>
            <p className="text-xl text-white mb-8">
              Book a free consultation with TOFA Group. We&apos;ll discuss your brief, site, and budget — no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-colors inline-flex items-center justify-center group"
              >
                Get a Free Consultation
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
