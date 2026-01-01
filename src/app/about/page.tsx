import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RevealOnScroll, StaggerReveal } from '@/components/motion/Reveals';
import { MotionDiv, MotionH2, MotionP, staggerContainer, staggerItem } from '@/components/motion/MotionPrimitives';
import Testimonials from '@/components/marketing/Testimonials';
import PartnerLogos from '@/components/marketing/PartnerLogos';
import { AnimatedButton } from '@/components/motion/AnimatedButton';
import Link from 'next/link';
import { 
  CheckCircle, 
  Users, 
  Building2, 
  Shield,
  Star,
  ArrowRight,
  Target,
  Award
} from 'lucide-react';

const values = [
  {
    icon: <Shield className="h-8 w-8 text-gtb-aero" />,
    title: "Quality & Compliance",
    description: "Every project meets strict quality, safety, and compliance standards throughout the construction lifecycle."
  },
  {
    icon: <Users className="h-8 w-8 text-gtb-aero" />,
    title: "Transparent Communication",
    description: "Clear, consistent updates throughout your build. You'll always know where your project stands."
  },
  {
    icon: <Building2 className="h-8 w-8 text-gtb-aero" />,
    title: "End-to-End Management",
    description: "From initial planning to final handover, we oversee every stage of your construction project."
  },
  {
    icon: <Award className="h-8 w-8 text-gtb-aero" />,
    title: "Proven Systems",
    description: "Our established processes and strong network ensure consistent delivery across all projects."
  }
];

const capabilities = [
  {
    title: "Australia-Wide Delivery",
    description: "We deliver residential and commercial construction projects across Australia.",
    icon: <Target className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "Residential Construction",
    description: "Single and multi-unit residential builds with complete project oversight.",
    icon: <Building2 className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "Commercial Projects",
    description: "Commercial construction managed from design through to completion.",
    icon: <Building2 className="h-6 w-6 text-gtb-aero" />
  },
  {
    title: "Flexible Financing",
    description: "Build Now, Pay Later options available for eligible clients.",
    icon: <CheckCircle className="h-6 w-6 text-gtb-aero" />
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gtb-navy mb-6">
                  About TOFA Group
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Delivering quality residential and commercial construction projects across Australia
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <RevealOnScroll>
                <div>
                  <h2 className="text-3xl font-bold text-gtb-navy mb-6">
                    Construction-Focused Delivery
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg">
                      TOFA Group is a construction-focused business delivering residential and commercial projects across Australia.
                    </p>
                    <p>
                      With a strong network, proven systems, and hands-on project oversight, we ensure every build meets strict quality, safety, and compliance standards.
                    </p>
                    <p>
                      From planning to completion, we manage the full construction lifecycle, providing clients with transparency, accountability, and confidence throughout their project.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <div className="bg-gradient-to-br from-gtb-navy to-gtb-navy/90 p-8 rounded-[20px] text-white">
                  <h3 className="text-2xl font-bold mb-6">Why Choose TOFA Group</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-gtb-aero mr-3 flex-shrink-0 mt-1" />
                      <span>Quality construction delivered across Australia</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-gtb-aero mr-3 flex-shrink-0 mt-1" />
                      <span>End-to-end project management and oversight</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-gtb-aero mr-3 flex-shrink-0 mt-1" />
                      <span>Transparent communication throughout your build</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-gtb-aero mr-3 flex-shrink-0 mt-1" />
                      <span>Proven systems and quality assurance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-gtb-aero mr-3 flex-shrink-0 mt-1" />
                      <span>Flexible financing options available</span>
                    </li>
                  </ul>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gtb-navy mb-4">
                  Our Values
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  The principles that guide every project we deliver
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="mb-4">{value.icon}</div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{value.description}</p>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Our Capabilities */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gtb-navy mb-4">
                  Our Capabilities
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Comprehensive construction services across Australia
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid md:grid-cols-2 gap-6">
                {capabilities.map((capability, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center mb-2">
                          {capability.icon}
                          <CardTitle className="text-xl ml-3">{capability.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{capability.description}</p>
                      </CardContent>
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
                  See what our clients say about working with TOFA Group
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
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Contact TOFA Group today to discuss your residential or commercial construction needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton asChild size="lg">
                  <Link href="/contact" className="inline-flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </AnimatedButton>
                <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-gtb-navy">
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
