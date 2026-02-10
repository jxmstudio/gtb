import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RevealOnScroll, StaggerReveal } from '@/components/motion/Reveals';
import { MotionDiv, staggerItem } from '@/components/motion/MotionPrimitives';
import { AnimatedButton } from '@/components/motion/AnimatedButton';
import Link from 'next/link';
import { 
  Mail,
  Phone,
  Linkedin,
  ArrowRight,
  Building2,
  Users,
  Award,
  Target
} from 'lucide-react';

const team = [
  {
    name: "George Tofa",
    role: "Founder | Project Director",
    bio: "George leads TOFA Group's project delivery and client relationships, overseeing construction projects across Australia. With a strong focus on quality, timelines, and compliance, George ensures every project meets TOFA Group's standards from start to finish.",
    expertise: [
      "Project delivery and oversight",
      "Client relationship management",
      "Quality and compliance management",
      "Construction planning and execution"
    ],
    image: "/team/george-tofa.jpg", // Placeholder
    linkedin: "#",
    email: "george@tofagroup.com.au"
  }
  // Additional team members can be added here as they join
];

const values = [
  {
    icon: <Building2 className="h-8 w-8 text-gtb-aero" />,
    title: "Construction Excellence",
    description: "Delivering quality projects with proven systems and oversight"
  },
  {
    icon: <Users className="h-8 w-8 text-gtb-aero" />,
    title: "Client-Focused",
    description: "Every project receives personalized attention and transparent communication"
  },
  {
    icon: <Award className="h-8 w-8 text-gtb-aero" />,
    title: "Quality Standards",
    description: "Strict compliance and quality assurance on every build"
  },
  {
    icon: <Target className="h-8 w-8 text-gtb-aero" />,
    title: "On-Time Delivery",
    description: "Project management ensuring timelines are met"
  }
];

export default function Team() {
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
                  Meet the Team
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The leadership behind TOFA Group's construction delivery across Australia
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerReveal>
              <div className="grid gap-12">
                {team.map((member, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="grid md:grid-cols-3 gap-8 p-8">
                        {/* Profile Image */}
                        <div className="md:col-span-1">
                          <div className="aspect-square bg-gradient-to-br from-gtb-navy to-gtb-navy/80 rounded-[20px] flex items-center justify-center text-white">
                            <div className="text-center">
                              <div className="text-6xl font-bold mb-2">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <p className="text-sm text-white/80">Photo coming soon</p>
                            </div>
                          </div>
                        </div>

                        {/* Profile Info */}
                        <div className="md:col-span-2">
                          <div className="mb-4">
                            <h2 className="text-3xl font-bold text-gtb-navy mb-2">{member.name}</h2>
                            <p className="text-xl text-gtb-aero font-medium">{member.role}</p>
                          </div>

                          <p className="text-gray-700 mb-6 leading-relaxed">
                            {member.bio}
                          </p>

                          <div className="mb-6">
                            <h3 className="text-lg font-bold text-gtb-navy mb-3">Key Expertise</h3>
                            <ul className="grid md:grid-cols-2 gap-2">
                              {member.expertise.map((skill, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="h-2 w-2 bg-gtb-aero rounded-full mt-2 mr-3 flex-shrink-0" />
                                  <span className="text-gray-700">{skill}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-4">
                            <Button asChild variant="outline" size="sm">
                              <a href={`mailto:${member.email}`} className="inline-flex items-center">
                                <Mail className="h-4 w-4 mr-2" />
                                Email
                              </a>
                            </Button>
                            {member.linkedin && (
                              <Button asChild variant="outline" size="sm">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                  <Linkedin className="h-4 w-4 mr-2" />
                                  LinkedIn
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gtb-navy mb-4">
                  Our Approach
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  The principles that guide our construction delivery
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow">
                      <div className="flex justify-center mb-4">{value.icon}</div>
                      <h3 className="text-xl font-bold text-gtb-navy mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Careers Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <Card className="bg-gradient-to-br from-gtb-navy to-gtb-navy/90 text-white p-8 md:p-12">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
                  <p className="text-xl mb-6 text-white/90">
                    TOFA Group is growing. We're looking for talented professionals to join our construction delivery team across Australia.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <AnimatedButton asChild size="lg">
                      <Link href="/contact" className="inline-flex items-center">
                        Get in Touch
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </AnimatedButton>
                  </div>
                </div>
              </Card>
            </RevealOnScroll>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gtb-navy to-gtb-navy-light text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-10 text-white max-w-2xl mx-auto">
              Contact TOFA Group to discuss your residential or commercial construction needs
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
                href="/services"
                className="bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-gtb-navy px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-all inline-flex items-center justify-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

