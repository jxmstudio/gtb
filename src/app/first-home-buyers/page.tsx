import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RevealOnScroll, StaggerReveal } from '@/components/motion/Reveals';
import { MotionDiv, MotionH2, MotionP, staggerContainer, staggerItem } from '@/components/motion/MotionPrimitives';
import StickyHeader from '@/components/marketing/StickyHeader';
import Testimonials from '@/components/marketing/Testimonials';
import PartnerLogos from '@/components/marketing/PartnerLogos';
import { AnimatedButton } from '@/components/motion/AnimatedButton';
import Link from 'next/link';
import { 
  CheckCircle, 
  DollarSign, 
  Home as HomeIcon, 
  Users,
  ArrowRight,
  Calendar,
  Phone
} from 'lucide-react';

const steps = [
  {
    step: "1",
    title: "Initial Consultation",
    description: "We discuss your needs, budget, and goals to understand your requirements.",
    details: "During this free consultation, we'll assess your financial situation, discuss your dream home requirements, and explain the entire process."
  },
  {
    step: "2",
    title: "Finance Pre-Approval",
    description: "We help you secure pre-approval and maximize your first home buyer grants.",
    details: "We'll guide you through the loan application process, help you access the First Home Owner Grant, and explore all available incentives."
  },
  {
    step: "3",
    title: "Builder Selection",
    description: "We match you with the perfect builder based on your needs and budget.",
    details: "Our network of trusted builders ensures you get the best quality and value for your investment."
  },
  {
    step: "4",
    title: "Design & Planning",
    description: "We help you choose the right design and location for your new home.",
    details: "From floor plans to finishes, we'll help you make decisions that maximize both comfort and resale value."
  },
  {
    step: "5",
    title: "Construction Support",
    description: "We provide ongoing support throughout the building process.",
    details: "Regular updates, quality checks, and problem-solving to ensure your home is built to the highest standards."
  },
  {
    step: "6",
    title: "Settlement & Handover",
    description: "We guide you through the final steps to homeownership.",
    details: "From final inspections to settlement day, we'll ensure everything goes smoothly."
  }
];

const grants = [
  {
    title: "First Home Owner Grant (FHOG)",
    amount: "Up to $10,000",
    description: "One-time payment for eligible first home buyers purchasing or building a new home.",
    requirements: [
      "Must be a first-time home buyer",
      "Property must be new or substantially renovated",
      "Must live in the property for at least 12 months",
      "Property value must be under $750,000"
    ]
  },
  {
    title: "Stamp Duty Concessions",
    amount: "Up to 100% reduction",
    description: "Significant savings on stamp duty for first home buyers.",
    requirements: [
      "Must be a first-time home buyer",
      "Property value under $600,000 for full exemption",
      "Partial exemption up to $750,000",
      "Must live in the property for at least 12 months"
    ]
  },
  {
    title: "KiwiSaver Withdrawal",
    amount: "Up to $20,000",
    description: "Access your KiwiSaver funds to help with your Australian home purchase.",
    requirements: [
      "Must be a New Zealand citizen or permanent resident",
      "Must have been in Australia for at least 12 months",
      "Must be purchasing your first home in Australia",
      "Must meet KiwiSaver withdrawal criteria"
    ]
  }
];

