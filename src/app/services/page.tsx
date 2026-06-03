"use client";

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';

// Service structured data — links each service to the LocalBusiness node
// declared in src/app/layout.tsx via the @id reference. Drives Google's
// rich-result eligibility for service-specific queries.
const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.tofagroup.com.au/services#custom-home-building",
      "name": "Custom Home Building",
      "serviceType": "Custom home construction",
      "provider": { "@id": "https://www.tofagroup.com.au/#business" },
      "areaServed": { "@type": "City", "name": "Melbourne" },
      "description": "Bespoke residential builds designed around your block, brief, and budget. Fixed-price contracts, 9–14 month delivery, one team end-to-end.",
      "url": "https://www.tofagroup.com.au/services/residential-construction"
    },
    {
      "@type": "Service",
      "@id": "https://www.tofagroup.com.au/services#luxury-design-and-construction",
      "name": "Luxury Home Design and Construction",
      "serviceType": "Integrated design and build",
      "provider": { "@id": "https://www.tofagroup.com.au/#business" },
      "areaServed": { "@type": "City", "name": "Melbourne" },
      "description": "One contract for design and construction — concept sketches, council approvals, structural engineering, premium finishes, all in-house.",
      "url": "https://www.tofagroup.com.au/services/design-and-build"
    },
    {
      "@type": "Service",
      "@id": "https://www.tofagroup.com.au/services#knockdown-rebuild",
      "name": "Knockdown Rebuild",
      "serviceType": "Demolition and new home construction",
      "provider": { "@id": "https://www.tofagroup.com.au/#business" },
      "areaServed": { "@type": "City", "name": "Melbourne" },
      "description": "Demolish the old, build the new. Stay in your existing Melbourne suburb with a brand-new fixed-price custom home on the same block.",
      "url": "https://www.tofagroup.com.au/services/knockdown-rebuild"
    },
    {
      "@type": "Service",
      "@id": "https://www.tofagroup.com.au/services#renovations-extensions",
      "name": "Home Extensions and Renovations",
      "serviceType": "Renovation and extension construction",
      "provider": { "@id": "https://www.tofagroup.com.au/#business" },
      "areaServed": { "@type": "City", "name": "Melbourne" },
      "description": "Second-storey additions, rear extensions, full interior renovations. We work around what's already there with fixed-price contracts.",
      "url": "https://www.tofagroup.com.au/services/renovations-extensions"
    }
  ]
};
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { Card } from '@/components/ui/card';
import { RevealOnScroll, StaggerReveal } from '@/components/motion/Reveals';
import { MotionDiv, MotionH2, MotionP, staggerItem } from '@/components/motion/MotionPrimitives';
import Testimonials from '@/components/marketing/Testimonials';
import Link from 'next/link';
import { 
  Building2, 
  Home as HomeIcon, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Wrench,
  ClipboardList,
  Wallet
} from 'lucide-react';

const services = [
  {
    title: "Residential Construction",
    description: "Quality residential builds across Australia. We manage the full construction lifecycle for single and multi-unit residential projects.",
    features: [
      "Single-family home construction",
      "Multi-unit residential developments",
      "Custom home design and build",
      "Quality assurance throughout construction",
      "On-time project delivery"
    ],
    href: "/contact",
    ctaText: "Start Your Project",
    icon: <HomeIcon className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "Commercial Construction",
    description: "Commercial construction projects managed from design through to completion with full project oversight.",
    features: [
      "Office and retail construction",
      "Commercial fit-outs",
      "Industrial buildings",
      "Compliance and safety management",
      "Timeline and budget control"
    ],
    href: "/contact",
    ctaText: "Discuss Your Project",
    icon: <Building2 className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "Project Management",
    description: "End-to-end project management ensuring quality, compliance, and on-time delivery from planning to handover.",
    features: [
      "Full project lifecycle oversight",
      "Quality and compliance management",
      "Timeline and milestone tracking",
      "Transparent communication and reporting",
      "Risk management and mitigation"
    ],
    href: "/contact",
    ctaText: "Learn More",
    icon: <ClipboardList className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "Design & Build",
    description: "Integrated design and construction services bringing your vision to life with seamless coordination.",
    features: [
      "Architectural design collaboration",
      "Planning and permit coordination",
      "Material selection guidance",
      "Budget optimization",
      "Construction documentation"
    ],
    href: "/contact",
    ctaText: "Start Design Process",
    icon: <Wrench className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "Renovations & Extensions",
    description: "Transform and expand existing properties with expert renovation and extension services.",
    features: [
      "Home renovations and upgrades",
      "Property extensions",
      "Kitchen and bathroom remodels",
      "Structural modifications",
      "Heritage and period property work"
    ],
    href: "/contact",
    ctaText: "Plan Your Renovation",
    icon: <HomeIcon className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "Build Now, Pay Later",
    description: "Flexible construction payment solutions allowing eligible clients to commence projects now and manage payments over time.",
    features: [
      "No upfront lump sum required",
      "Flexible payment structures",
      "Suitable for residential & commercial",
      "Subject to eligibility criteria",
      "Maintain same quality standards"
    ],
    href: "/build-now-pay-later",
    ctaText: "Check Eligibility",
    icon: <Wallet className="h-6 w-6 text-gtb-aero" />
  }
];

