import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomeContactForm } from '@/components/marketing/HomeContactForm';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Super/KiwiSaver Rollover | TOFA Group",
  description: "Explore whether eligible superannuation or KiwiSaver funds can support your build. TOFA Group coordinates with licensed advisers — book a free consultation.",
  alternates: { canonical: 'https://www.tofagroup.com.au/services/super-kiwisaver-rollover' },
};

/*
 * Super/KiwiSaver Rollover service page — scaffold.
 * TODO: client to supply final copy for this page (headline, intro,
 * eligibility details, process steps). Interim copy below is deliberately
 * general and flagged as general information, not financial advice.
 */

const points = [
  'Understand whether your circumstances may allow super or KiwiSaver funds to play a role in your build',
  'Coordination with licensed financial advisers — TOFA Group does not provide financial advice',
  'Works alongside our Build Now, Pay Later and construction finance options',
  'One point of contact from first conversation through to construction',
];

export default function SuperKiwiSaverRollover() {
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
              <div className="text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">Super/KiwiSaver Rollover</div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Put your super to work on your build
              </h1>
              {/* TODO: client to supply final intro copy */}
              <p className="text-xl text-white/75 mb-8 leading-relaxed">
                Depending on your circumstances, eligible superannuation or KiwiSaver funds may be able to
                support your building plans. TOFA Group works with licensed advisers to help you explore
                your options — general information only, not financial advice.
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
              We&apos;ll walk you through the conversation with the right people. Whether a rollover is
              suitable depends entirely on your personal situation, which is why every enquiry is referred
              to licensed advisers before any decisions are made.
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
              TOFA Group is not a licensed financial adviser. Information on this page is general in
              nature and does not take your personal circumstances into account. Always seek independent
              financial advice before making decisions about superannuation or KiwiSaver funds.
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
