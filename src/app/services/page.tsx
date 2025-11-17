"use client";

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { Card } from '@/components/ui/card';
import { RevealOnScroll, StaggerReveal } from '@/components/motion/Reveals';
import { MotionDiv, MotionH2, MotionP, staggerItem } from '@/components/motion/MotionPrimitives';
import StickyHeader from '@/components/marketing/StickyHeader';
import Testimonials from '@/components/marketing/Testimonials';
import PartnerLogos from '@/components/marketing/PartnerLogos';
import { AnimatedButton } from '@/components/motion/AnimatedButton';
import Link from 'next/link';
import { 
  Building2, 
  DollarSign, 
  Home as HomeIcon, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar
} from 'lucide-react';

const services = [
  {
    title: "Builder Connection & Matching",
    description: "We connect you with Australia&apos;s most reputable builders based on your specific needs, budget, and location preferences.",
    features: [
      "Personalized builder recommendations based on your requirements",
      "Access to exclusive deals and bulk pricing discounts",
      "Quality assurance guarantee on all recommended builders",
      "Ongoing project support throughout construction",
      "Builder performance tracking and feedback"
    ],
    href: "/contact",
    ctaText: "Connect me to a builder",
    icon: <Building2 className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "Finance Assistance & First Home Buyer Grants",
    description: "Navigate the complex world of home financing with our expert guidance and comprehensive grant assistance.",
    features: [
      "First Home Buyer Grant application assistance",
      "KiwiSaver rollover support and guidance",
      "Loan pre-approval process optimization",
      "Investment property financing strategies",
      "Government incentive program navigation"
    ],
    href: "/contact",
    ctaText: "Get me finance",
    icon: <DollarSign className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "KiwiSaver Rollover Services",
    description: "Specialized assistance for New Zealand citizens looking to use their KiwiSaver funds for Australian property purchases.",
    features: [
      "KiwiSaver withdrawal process guidance",
      "Australian tax implications consultation",
      "Cross-border financial planning",
      "Documentation and compliance support",
      "Timeline optimization for fund transfers"
    ],
    href: "/contact",
    ctaText: "Start KiwiSaver Process",
    icon: <TrendingUp className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "Turnkey Investment Packages",
    description: "Complete investment packages ready for immediate rental income with guaranteed returns and professional management.",
    features: [
      "Fully furnished and tenant-ready properties",
      "Professional tenant placement services",
      "Ongoing property management included",
      "Detailed ROI projections and analysis",
      "Portfolio diversification strategies"
    ],
    href: "/packages",
    ctaText: "Learn more about Packages",
    icon: <HomeIcon className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "Investment Property Consultation",
    description: "Strategic guidance for building a profitable property investment portfolio in Melbourne&apos;s Western suburbs.",
    features: [
      "Market analysis and location recommendations",
      "Investment strategy development",
      "Cash flow projections and analysis",
      "Tax optimization strategies",
      "Portfolio growth planning"
    ],
    href: "/investors",
    ctaText: "Plan Your Investment",
    icon: <TrendingUp className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "First-Home Buyer Guidance",
    description: "Comprehensive support for first-time home buyers navigating the entire process from planning to settlement.",
    features: [
      "Step-by-step process guidance",
      "Budget planning and affordability assessment",
      "Builder selection and comparison",
      "Contract review and negotiation",
      "Settlement support and coordination"
    ],
    href: "/first-home-buyers",
    ctaText: "Start Your Journey",
    icon: <Users className="h-6 w-6 text-gtb-aero" />
  }
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We discuss your needs, budget, and goals to understand your requirements."
  },
  {
    step: "02", 
    title: "Builder Matching",
    description: "We identify and connect you with the most suitable builders for your project."
  },
  {
    step: "03",
    title: "Finance Setup",
    description: "We assist with loan applications, grants, and financial planning."
  },
  {
    step: "04",
    title: "Project Management",
    description: "We provide ongoing support throughout the construction process."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <StickyHeader />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50/80 via-white to-blue-50/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center max-w-3xl mx-auto">
                <MotionH2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gtb-navy mb-5 tracking-tight">
                  Our Services
                </MotionH2>
                <MotionP className="text-lg lg:text-xl text-gray-700 mb-10 leading-relaxed">
                  From builder matching to finance assistance, we provide comprehensive support for your building journey in Melbourne&apos;s Western suburbs.
                </MotionP>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AnimatedButton asChild size="lg" className="bg-gtb-aero hover:bg-gtb-aero-light text-white text-lg px-8 py-4 rounded-[15px] font-semibold shadow-lg">
                    <Link href="/contact">
                      Book Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </AnimatedButton>
                  <AnimatedButton asChild variant="outline" size="lg" className="border-2 border-gtb-navy/20 text-gtb-navy hover:bg-gtb-navy hover:text-white hover:border-gtb-navy text-lg px-8 py-4 rounded-[15px] font-medium">
                    <Link href="/packages">View Packages</Link>
                  </AnimatedButton>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <PartnerLogos />

        {/* Services Grid */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <MotionH2 className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-4">
                  How We Help You Build
                </MotionH2>
                <MotionP className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Our comprehensive services cover every aspect of your building journey, from initial planning to final settlement.
                </MotionP>
              </div>
            </RevealOnScroll>
            
            <StaggerReveal staggerDelay={0.1}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Process Section */}
        <section className="section-padding bg-gradient-to-b from-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <MotionH2 className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-4">
                  Our Process
                </MotionH2>
                <MotionP className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  A simple, step-by-step approach to building your dream home or investment property.
                </MotionP>
              </div>
            </RevealOnScroll>
            
            <StaggerReveal staggerDelay={0.1}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="text-center p-6 border-gray-200/60">
                      <motion.div 
                        className="bg-gradient-to-br from-gtb-aero to-gtb-aero-light text-white w-12 h-12 rounded-[15px] flex items-center justify-center text-lg font-bold mx-auto mb-4 shadow-md"
                        animate={{ 
                          rotate: [0, 3],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                          scale: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                        }}
                      >
                        {step.step}
                      </motion.div>
                      <h3 className="text-xl font-bold text-gtb-navy mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-[15px] leading-relaxed">{step.description}</p>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <MotionH2 className="text-4xl lg:text-5xl font-bold text-gtb-navy">
                    Why Choose Our Services?
                  </MotionH2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="bg-gradient-to-br from-gtb-aero/20 to-gtb-aero/8 p-2.5 rounded-[12px] border-2 border-gtb-aero/20 flex-shrink-0 shadow-md"
                        whileHover={{ scale: 1.15, rotate: 5 }}
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
                        <CheckCircle className="h-6 w-6 text-gtb-aero" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gtb-navy mb-2">Expert Knowledge</h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">15+ years of experience in Melbourne&apos;s building industry with deep knowledge of local builders and market conditions.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-gtb-aero/15 to-gtb-aero/5 p-2.5 rounded-[12px] border border-gtb-aero/10 flex-shrink-0">
                        <DollarSign className="h-6 w-6 text-gtb-aero" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gtb-navy mb-2">Save Money</h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">Access to exclusive builder deals and bulk pricing that typically saves our clients $20,000-$50,000 per project.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-gtb-aero/15 to-gtb-aero/5 p-2.5 rounded-[12px] border border-gtb-aero/10 flex-shrink-0">
                        <Users className="h-6 w-6 text-gtb-aero" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gtb-navy mb-2">Personal Service</h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">Dedicated support throughout your entire journey with regular check-ins and proactive problem-solving.</p>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div className="space-y-5">
                  <Card className="p-8 bg-gtb-navy text-white border-0 rounded-[15px]">
                    <div className="text-center space-y-4">
                      <div className="text-4xl font-bold">500+</div>
                      <div className="text-gray-300 text-[15px]">Successful Projects</div>
                    </div>
                  </Card>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-6 text-center bg-gtb-navy text-white border-0 rounded-[15px]">
                      <div className="text-2xl font-bold">$2M+</div>
                      <div className="text-sm text-gray-300 mt-1">Client Savings</div>
                    </Card>
                    <Card className="p-6 text-center bg-gtb-navy text-white border-0 rounded-[15px]">
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-sm text-gray-300 mt-1">Partner Builders</div>
                    </Card>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Contact CTA */}
        <section className="section-padding bg-gtb-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gtb-navy via-gtb-navy to-gtb-navy-light/50"></div>
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <MotionH2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
                Ready to Get Started?
              </MotionH2>
              <MotionP className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Book a free consultation to discuss your project and discover how we can help you save time and money.
              </MotionP>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton asChild size="lg" className="bg-gtb-aero hover:bg-gtb-aero-light text-white text-lg px-8 py-4 rounded-[15px] font-semibold shadow-lg">
                  <Link href="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </Link>
                </AnimatedButton>
                <AnimatedButton asChild variant="outline" size="lg" className="border-2 border-white/30 text-white bg-white/10 hover:bg-white hover:text-gtb-navy backdrop-blur-sm text-lg px-8 py-4 rounded-[15px] font-medium">
                  <Link href="tel:+61300000000">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
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
