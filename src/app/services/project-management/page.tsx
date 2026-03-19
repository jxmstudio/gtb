import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Testimonials from '@/components/marketing/Testimonials';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Construction Project Management Melbourne | TOFA Group",
  description: "TOFA Group provides construction project management services in Melbourne. From owner-builder support to full lifecycle management — we keep your build on time, on budget, and compliant.",
};

export default function ProjectManagement() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative bg-gtb-navy py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/tofaphotos/Verv_PROJECTS_Clara.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gtb-navy/75" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">Project Management</div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Construction Project Management in Melbourne
              </h1>
              <p className="text-xl text-white/75 mb-8 leading-relaxed">
                Managing a construction project in Melbourne is complex — permits, trades, timelines, budgets, and compliance
                all need to run in sync. TOFA Group provides professional construction project management services to keep
                your build on track from day one to handover.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors inline-flex items-center justify-center group"
                >
                  Discuss Your Project
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

        {/* What We Do */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-6">
                  What Construction Project Management Includes
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether you need full lifecycle project management or support for a specific phase, TOFA Group provides
                  the structure, expertise, and accountability to keep your Melbourne construction project running smoothly.
                </p>
                <ul className="space-y-4">
                  {[
                    "Full project lifecycle management (planning to handover)",
                    "Trade scheduling and contractor coordination",
                    "Budget tracking and cost control",
                    "Risk identification and mitigation",
                    "Quality assurance and inspection management",
                    "Permit and council compliance management",
                    "Regular reporting and client communication",
                    "Owner-builder support and advisory",
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
                  <h3 className="text-2xl font-bold text-gtb-navy mb-6">Our PM Process</h3>
                  <ol className="space-y-5">
                    {[
                      { step: "1", title: "Project Setup", desc: "Scope definition, budget baseline, team and trade procurement." },
                      { step: "2", title: "Planning Phase", desc: "Programme development, permit management, risk register." },
                      { step: "3", title: "Construction Phase", desc: "Daily site oversight, trade coordination, progress reporting." },
                      { step: "4", title: "Commissioning", desc: "Defect identification, inspections, and practical completion." },
                      { step: "5", title: "Handover", desc: "Documentation, warranties, and post-completion support." },
                    ].map((item) => (
                      <li key={item.step} className="flex gap-4">
                        <div className="w-9 h-9 bg-gtb-aero text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                          {item.step}
                        </div>
                        <div>
                          <div className="font-bold text-gtb-navy text-sm">{item.title}</div>
                          <div className="text-gray-600 text-sm mt-0.5">{item.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
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
              Project Management FAQs
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Do you offer project management without being the builder?",
                  a: "Yes. TOFA Group can provide independent project management services where we oversee your project on your behalf without being the head contractor. This is particularly popular with owner-builders and developers with existing builder relationships."
                },
                {
                  q: "What is owner-builder support?",
                  a: "Owner-builder support involves TOFA Group providing advisory, oversight, and coordination services for homeowners who have taken on an owner-builder permit. We help manage trades, compliance, inspections, and scheduling so the project runs efficiently."
                },
                {
                  q: "Can you take over project management of a stalled or problematic build?",
                  a: "Yes. TOFA Group can step in to assess the current state of a build, develop a recovery plan, and provide project management to bring the project back on track. Contact us to discuss your situation."
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
            <h2 className="text-4xl font-bold mb-4">Need a Project Manager for Your Melbourne Build?</h2>
            <p className="text-xl text-white mb-8">
              Contact TOFA Group today for a free consultation. We&apos;ll assess your project and advise on the right level of support.
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
