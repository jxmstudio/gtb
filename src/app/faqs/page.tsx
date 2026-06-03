"use client";

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';

// FAQPage structured data — emitted in the JSX below as a JSON-LD <script>.
// Covers the 7 highest-value questions surfaced from real client queries.
// Update the visible faqCategories below when changing these.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a custom home build take in Melbourne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical TOFA Group custom home takes 9–14 months from contract signing to handover. Design and council permits run 3–5 months, construction 6–9 months depending on size and finish complexity."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a custom home cost in Melbourne in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TOFA Group custom homes start from around $650,000 for a 3-bedroom build with quality inclusions. Larger 4–5 bedroom homes with premium finishes typically range $850,000 to $1.5M+. We provide a fixed-price contract after site assessment so there are no surprises."
      }
    },
    {
      "@type": "Question",
      "name": "Which Melbourne suburbs does TOFA Group service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build across Melbourne's western and north-western suburbs including Keilor, Avondale Heights, Essendon, Moonee Ponds, Taylors Lakes, Niddrie, Strathmore, Airport West and surrounds. Contact us if your block is outside this radius — we take on select projects further afield."
      }
    },
    {
      "@type": "Question",
      "name": "What makes TOFA Group different from a volume builder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Volume builders pick a floor plan from a catalogue. TOFA designs every home from scratch around your block, brief, and budget, then builds it under one fixed-price contract. One team handles design, build, and project management — no architect/builder gap, no variations, no offshore call centres."
      }
    },
    {
      "@type": "Question",
      "name": "How do I start a project with TOFA Group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book a free 30-minute consultation via our contact form or call 1300 000 685. We'll discuss your block, brief, and budget, visit the site, and within 7 days provide a transparent fixed-price quote and design proposal."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in a TOFA Group luxury build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard inclusions: 2.7m ceilings, double-glazed windows, full-stone kitchen islands, premium cabinetry, ducted heating and cooling, Colorbond roofing, and a 7-star NatHERS rating. Finish upgrades and bespoke joinery are quoted on top."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle council approvals and building permits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. TOFA Group manages all planning permits, building permits, and council compliance for every project — including heritage overlays, vegetation reports, and energy ratings. You sign one contract and we handle every approval step through to occupancy certificate."
      }
    }
  ]
};
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RevealOnScroll, StaggerReveal } from '@/components/motion/Reveals';
import { MotionDiv, staggerItem } from '@/components/motion/MotionPrimitives';
import Link from 'next/link';
import { 
  ChevronDown,
  ChevronUp,
  ArrowRight,
  MessageCircle,
  Phone
} from 'lucide-react';

