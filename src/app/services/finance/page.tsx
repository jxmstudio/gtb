import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomeContactForm } from '@/components/marketing/HomeContactForm';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Construction Finance | TOFA Group",
  description: "Construction finance support from pre-approval to progress payments. TOFA Group coordinates with trusted broker and lender partners — book a free consultation.",
  alternates: { canonical: 'https://www.tofagroup.com.au/services/finance' },
};

/*
 * Finance service page — scaffold.
 * TODO: client to supply final copy for this page (headline, intro,
 * lender/broker partner details, process steps). Interim copy below is
 * deliberately general and flagged as general information, not financial
 * advice.
 */

const points = [
  'Guidance on how construction loans and progress payments work',
  'Introductions to trusted broker and lender partners',
  'Finance support that lines up with your build contract and timeline',
  'Options for first home buyers, upgraders, and investors',
];

export default function Finance() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative bg-gtb-navy py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/tofaphotos/Verv_PROJECTS_Amara.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gtb-navy/75" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">Finance</div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Construction finance, sorted alongside your build
              </h1>
              {/* TODO: client to supply final intro copy */}
              <p className="text-xl text-white/75 mb-8 leading-relaxed">
                Financing a build works differently to buying an established home. TOFA Group connects you
                with trusted broker and lender partners so your finance lines up with your contract,
                your timeline, and your progress payments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors inline-flex items-center justify-center group"
                >
                  Book a Free Consultation
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

        {/* What this covers */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-6 font-brand">
              How TOFA Group can help
            </h2>
            {/* TODO: client to supply final body copy */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We&apos;re builders, not brokers — but after 15 years of builds we know exactly what lenders
              need from a construction contract, and which finance partners actually deliver. We&apos;ll
              connect you with the right people and keep the build side ready to move as soon as finance is.
            </p>
            <ul className="space-y-4 mb-10">
              {points.map((point) => (
                <li key={point} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-gtb-aero mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 leading-relaxed">
              TOFA Group is not a licensed financial adviser or credit provider. Information on this page
              is general in nature and does not take your personal circumstances into account. Always seek
              independent financial advice before making borrowing decisions.
            </p>
          </div>
        </section>

        {/* Lead form */}
        <HomeContactForm />
      </main>

      <Footer />
    </div>
  );
}
