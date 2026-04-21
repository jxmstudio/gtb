import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Testimonials from '@/components/marketing/Testimonials';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Commercial Builder Melbourne | Office, Retail & Industrial Construction",
  description: "TOFA Group is a licensed commercial builder in Melbourne. We deliver office, retail, industrial, and fit-out projects across Melbourne's northwest — on time and on budget.",
  alternates: { canonical: 'https://www.tofagroup.com.au/services/commercial-construction' },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you build commercial projects in Melbourne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. TOFA Group delivers commercial construction projects across Melbourne including office fit-outs, retail builds, industrial facilities, and warehouse construction."
      }
    },
    {
      "@type": "Question",
      "name": "Are your commercial builds compliant with Australian standards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All commercial builds are delivered in accordance with the National Construction Code (NCC) and relevant Australian Standards. We manage compliance and council approvals on your behalf."
      }
    },
    {
      "@type": "Question",
      "name": "What types of commercial projects do you take on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build and fit-out offices, retail spaces, medical centres, warehouses, industrial facilities, and mixed-use developments across Melbourne."
      }
    }
  ]
};

export default function CommercialConstruction() {
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
          <div className="absolute inset-0 bg-[url('/tofaphotos/Verv_PROJECTS_Terano.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gtb-navy/75" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">Commercial Construction</div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Commercial Builder in Melbourne
              </h1>
              <p className="text-xl text-white/75 mb-8 leading-relaxed">
                TOFA Group delivers commercial construction projects across Melbourne — from office fit-outs and retail builds
                to industrial facilities and mixed-use developments. We manage every stage of your commercial project
                with rigorous compliance, timeline control, and transparent communication.
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-6">
                  Commercial Construction Services
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  From ground-up commercial builds to interior fit-outs, TOFA Group has the licensing, experience, and
                  systems to deliver your commercial project on time and within budget. We work closely with your team
                  to minimise disruption to your business operations.
                </p>
                <ul className="space-y-4">
                  {[
                    "Office construction and fit-outs",
                    "Retail and hospitality builds",
                    "Industrial and warehouse construction",
                    "Medical and healthcare facilities",
                    "Mixed-use residential and commercial",
                    "Compliance and building permit management",
                    "Timeline and budget reporting throughout",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gtb-aero flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gtb-navy mb-6">Our Approach</h3>
                <ol className="space-y-6">
                  {[
                    { step: "1", title: "Project Scoping", desc: "Define scope, budget, timeline, and compliance requirements." },
                    { step: "2", title: "Documentation & Permits", desc: "We handle council approvals, engineering, and compliance docs." },
                    { step: "3", title: "Managed Construction", desc: "On-site project management with regular updates to your team." },
                    { step: "4", title: "Quality Handover", desc: "Final inspection, defect resolution, and practical completion." },
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
                  q: "Do you build commercial projects in Melbourne?",
                  a: "Yes. TOFA Group delivers commercial construction projects across Melbourne including office fit-outs, retail builds, industrial facilities, and warehouse construction."
                },
                {
                  q: "Are your commercial builds compliant with Australian standards?",
                  a: "All commercial builds are delivered in accordance with the National Construction Code (NCC) and relevant Australian Standards. We manage compliance and council approvals on your behalf."
                },
                {
                  q: "What types of commercial projects do you take on?",
                  a: "We build and fit-out offices, retail spaces, medical centres, warehouses, industrial facilities, and mixed-use developments across Melbourne."
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

        {/* Related services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gtb-navy mb-8">Explore Other Services</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Residential Construction", href: "/services/residential-construction" },
                { name: "Design & Build", href: "/services/design-and-build" },
                { name: "Project Management", href: "/services/project-management" },
                { name: "Renovations & Extensions", href: "/services/renovations-extensions" },
              ].map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className="bg-white border border-gray-200 text-gtb-navy hover:border-gtb-aero hover:text-gtb-aero px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-gtb-navy to-gtb-navy-light text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Commercial Project?</h2>
            <p className="text-xl text-white mb-8">
              Contact TOFA Group for a free project consultation. Melbourne&apos;s commercial builder — licensed, insured, on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-colors inline-flex items-center justify-center group"
              >
                Get a Free Quote
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
