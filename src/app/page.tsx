"use client";

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RevealOnScroll, StaggerReveal } from '@/components/motion/Reveals';
import { MotionDiv, MotionH2, MotionP, staggerItem } from '@/components/motion/MotionPrimitives';
import TrustStrip from '@/components/marketing/TrustStrip';
import PartnerLogos from '@/components/marketing/PartnerLogos';
import StickyHeader from '@/components/marketing/StickyHeader';
import Testimonials from '@/components/marketing/Testimonials';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Home as HomeIcon, 
  DollarSign, 
  Users, 
  Building2, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Handshake,
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
    title: "Quality Construction",
    description: "Every project meets strict quality, safety, and compliance standards.",
    icon: <Building2 className="h-8 w-8 text-gtb-aero" />
  },
  {
    title: "Flexible Financing", 
    description: "Build Now, Pay Later options available for eligible clients.",
    icon: <TrendingUp className="h-8 w-8 text-gtb-aero" />
  },
  {
    title: "End-to-End Management",
    description: "Full project oversight from planning through to completion.",
    icon: <CheckCircle className="h-8 w-8 text-gtb-aero" />
  },
  {
    title: "Transparent Process",
    description: "Clear communication and updates throughout your build.",
    icon: <Users className="h-8 w-8 text-gtb-aero" />
  },
  {
    title: "Competitive Pricing",
    description: "Quality construction delivered at competitive market rates.",
    icon: <DollarSign className="h-8 w-8 text-gtb-aero" />
  },
  {
    title: "On-Time Delivery",
    description: "We manage timelines to ensure your project stays on schedule.",
    icon: <Wrench className="h-8 w-8 text-gtb-aero" />
  }
];