// Rewritten 2026 — replaced 19 generic FAQs with 10 Melbourne-specific
// answers focused on the questions actual TOFA Group leads ask. Keep this
// array in sync with the faqSchema JSON-LD above when adding/changing
// entries Google should index.
const faqCategories = [
  {
    category: "Getting Started",
    faqs: [
      {
        question: "How long does a custom home build take in Melbourne?",
        answer: "Typical TOFA Group custom homes take 9–14 months from contract signing to keys-in-hand. The breakdown: 3–5 months for design refinement, council planning permits, and building permits — this phase varies most depending on council, heritage overlays, and complexity. Construction runs 6–9 months for most builds, longer for larger homes or sites with site-access challenges. We give you a realistic timeline at quote stage with month-by-month milestones, and provide weekly progress updates throughout. Many recent TOFA builds have delivered 2–4 weeks ahead of schedule — overbuilding the timeline buffer is part of our quote process."
      },
      {
        question: "How much does a custom home cost in Melbourne in 2026?",
        answer: "A TOFA Group 3-bedroom custom home starts from around $650,000 with quality inclusions on a standard block. Family-sized 4–5 bedroom homes with premium finishes typically range $850,000–$1.5M. Luxury builds with bespoke joinery, full-stone kitchens, designer lighting, and high-end appliances can exceed $2M. The biggest cost variables are block size and shape, finish tier, and inclusions. After a free site visit we produce a fixed-price quote within 7 days — no estimates, no allowances, no surprise variations. The figure on the contract is the figure you pay."
      },
      {
        question: "How do I get started with TOFA Group?",
        answer: "Three steps. First, send an enquiry through our contact form or call 1300 000 685 — a director picks up. Second, we book a 30-minute discovery call to confirm your project is a fit for TOFA's approach. Third, we visit your block at no cost, take a brief, and within 7 days deliver a transparent fixed-price quote plus a concept direction. From there it's your call — no obligation, no high-pressure follow-up. Many clients take 2–4 weeks to decide; some come back 6 months later when finance lines up. The quote stays open and honest either way."
      },
      {
        question: "Which Melbourne suburbs does TOFA Group service?",
        answer: "Our core service area covers Melbourne's western and north-western suburbs: Keilor, Avondale Heights, Essendon, Moonee Ponds, Taylors Lakes, Niddrie, Strathmore, Aberfeldie, Airport West, Keilor East, and surrounds. We've also delivered builds in Truganina, Clyde North, and Glen Waverley for repeat clients and referrals. If your block is outside this radius, contact us — we take on select projects further afield, particularly for clients we already know. Our Ascot Vale showroom is centrally located for clients across Melbourne north and west to drop in for finishes consultations."
      }
    ]
  },
  {
    category: "Design & Build Process",
    faqs: [
      {
        question: "What does the TOFA design process look like?",
        answer: "Design starts with a 90-minute brief session — at our Ascot Vale showroom or at your block. We talk lifestyle, family stage, must-haves, never-haves, and budget envelope. Within 2 weeks our in-house designers present two concept directions: floor plans, exterior renders, key material moods. You review, we refine. Once the scheme is locked we develop the documentation package — detailed drawings, schedules, council permit submissions, structural engineering, energy ratings. The full design phase typically runs 3–5 months including council. You attend a finishes selection day at our showroom mid-design phase to lock tapware, tiles, joinery, lighting, and flooring before construction starts."
      },
      {
        question: "Do you handle council permits and approvals?",
        answer: "Yes — every permit, every approval, every council interaction is managed in-house by TOFA Group. Planning permits, building permits, heritage overlay applications, vegetation reports, vehicle crossover applications, asset protection, and occupancy certificates are all part of our standard scope. You sign one contract and we handle every regulatory step through to keys-in-hand. We have established relationships with Moonee Valley, Brimbank, and Maribyrnong councils — the three covering most of our service area. When complications arise (neighbour objections, character overlay disputes), we manage them with you rather than escalating cost or delay."
      },
      {
        question: "What's included in a luxury TOFA build?",
        answer: "Standard inclusions across every TOFA Group custom home: 2.7m ceilings minimum, full-stone kitchen island and benchtops, double-glazed windows throughout, ducted heating and cooling, Colorbond roofing, 7-star NatHERS energy rating, premium cabinetry, designer-grade tapware, and ceramic tile or engineered timber flooring. Garages, alfresco areas, and laundries are finished to the same standard as living spaces. Our standard luxury tier sits above what most Melbourne volume builders include in their premium ranges. Upgrades on top: bespoke joinery, marble or natural-stone benchtops, smart home integration, pool integration, and concierge landscape design. The inclusions list is itemised line by line at contract."
      },
      {
        question: "How is TOFA different from a volume builder?",
        answer: "Volume builders pick a floor plan from a catalogue and customise selectively. They batch-purchase materials, run high project counts per site supervisor, and minimise the time you spend with anyone above sales rep level. TOFA Group designs every home from scratch around your block. One designer takes your brief to documentation. One project manager runs your build. One director signs off on every variation request. Trades are sourced for craftsmanship rather than lowest bid. The contract is fixed-price — no allowances that blow out at finishes selection. You get the directors' phone numbers, not a sales rep's. Trade-off: smaller volume, longer lead time on project start, higher price per square metre. Worth it if you want a real custom home."
      }
    ]
  },
  {
    category: "Sustainability & Finance",
    faqs: [
      {
        question: "Do you build sustainable / energy-efficient homes?",
        answer: "Every TOFA Group build hits a minimum 7-star NatHERS energy rating — above the 6-star regulatory minimum. Standard inclusions deliver this without upgrades: double-glazed windows, R5 ceiling and wall insulation, sealed building envelope, and zoned ducted heating/cooling. Upgrades available: solar PV systems sized to household consumption, battery storage, heat-pump hot water, electric-ready induction cooktops, EV charger pre-wiring, rainwater tanks integrated for toilet flushing and irrigation, and 8–9 star designs with passive-house principles for clients targeting net-zero energy bills. We scope these at brief stage so they're costed into the fixed-price contract rather than retrofitted later at 2–3× the cost."
      },
      {
        question: "What finance options are available?",
        answer: "TOFA Group works with a broker network familiar with construction loans across the big four banks and select non-bank lenders. We don't sell finance — we connect you with brokers we trust, who shop the market on your behalf. For knockdown rebuilds, most clients use the equity in their existing land as the deposit, simplifying the loan structure. For first home buyers, we coordinate with brokers around First Home Owner Grant eligibility, First Home Super Saver Scheme withdrawals, and Stamp Duty concession applications. Progress-claim invoicing matches each major build stage so you draw down the loan only as construction completes."
      }
    ]
  }
];

