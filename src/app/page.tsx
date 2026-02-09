"use client";

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import PartnerLogos from '@/components/marketing/PartnerLogos';
import Testimonials from '@/components/marketing/Testimonials';
import Link from 'next/link';
import { 
  DollarSign, 
  Building2, 
  CheckCircle,
  MessageCircle,
  Wrench
} from 'lucide-react';

const howItWorks = [
  {
    step: "1",
    title: "Plan",
    description: "Initial consultation to understand your vision, budget, and project requirements.",
    icon: <MessageCircle className="h-8 w-8 text-gtb-aero" />
  },
  {
    step: "2", 
    title: "Build",
    description: "We manage the full construction lifecycle with quality oversight and compliance.",
    icon: <Wrench className="h-8 w-8 text-gtb-aero" />
  },
  {
    step: "3",
    title: "Deliver",
    description: "On-time project completion with quality assurance and final handover.",
    icon: <CheckCircle className="h-8 w-8 text-gtb-aero" />
  }
];

const benefits = [
  {
    title: "Licensed & Insured",
    description: "Fully licensed construction with comprehensive insurance coverage and warranty protection.",
    icon: <CheckCircle className="h-8 w-8 text-gtb-aero" />
  },
  {
    title: "Flexible Financing", 
    description: "Build Now, Pay Later options available for eligible clients to help manage cash flow.",
    icon: <DollarSign className="h-8 w-8 text-gtb-aero" />
  },
  {
    title: "Full Project Management",
    description: "Complete oversight from initial consultation through to final handover and completion.",
    icon: <Wrench className="h-8 w-8 text-gtb-aero" />
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control processes ensure every project meets building standards.",
    icon: <Building2 className="h-8 w-8 text-gtb-aero" />
  },
  {
    title: "Transparent Communication",
    description: "Regular updates and clear documentation throughout your construction journey.",
    icon: <MessageCircle className="h-8 w-8 text-gtb-aero" />
  },
  {
    title: "On-Schedule Delivery",
    description: "Proven track record of completing projects on time with minimal delays.",
    icon: <CheckCircle className="h-8 w-8 text-gtb-aero" />
  }
];

const services = [
  {
    title: "Residential Construction",
    description: "Quality residential construction managed from planning through to completion with full project oversight.",
    features: [
      "Custom home design & build",
      "Multi-dwelling developments",
      "Quality assurance guarantee",
      "Full project documentation"
    ],
    href: "/services",
    ctaText: "View residential services",
    icon: <Building2 className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "Commercial Projects",
    description: "Professional commercial construction services for businesses across Australia with proven project delivery.",
    features: [
      "Retail & office spaces",
      "Industrial facilities",
      "Project compliance management",
      "Timeline & budget control"
    ],
    href: "/services",
    ctaText: "View commercial services",
    icon: <Building2 className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "Build Now, Pay Later",
    description: "Flexible construction payment solutions allowing you to commence your project now and manage payments over time.",
    features: [
      "No upfront lump sum required",
      "Flexible payment structures",
      "Suitable for all project types",
      "Subject to eligibility"
    ],
    href: "/build-now-pay-later",
    ctaText: "Learn about financing",
    icon: <DollarSign className="h-6 w-6 text-gtb-aero" />
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        <PartnerLogos />
        
        {/* How It Works Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-4">
                Our Construction Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Three clear stages from concept to completion
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-14 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gtb-aero/30 to-transparent" style={{zIndex: 0}}></div>
              
              {howItWorks.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gtb-aero/50 transition-all duration-300 hover:shadow-xl relative z-10">
                    {/* Step number badge */}
                    <div className="absolute -top-4 left-8 bg-gtb-navy text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                      {step.step}
                    </div>
                    
                    <div className="mt-4 space-y-4">
                      <div className="flex justify-center">
                        <div className="bg-gtb-aero/10 p-4 rounded-xl">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gtb-navy text-center">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-center">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-4">
                Why Build with TOFA Group
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the difference of working with a construction partner committed to excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gtb-aero/10 p-3 rounded-lg flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gtb-navy mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Complete construction solutions tailored to your project needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  href={service.href}
                  ctaText={service.ctaText}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Final CTA Section */}
        <section className="section-padding bg-gtb-navy">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your Dream Project?
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your construction project and how TOFA Group can bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gtb-aero hover:bg-gtb-aero-light text-white text-lg px-10 py-4 rounded-lg font-semibold shadow-lg transition-all duration-200"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/projects"
                className="border-2 border-white/40 text-white bg-white/10 hover:bg-white hover:text-gtb-navy backdrop-blur-sm text-lg px-10 py-4 rounded-lg font-medium transition-all duration-200"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}