const services = [
  {
    title: "Residential Construction",
    description: "Quality residential construction managed from planning through to completion with full project oversight.",
    features: [
      "Personalized builder recommendations",
      "Access to exclusive deals",
      "Quality assurance guarantee",
      "Ongoing project support"
    ],
    href: "/services#builder-connection",
    ctaText: "Connect me to a builder",
    icon: <Building2 className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "Finance Assistance",
    description: "Navigate the complex world of home financing with our expert guidance and first home buyer grants.",
    features: [
      "First Home Buyer Grant assistance",
      "KiwiSaver rollover support",
      "Loan pre-approval guidance",
      "Investment property financing"
    ],
    href: "/services#finance",
    ctaText: "Get me finance",
    icon: <DollarSign className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "Turnkey Investment Packages",
    description: "Complete investment packages ready for immediate rental income with guaranteed returns.",
    features: [
      "Fully furnished properties",
      "Professional tenant placement",
      "Property management included",
      "Detailed ROI projections"
    ],
    href: "/packages",
    ctaText: "Learn more about Packages",
    icon: <HomeIcon className="h-6 w-6 text-gtb-aero" />
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <StickyHeader />
      
      <main>
        {/* Hero Section */}
        <Hero />
        <TrustStrip />
        <PartnerLogos />
        
        {/* How It Works Section */}
        <section className="section-padding bg-gradient-to-b from-white via-green-50/10 to-gray-50/30 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(107, 142, 35, 0.03), transparent)",
                "radial-gradient(circle at 80% 50%, rgba(107, 142, 35, 0.05), transparent)",
                "radial-gradient(circle at 20% 50%, rgba(107, 142, 35, 0.03), transparent)",
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <MotionH2 
                  className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-4"
                  variants={staggerItem}
                >
                  How It Works
                </MotionH2>
                <MotionP 
                  className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                  variants={staggerItem}
                >
                  Our simple 3-step process makes building your dream home effortless
                </MotionP>
              </div>
            </RevealOnScroll>
            
            <StaggerReveal staggerDelay={0.15}>
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {howItWorks.map((step, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="p-8 text-center bg-white border-gray-200/60">
                      <div className="space-y-5">
                        <motion.div 
                          className="flex justify-center"
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ 
                            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                            rotate: { duration: 0.5, type: "spring", stiffness: 300 }
                          }}
                        >
                          <motion.div 
                            className="bg-gradient-to-br from-gtb-aero/25 to-gtb-aero/10 p-4 rounded-[15px] border-2 border-gtb-aero/20 shadow-lg"
                            animate={{
                              boxShadow: [
                                "0 4px 6px -1px rgba(107, 142, 35, 0.1)",
                                "0 10px 15px -3px rgba(107, 142, 35, 0.2)",
                                "0 4px 6px -1px rgba(107, 142, 35, 0.1)",
                              ]
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {step.icon}
                          </motion.div>
                        </motion.div>
                        <motion.div 
                          className="text-sm font-semibold text-gtb-aero uppercase tracking-wide"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Step {step.step}
                        </motion.div>
                        <h3 className="text-xl font-bold text-gtb-navy">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-[15px]">{step.description}</p>
                      </div>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-gtb-aero/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gtb-aero/5 rounded-full blur-3xl"></div>
          </motion.div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <MotionH2 
                  className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-4"
                  variants={staggerItem}
                >
                  Why Choose Us
                </MotionH2>
                <MotionP 
                  className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                  variants={staggerItem}
                >
                  We make building your first home simple, affordable, and stress-free
                </MotionP>
              </div>
            </RevealOnScroll>
            
            <StaggerReveal staggerDelay={0.1}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="p-6 bg-white border-gray-200/60">
                      <div className="space-y-4">
                        <motion.div 
                          className="flex items-start space-x-4"
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.div 
                            className="bg-gradient-to-br from-gtb-aero/20 to-gtb-aero/8 p-2.5 rounded-[12px] border-2 border-gtb-aero/20 flex-shrink-0 shadow-md"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            animate={{ 
                              y: [0, -3, 0],
                              boxShadow: [
                                "0 2px 4px rgba(107, 142, 35, 0.1)",
                                "0 4px 8px rgba(107, 142, 35, 0.2)",
                                "0 2px 4px rgba(107, 142, 35, 0.1)",
                              ]
                            }}
                            transition={{ 
                              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                              boxShadow: { duration: 2, repeat: Infinity },
                              rotate: { duration: 0.6, type: "spring", stiffness: 400 }
                            }}
                          >
                            {benefit.icon}
                          </motion.div>
                          <h3 className="text-lg font-bold text-gtb-navy leading-tight pt-0.5">{benefit.title}</h3>
                        </motion.div>
                        <p className="text-gray-600 leading-relaxed text-[15px] pl-12">{benefit.description}</p>
                      </div>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-gradient-to-b from-gray-50/50 via-green-50/20 to-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                "radial-gradient(ellipse at 50% 0%, rgba(107, 142, 35, 0.04), transparent)",
                "radial-gradient(ellipse at 50% 100%, rgba(107, 142, 35, 0.06), transparent)",
                "radial-gradient(ellipse at 50% 0%, rgba(107, 142, 35, 0.04), transparent)",
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <MotionH2 
                  className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-4"
                  variants={staggerItem}
                >
                  Our Services
                </MotionH2>
                <MotionP 
                  className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                  variants={staggerItem}
                >
                  Everything you need to build your dream home or investment property
                </MotionP>
              </div>
            </RevealOnScroll>
            
            <StaggerReveal staggerDelay={0.1}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      features={service.features}
                      href={service.href}
                      ctaText={service.ctaText}
                      icon={service.icon}
                    />
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Final CTA Section */}
        <section className="section-padding bg-gtb-navy relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-gtb-navy via-gtb-navy to-gtb-navy-light/50"
            animate={{
              background: [
                "linear-gradient(to bottom right, #0A3370, #0A3370, rgba(26, 74, 138, 0.5))",
                "linear-gradient(to bottom right, #0A3370, rgba(26, 74, 138, 0.3), rgba(26, 74, 138, 0.5))",
                "linear-gradient(to bottom right, #0A3370, #0A3370, rgba(26, 74, 138, 0.5))",
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <MotionH2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
                Ready to Build Your Dream Home?
              </MotionH2>
              <MotionP className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have built their dream properties with our help.
              </MotionP>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ 
                    boxShadow: [
                      "0 10px 15px -3px rgba(107, 142, 35, 0.3)",
                      "0 20px 25px -5px rgba(107, 142, 35, 0.4)",
                      "0 10px 15px -3px rgba(107, 142, 35, 0.3)",
                    ]
                  }}
                  transition={{
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Button asChild size="lg" className="bg-gtb-aero hover:bg-gtb-aero-light text-white text-lg px-8 py-4 rounded-[15px] font-semibold shadow-lg">
                    <Link href="/contact">
                      Book Free Consultation
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="inline-block"
                      >
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
                <Button asChild variant="outline" size="lg" className="border-2 border-white/40 text-white bg-white/10 hover:bg-white hover:text-gtb-navy backdrop-blur-sm text-lg px-8 py-4 rounded-[15px] font-medium">
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}