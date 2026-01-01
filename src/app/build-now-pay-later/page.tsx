import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RevealOnScroll, StaggerReveal } from '@/components/motion/Reveals';
import { MotionDiv, MotionH2, MotionP, staggerItem } from '@/components/motion/MotionPrimitives';
import { AnimatedButton } from '@/components/motion/AnimatedButton';
import Link from 'next/link';
import { 
  CheckCircle, 
  Wallet,
  Calendar,
  Shield,
  TrendingUp,
  ArrowRight,
  FileText,
  Users,
  Building2
} from 'lucide-react';

const benefits = [
  {
    icon: <Wallet className="h-8 w-8 text-gtb-aero" />,
    title: "No Upfront Lump Sum",
    description: "Commence your construction project without the need for a large upfront payment."
  },
  {
    icon: <Calendar className="h-8 w-8 text-gtb-aero" />,
    title: "Flexible Payment Structures",
    description: "Manage payments over time with flexible options tailored to your financial situation."
  },
  {
    icon: <Building2 className="h-8 w-8 text-gtb-aero" />,
    title: "Residential & Commercial",
    description: "Available for both residential and commercial construction projects."
  },
  {
    icon: <Shield className="h-8 w-8 text-gtb-aero" />,
    title: "Same Quality Standards",
    description: "Maintain the same build quality, standards, and project oversight as traditional financing."
  }
];

const howItWorks = [
  {
    step: "1",
    title: "Initial Assessment",
    description: "Contact us to discuss your project and determine eligibility for Build Now, Pay Later financing.",
    icon: <FileText className="h-6 w-6" />
  },
  {
    step: "2",
    title: "Approval Process",
    description: "Complete the application process with our financing partners. We'll guide you through each step.",
    icon: <CheckCircle className="h-6 w-6" />
  },
  {
    step: "3",
    title: "Start Construction",
    description: "Once approved, commence your construction project with flexible payment arrangements in place.",
    icon: <Building2 className="h-6 w-6" />
  },
  {
    step: "4",
    title: "Manage Payments",
    description: "Make payments according to your agreed schedule while your project progresses to completion.",
    icon: <Calendar className="h-6 w-6" />
  }
];

const eligibility = [
  "Australian resident or citizen",
  "Stable income and employment history",
  "Good credit history",
  "Project meets minimum value requirements",
  "Property located in eligible areas",
  "Meets lender criteria and requirements"
];

const faqs = [
  {
    question: "What projects are eligible?",
    answer: "Build Now, Pay Later is available for residential and commercial construction projects that meet our minimum value requirements and are located in eligible areas across Australia."
  },
  {
    question: "How does the payment structure work?",
    answer: "Payment structures are flexible and customized to your situation. Typically, payments are structured over an agreed timeframe with options for interest-only periods during construction."
  },
  {
    question: "What are the eligibility requirements?",
    answer: "Eligibility is subject to income verification, credit assessment, and meeting our financing partners' lending criteria. We work with you to present the strongest application possible."
  },
  {
    question: "Does this affect project quality?",
    answer: "No. All projects receive the same quality oversight, compliance management, and project standards regardless of financing method."
  }
];

export default function BuildNowPayLater() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gtb-navy to-gtb-navy/90 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-white/10 px-4 py-2 rounded-full mb-6">
                  <Wallet className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">Flexible Financing Solutions</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Build Now, Pay Later
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  TOFA Group offers flexible construction payment solutions, allowing eligible clients to commence their project now and manage payments over time.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gtb-navy mb-4">
                  Financial Flexibility for Your Build
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Greater financial flexibility while maintaining the same build quality and project oversight
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="h-full hover:shadow-lg transition-shadow text-center">
                      <CardHeader>
                        <div className="flex justify-center mb-4">{benefit.icon}</div>
                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gtb-navy mb-4">
                  How It Works
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Four simple steps to flexible construction financing
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {howItWorks.map((item, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <div className="relative">
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="w-12 h-12 bg-gtb-aero/10 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl font-bold text-gtb-aero">{item.step}</span>
                          </div>
                          <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{item.description}</p>
                        </CardContent>
                      </Card>
                      {index < howItWorks.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gtb-aero/30 transform -translate-y-1/2" />
                      )}
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <RevealOnScroll>
                <div>
                  <h2 className="text-3xl font-bold text-gtb-navy mb-6">
                    Eligibility Criteria
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Build Now, Pay Later financing is subject to eligibility criteria. Typical requirements include:
                  </p>
                  <ul className="space-y-3">
                    {eligibility.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-gtb-aero mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <Card className="bg-gradient-to-br from-gtb-navy to-gtb-navy/90 text-white p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6 text-white/90">
                    Contact TOFA Group to discuss your project and determine if Build Now, Pay Later is right for you.
                  </p>
                  <div className="space-y-4">
                    <AnimatedButton asChild size="lg" className="w-full">
                      <Link href="/contact" className="inline-flex items-center justify-center">
                        Check Eligibility
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </AnimatedButton>
                    <Button asChild variant="outline" size="lg" className="w-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-gtb-navy">
                      <Link href="/services">View All Services</Link>
                    </Button>
                  </div>
                </Card>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gtb-navy mb-4">
                  Frequently Asked Questions
                </h2>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl text-gtb-navy">{faq.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">
                <strong>Important:</strong> Build Now, Pay Later financing is subject to eligibility criteria and approval by our financing partners.
              </p>
              <p>
                Terms, conditions, fees, and interest rates apply. This information is general in nature and should not be considered financial advice. Please consult with a financial advisor to determine if this option is suitable for your circumstances.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

