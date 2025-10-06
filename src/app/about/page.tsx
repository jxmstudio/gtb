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
  Users, 
  Building2, 
  DollarSign,
  Star,
  ArrowRight,
  Calendar,
  Phone
} from 'lucide-react';

const values = [
  {
    icon: <CheckCircle className="h-8 w-8 text-gtb-aero" />,
    title: "Integrity",
    description: "We believe in honest, transparent communication and always putting our clients' interests first."
  },
  {
    icon: <Users className="h-8 w-8 text-gtb-aero" />,
    title: "Personal Service",
    description: "Every client receives dedicated, personalized attention throughout their entire building journey."
  },
  {
    icon: <Building2 className="h-8 w-8 text-gtb-aero" />,
    title: "Quality Focus",
    description: "We only work with Australia's most reputable builders who meet our strict quality standards."
  },
  {
    icon: <DollarSign className="h-8 w-8 text-gtb-aero" />,
    title: "Value Creation",
    description: "Our goal is to save you money while ensuring you get the best possible outcome for your investment."
  }
];

const team = [
  {
    name: "George Smith",
    role: "Founder & Lead Consultant",
    description: "With over 15 years in the Melbourne building industry, George has helped hundreds of families and investors achieve their property goals.",
    experience: "15+ years experience"
  },
  {
    name: "Sarah Johnson",
    role: "Finance Specialist",
    description: "Sarah specializes in first home buyer grants, KiwiSaver rollovers, and investment property financing strategies.",
    experience: "10+ years experience"
  },
  {
    name: "Michael Chen",
    role: "Builder Relations Manager",
    description: "Michael maintains our relationships with Australia's top builders and ensures quality standards are met on every project.",
    experience: "12+ years experience"
  }
];

const testimonials = [
  {
    name: "Sarah & Michael Chen",
    location: "Point Cook, VIC",
    text: "George helped us navigate the entire first home buyer process. We saved over $50,000 and got exactly what we wanted!",
    rating: 5,
    project: "First Home - 4BR Family Home"
  },
  {
    name: "David Rodriguez",
    location: "Werribee, VIC",
    text: "As an investor, George's turnkey packages have been incredible. Great returns and zero hassle management.",
    rating: 5,
    project: "Investment Property Portfolio"
  },
  {
    name: "Emma Thompson",
    location: "Tarneit, VIC",
    text: "The finance assistance was amazing. They helped us with KiwiSaver rollover and saved us months of paperwork.",
    rating: 5,
    project: "KiwiSaver Rollover + New Build"
  }
];

export default function About() {
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
                  About George The Broker
                </MotionH2>
                <MotionP className="text-xl text-gray-600 mb-8">
                  Your trusted partner in building your dream home or investment property in Melbourne's Western suburbs.
                </MotionP>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <PartnerLogos />

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <MotionH2 className="text-3xl lg:text-4xl font-bold text-gtb-navy">
                    Our Story
                  </MotionH2>
                  <MotionP className="text-lg text-gray-600">
                    Founded in 2009, George The Broker was born from a simple belief: building your dream home or investment property shouldn't be complicated or expensive.
                  </MotionP>
                  <MotionP className="text-lg text-gray-600">
                    After 15+ years in the Melbourne building industry, George Smith saw too many families and investors struggle with the complexity of finding the right builder, securing finance, and navigating government grants. He decided to create a service that would take the guesswork out of building.
                  </MotionP>
                  <MotionP className="text-lg text-gray-600">
                    Today, we've helped over 500 families and investors save millions of dollars while building their dream properties. Our deep relationships with Australia's most reputable builders give our clients access to exclusive deals and pricing that simply isn't available to the general public.
                  </MotionP>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <AnimatedButton asChild className="bg-gtb-aero hover:bg-gtb-aero-light text-white">
                      <Link href="/contact">Get Started Today</Link>
                    </AnimatedButton>
                    <AnimatedButton asChild variant="outline" className="border-gtb-navy text-gtb-navy hover:bg-gtb-navy hover:text-white">
                      <Link href="/services">Our Services</Link>
                    </AnimatedButton>
                  </div>
                </div>
              
                <div className="space-y-6">
                  <Card className="p-8 bg-gtb-navy text-white">
                    <div className="text-center space-y-4">
                      <div className="text-4xl font-bold">500+</div>
                      <div className="text-gray-300">Happy Clients</div>
                      <div className="text-sm text-gray-400">Since 2009</div>
                    </div>
                  </Card>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-6 text-center">
                      <div className="text-2xl font-bold text-gtb-navy">$2M+</div>
                      <div className="text-sm text-gray-600">Client Savings</div>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="text-2xl font-bold text-gtb-navy">15+</div>
                      <div className="text-sm text-gray-600">Partner Builders</div>
                    </Card>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <MotionH2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-4">
                  Our Values
                </MotionH2>
                <MotionP className="text-xl text-gray-600">
                  The principles that guide everything we do.
                </MotionP>
              </div>
            </RevealOnScroll>
            
            <StaggerReveal staggerDelay={0.1}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="text-center p-6">
                      <div className="flex justify-center mb-4">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gtb-navy mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <MotionH2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-4">
                  Meet Our Team
                </MotionH2>
                <MotionP className="text-xl text-gray-600">
                  Experienced professionals dedicated to your success.
                </MotionP>
              </div>
            </RevealOnScroll>
            
            <StaggerReveal staggerDelay={0.1}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="text-center p-6">
                      <div className="bg-gtb-aero/10 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="h-10 w-10 text-gtb-aero" />
                      </div>
                      <h3 className="text-xl font-semibold text-gtb-navy mb-1">{member.name}</h3>
                      <p className="text-gtb-aero font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                      <p className="text-gray-600 text-sm">{member.description}</p>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Client Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 bg-gtb-navy">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <MotionH2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Work With Us?
              </MotionH2>
              <MotionP className="text-xl text-gray-300 mb-8">
                Join hundreds of satisfied clients who have built their dream properties with our help.
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