const process = [
  {
    step: "1",
    title: "Initial Consultation",
    description: "We start with a detailed consultation to understand your vision, requirements, and budget."
  },
  {
    step: "2",
    title: "Planning & Design",
    description: "Develop comprehensive plans, obtain necessary permits, and finalize design specifications."
  },
  {
    step: "3",
    title: "Construction Phase",
    description: "Execute the build with quality oversight, regular updates, and compliance management."
  },
  {
    step: "4",
    title: "Quality Completion",
    description: "Final inspections, quality assurance checks, and handover of your completed project."
  }
];

const whyChoose = [
  {
    icon: <CheckCircle className="h-8 w-8 text-gtb-aero" />,
    title: "Quality Assured",
    description: "Every project meets strict quality and compliance standards"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-gtb-aero" />,
    title: "Transparent Process",
    description: "Clear communication and regular updates throughout your build"
  },
  {
    icon: <Building2 className="h-8 w-8 text-gtb-aero" />,
    title: "Australia-Wide",
    description: "Delivering projects across Australia with consistent standards"
  },
  {
    icon: <Wallet className="h-8 w-8 text-gtb-aero" />,
    title: "Flexible Financing",
    description: "Build Now, Pay Later options available for eligible clients"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gtb-navy py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/tofaphotos/Verv_PROJECTS_Amara.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gtb-navy/75" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our Construction Services
                </h1>
                <p className="text-xl text-white/75 max-w-3xl mx-auto">
                  TOFA Group delivers comprehensive construction services across Australia. From planning to completion, we manage every stage of your project.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <ServiceCard {...service} />
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gtb-navy mb-4">
                  Our Construction Process
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  A proven approach to delivering quality construction projects
                </p>
              </div>
            </RevealOnScroll>
            
            <StaggerReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((item, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <div className="relative">
                      <div className="bg-white rounded-[20px] p-6 shadow-md hover:shadow-lg transition-shadow h-full">
                        <div className="w-12 h-12 bg-gtb-aero/10 rounded-full flex items-center justify-center mb-4">
                          <span className="text-2xl font-bold text-gtb-aero">{item.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gtb-navy mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      {index < process.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gtb-aero/30 transform -translate-y-1/2" />
                      )}
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Why Choose TOFA Group */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gtb-navy mb-4">
                  Why Choose TOFA Group
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Trusted construction delivery across Australia
                </p>
                      </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChoose.map((item, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                      <div className="flex justify-center mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold text-gtb-navy mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* In-depth — detailed service descriptions for SEO + buyer education */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="text-xs font-bold text-gtb-aero mb-3 tracking-widest uppercase">In Depth</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-4 font-brand">
                What TOFA Group actually delivers
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Detailed breakdowns of our four core services — process, inclusions, timelines, and what you can
                expect from each.
              </p>
            </div>

            <article className="prose prose-lg max-w-none mb-12">
              <h3 className="text-2xl font-bold text-gtb-navy mb-3 font-brand">Custom Home Building</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A TOFA Group custom home is designed around three things: your block, your brief, and your budget.
                We don&apos;t pull floor plans from a catalogue. Every site visit starts with a conversation — how
                you actually live, what you need this house to do for the next 20 years, and what you&apos;d never
                compromise on. From there our in-house design team produces concept sketches, refines them through
                revisions you actually see, and develops the full council documentation package.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Construction sits under one fixed-price contract — no variations, no scope creep, no quiet upgrades
                to the bill of materials. Quality trades work to a 2.7m-ceiling minimum, full-stone kitchen islands,
                double-glazed throughout, and a 7-star NatHERS energy rating standard. Weekly progress updates,
                full site access, and one project manager for every milestone from slab to handover. Typical
                delivery: 9–14 months from contract to keys.
              </p>
              <Link href="/contact" className="text-gtb-aero font-semibold hover:text-gtb-navy transition-colors inline-flex items-center">
                Book a free consultation →
              </Link>
            </article>

            <article className="prose prose-lg max-w-none mb-12 pt-10 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-gtb-navy mb-3 font-brand">Luxury Home Design and Construction</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most premium builds in Melbourne involve three companies: an architect, a builder, and a project
                manager. Three contracts, three margins, and a gap between design intent and what actually gets
                built. TOFA Group runs all three in-house under a single contract.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your project starts with a brief session — block analysis, lifestyle questions, finishes preferences,
                planning overlay review. Our designers develop scheme options informed by real construction costs.
                Once locked, we handle planning permits, structural engineering, energy ratings, and interior
                selections under the same roof. Construction is delivered by the same trades we&apos;ve used for over
                a decade — full-stone joinery, bespoke cabinetry, 2.7m+ ceilings, double-glazing standard, premium
                tapware. Material library access at our Ascot Vale showroom lets you see and touch every finish
                before sign-off.
              </p>
              <Link href="/projects" className="text-gtb-aero font-semibold hover:text-gtb-navy transition-colors inline-flex items-center">
                See recent luxury builds →
              </Link>
            </article>

            <article className="prose prose-lg max-w-none mb-12 pt-10 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-gtb-navy mb-3 font-brand">Knockdown Rebuild</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You love your suburb, your street, your school zone — but the existing house is tired, dark,
                undersized, or just wrong for how your family actually lives now. A knockdown rebuild gives you a
                brand-new home in the location you already own, often for the cost of a comparable established
                property purchase plus stamp duty saved.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                TOFA Group manages the entire process: site assessment, demolition permits, asbestos clearance,
                demolition, and full custom build of the new home — all under one fixed-price contract. We handle
                protected-tree assessments, neighbourhood character overlays, and heritage considerations common in
                Essendon, Moonee Ponds, and Strathmore. Most clients lease nearby during the 9–12 month build
                window and use existing land equity as the deposit, simplifying finance.
              </p>
              <Link href="/contact" className="text-gtb-aero font-semibold hover:text-gtb-navy transition-colors inline-flex items-center">
                Get a knockdown rebuild quote →
              </Link>
            </article>

            <article className="prose prose-lg max-w-none mb-4 pt-10 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-gtb-navy mb-3 font-brand">Home Extensions and Renovations</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sometimes the smartest project isn&apos;t knocking down — it&apos;s expanding. A second-storey addition
                turns a 3-bedroom into a 5. A rear extension brings the kitchen and living into the backyard. A
                heritage-front retention with a modern rear preserves street appeal while doubling usable space.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                TOFA Group&apos;s extension work pairs careful structural planning with finishes that match the
                original house — or contrast it deliberately, if that&apos;s the brief. We handle structural
                engineering for second-storey loads, foundation underpinning, roof transitions, and the inevitable
                surprise discoveries that come with opening up older walls. Council permits, planning approvals, and
                heritage overlay applications are managed in-house. Most projects can be staged so you stay living
                in the front of the house while we work on the back.
              </p>
              <Link href="/contact" className="text-gtb-aero font-semibold hover:text-gtb-navy transition-colors inline-flex items-center">
                Book a free site visit →
              </Link>
            </article>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gtb-navy mb-4">
                  Client Testimonials
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  See what our clients say about their projects
                </p>
              </div>
            </RevealOnScroll>
            
            <Testimonials />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gtb-navy to-gtb-navy-light text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Construction Project?
            </h2>
            <p className="text-xl mb-10 text-white max-w-2xl mx-auto">
              Contact TOFA Group today for a consultation on your residential or commercial construction needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-colors inline-flex items-center justify-center group"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/build-now-pay-later"
                className="bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-gtb-navy px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-all inline-flex items-center justify-center"
              >
                Build Now, Pay Later
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
