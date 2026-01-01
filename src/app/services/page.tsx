"use client";

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { Card } from '@/components/ui/card';
import { RevealOnScroll, StaggerReveal } from '@/components/motion/Reveals';
import { MotionDiv, MotionH2, MotionP, staggerItem } from '@/components/motion/MotionPrimitives';
import Testimonials from '@/components/marketing/Testimonials';
import { AnimatedButton } from '@/components/motion/AnimatedButton';
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
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/20 py-20 overflow-hidden">
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(ellipse at top right, rgba(107, 142, 35, 0.08), transparent)",
                "radial-gradient(ellipse at top right, rgba(107, 142, 35, 0.04), transparent)",
                "radial-gradient(ellipse at top right, rgba(107, 142, 35, 0.08), transparent)",
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gtb-navy mb-6">
                  Our Construction Services
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
        <section className="py-16 bg-gradient-to-br from-gtb-navy to-gtb-navy/90 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Construction Project?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Contact TOFA Group today for a consultation on your residential or commercial construction needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton asChild size="lg">
                  <Link href="/contact" className="inline-flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </AnimatedButton>
                <AnimatedButton asChild variant="outline" size="lg">
                  <Link href="/build-now-pay-later" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-gtb-navy">
                    Build Now, Pay Later
                  </Link>
                </AnimatedButton>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