export default function FAQs() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gtb-navy mb-6">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Find answers to common questions about working with TOFA Group on your construction project
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <RevealOnScroll>
                    <h2 className="text-2xl font-bold text-gtb-navy mb-6">
                      {category.category}
                    </h2>
                  </RevealOnScroll>

                  <StaggerReveal>
                    <div className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => {
                        const itemId = `${categoryIndex}-${faqIndex}`;
                        const isOpen = openItems.includes(itemId);

                        return (
                          <MotionDiv key={faqIndex} variants={staggerItem}>
                            <Card 
                              className="cursor-pointer hover:shadow-md transition-shadow"
                              onClick={() => toggleItem(itemId)}
                            >
                              <CardHeader>
                                <div className="flex justify-between items-start">
                                  <CardTitle className="text-lg pr-8">
                                    {faq.question}
                                  </CardTitle>
                                  <button 
                                    className="flex-shrink-0 text-gtb-aero hover:text-gtb-navy transition-colors"
                                    aria-label={isOpen ? "Collapse answer" : "Expand answer"}
                                  >
                                    {isOpen ? (
                                      <ChevronUp className="h-6 w-6" />
                                    ) : (
                                      <ChevronDown className="h-6 w-6" />
                                    )}
                                  </button>
                                </div>
                              </CardHeader>
                              {isOpen && (
                                <CardContent>
                                  <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </CardContent>
                              )}
                            </Card>
                          </MotionDiv>
                        );
                      })}
                    </div>
                  </StaggerReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <Card className="bg-gradient-to-br from-gtb-navy to-gtb-navy/90 text-white p-8 md:p-12">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                  <p className="text-xl mb-8 text-white">
                    Our team is here to help. Contact TOFA Group to discuss your project or get answers to any questions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/contact" 
                      className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg transition-colors inline-flex items-center justify-center"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Contact Us
                    </Link>
                    <Link 
                      href="/services"
                      className="bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-gtb-navy px-8 py-4 rounded-lg text-lg font-bold shadow-lg transition-all inline-flex items-center justify-center"
                    >
                      View Our Services
                    </Link>
                  </div>
                </div>
              </Card>
            </RevealOnScroll>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gtb-navy to-gtb-navy-light text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-10 text-white max-w-2xl mx-auto">
              Contact TOFA Group today for a consultation on your residential or commercial construction needs
            </p>
            <Link
              href="/contact"
              className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-colors inline-flex items-center justify-center group"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

