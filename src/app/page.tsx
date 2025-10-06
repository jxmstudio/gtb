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
    title: "Consult",
    description: "Book a free consultation to discuss your needs, budget, and goals.",
    icon: <MessageCircle className="h-8 w-8 text-gtb-aero" />
  },
  {
    step: "2", 
    title: "Match Builder",
    description: "We connect you with the perfect builder based on your requirements.",
    icon: <Handshake className="h-8 w-8 text-gtb-aero" />
  },
  {
    step: "3",
    title: "Build",
    description: "We support you throughout the entire building process to completion.",
    icon: <Wrench className="h-8 w-8 text-gtb-aero" />
  }
];

const benefits = [
  {
    title: "Exclusive Deals",
    description: "Access to bulk pricing and exclusive deals not available to the public.",
    icon: <DollarSign className="h-8 w-8 text-gtb-aero" />
  },
  {
    title: "Finance Assistance", 
    description: "Expert guidance on grants, loans, and KiwiSaver rollovers.",
    icon: <TrendingUp className="h-8 w-8 text-gtb-aero" />
  },
  {
    title: "Trusted Partners",
    description: "Only work with Australia's most reputable and quality-assured builders.",
    icon: <Building2 className="h-8 w-8 text-gtb-aero" />
  },
  {
    title: "Personal Service",
    description: "Dedicated support throughout your entire building journey.",
    icon: <Users className="h-8 w-8 text-gtb-aero" />
  },
  {
    title: "Save Money",
    description: "Average savings of $20,000-$50,000 per project through our deals.",
    icon: <DollarSign className="h-8 w-8 text-gtb-aero" />
  },
  {
    title: "Zero Hassle",
    description: "We handle the complexity so you can focus on your new home.",
    icon: <CheckCircle className="h-8 w-8 text-gtb-aero" />
  }
];

const services = [
  {
    title: "Builder Connection & Matching",
    description: "We connect you with Australia's most reputable builders based on your specific needs and budget.",
    features: [
      "Personalized builder recommendations",
      "Access to exclusive deals",
      "Quality assurance guarantee",
      "Ongoing project support"
    ],
    href: "/services#builder-connection",
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <MotionH2 
                  className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-6"
                  variants={staggerItem}
                >
                  How It Works
                </MotionH2>
                <MotionP 
                  className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                  variants={staggerItem}
                >
                  Our simple 3-step process makes building your dream home effortless
                </MotionP>
              </div>
            </RevealOnScroll>
            
            <StaggerReveal staggerDelay={0.2}>
              <div className="grid md:grid-cols-3 gap-8">
                {howItWorks.map((step, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="p-8 text-center bg-white shadow-lg rounded-2xl border-0 hover:shadow-xl transition-shadow duration-300">
                      <div className="space-y-4">
                        <div className="flex justify-center">
                          <div className="bg-gtb-aero/10 p-4 rounded-full">
                            {step.icon}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-gtb-navy">Step {step.step}</div>
                        <h3 className="text-xl font-semibold text-gtb-navy">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <MotionH2 
                  className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-6"
                  variants={staggerItem}
                >
                  Why Choose Us
                </MotionH2>
                <MotionP 
                  className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                  variants={staggerItem}
                >
                  We make building your first home simple, affordable, and stress-free
                </MotionP>
              </div>
            </RevealOnScroll>
            
            <StaggerReveal staggerDelay={0.1}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="p-6 bg-white shadow-lg rounded-2xl border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="bg-gtb-aero/10 p-3 rounded-lg">
                            {benefit.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-gtb-navy">{benefit.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <MotionH2 
                  className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-6"
                  variants={staggerItem}
                >
                  Our Services
                </MotionH2>
                <MotionP 
                  className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                  variants={staggerItem}
                >
                  Everything you need to build your dream home or investment property
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
        <section className="py-20 bg-gtb-navy">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <MotionH2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Build Your Dream Home?
              </MotionH2>
              <MotionP className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join hundreds of satisfied clients who have built their dream properties with our help.
              </MotionP>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gtb-aero hover:bg-gtb-aero-light text-white text-lg px-8 py-4 rounded-2xl font-semibold shadow-xl">
                  <Link href="/contact">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-gtb-navy bg-white hover:bg-gray-100 text-lg px-8 py-4 rounded-2xl">
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