export default function FirstHomeBuyers() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <StickyHeader />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center max-w-4xl mx-auto">
                <MotionH2 className="text-4xl lg:text-6xl font-bold text-gtb-navy mb-6">
                  First Home Buyers
                </MotionH2>
                <MotionP className="text-xl text-gray-600 mb-8">
                  Your complete guide to building your first home in Melbourne's Western suburbs. We'll help you navigate every step and maximize your savings.
                </MotionP>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AnimatedButton asChild size="lg" className="bg-gtb-aero hover:bg-gtb-aero-light text-white text-lg px-8 py-4">
                    <Link href="/contact">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </AnimatedButton>
                  <AnimatedButton asChild variant="outline" size="lg" className="border-gtb-navy text-gtb-navy hover:bg-gtb-navy hover:text-white text-lg px-8 py-4">
                    <Link href="/services">Our Services</Link>
                  </AnimatedButton>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <PartnerLogos />

        {/* Process Steps */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <MotionH2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-4">
                  Your Journey to Homeownership
                </MotionH2>
                <MotionP className="text-xl text-gray-600">
                  A simple, step-by-step process designed to make building your first home stress-free.
                </MotionP>
              </div>
            </RevealOnScroll>
            
            <StaggerReveal staggerDelay={0.1}>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="overflow-hidden">
                      <div className="grid lg:grid-cols-3 gap-0">
                        <div className="bg-gtb-navy text-white p-8 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl font-bold mb-2">{step.step}</div>
                            <div className="text-xl font-semibold">{step.title}</div>
                          </div>
                        </div>
                        <div className="lg:col-span-2 p-8">
                          <h3 className="text-2xl font-semibold text-gtb-navy mb-4">{step.title}</h3>
                          <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                          <p className="text-gray-600">{step.details}</p>
                        </div>
                      </div>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Grants & Incentives */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <MotionH2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-4">
                  Grants & Incentives
                </MotionH2>
                <MotionP className="text-xl text-gray-600">
                  Maximize your savings with government grants and incentives available to first home buyers.
                </MotionP>
              </div>
            </RevealOnScroll>
            
            <StaggerReveal staggerDelay={0.1}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {grants.map((grant, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="p-6">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-gtb-aero mb-2">{grant.amount}</div>
                        <h3 className="text-xl font-semibold text-gtb-navy mb-2">{grant.title}</h3>
                        <p className="text-gray-600">{grant.description}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gtb-navy">Requirements:</h4>
                        <ul className="space-y-1">
                          {grant.requirements.map((requirement, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-gtb-aero mt-0.5 flex-shrink-0" />
                              <span>{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <MotionH2 className="text-3xl lg:text-4xl font-bold text-gtb-navy">
                    Why First Home Buyers Choose Us
                  </MotionH2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gtb-aero/10 p-2 rounded-lg">
                        <DollarSign className="h-6 w-6 text-gtb-aero" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gtb-navy mb-2">Save Money</h3>
                        <p className="text-gray-600">Access to exclusive builder deals and bulk pricing that typically saves our clients $20,000-$50,000.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gtb-aero/10 p-2 rounded-lg">
                        <Users className="h-6 w-6 text-gtb-aero" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gtb-navy mb-2">Expert Guidance</h3>
                        <p className="text-gray-600">15+ years of experience helping first home buyers navigate the complex building process.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gtb-aero/10 p-2 rounded-lg">
                        <HomeIcon className="h-6 w-6 text-gtb-aero" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gtb-navy mb-2">Quality Assurance</h3>
                        <p className="text-gray-600">We only work with Australia's most reputable builders who meet our strict quality standards.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <Card className="p-8 bg-gtb-navy text-white">
                    <div className="text-center space-y-4">
                      <div className="text-4xl font-bold">500+</div>
                      <div className="text-gray-300">First Home Buyers Helped</div>
                    </div>
                  </Card>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-6 text-center">
                      <div className="text-2xl font-bold text-gtb-navy">$2M+</div>
                      <div className="text-sm text-gray-600">Total Client Savings</div>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="text-2xl font-bold text-gtb-navy">98%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </Card>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 bg-gtb-navy">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <MotionH2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Build Your First Home?
              </MotionH2>
              <MotionP className="text-xl text-gray-300 mb-8">
                Book a free consultation and discover how we can help you save money and build your dream home.
              </MotionP>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton asChild size="lg" className="bg-gtb-aero hover:bg-gtb-aero-light text-white text-lg px-8 py-4">
                  <Link href="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </Link>
                </AnimatedButton>
                <AnimatedButton asChild variant="outline" size="lg" className="border-white text-gtb-navy bg-white hover:bg-gray-100 text-lg px-8 py-4">
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
