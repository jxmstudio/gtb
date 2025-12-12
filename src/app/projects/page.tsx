import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RevealOnScroll, StaggerReveal } from '@/components/motion/Reveals';
import { MotionDiv, staggerItem } from '@/components/motion/MotionPrimitives';
import StickyHeader from '@/components/marketing/StickyHeader';
import { AnimatedButton } from '@/components/motion/AnimatedButton';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2,
  Home as HomeIcon,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

// Placeholder project data - will be replaced with real projects
const projects = [
  {
    title: "Modern Family Home",
    location: "Melbourne, VIC",
    type: "Residential",
    completion: "2024",
    description: "4-bedroom contemporary family home with open-plan living and quality finishes throughout.",
    features: ["4 Bedrooms", "2.5 Bathrooms", "Double Garage", "Outdoor Entertainment"],
    image: "/projects/placeholder-1.jpg"
  },
  {
    title: "Townhouse Development",
    location: "Brisbane, QLD",
    type: "Residential - Multi-Unit",
    completion: "2024",
    description: "6-unit townhouse development featuring modern design and premium specifications.",
    features: ["6 Units", "3 Bedrooms Each", "Quality Finishes", "Landscaped Gardens"],
    image: "/projects/placeholder-2.jpg"
  },
  {
    title: "Commercial Fit-Out",
    location: "Sydney, NSW",
    type: "Commercial",
    completion: "2023",
    description: "Professional office fit-out with contemporary design and functional workspace solutions.",
    features: ["500sqm", "Modern Finishes", "Meeting Rooms", "Kitchen Facilities"],
    image: "/projects/placeholder-3.jpg"
  },
  {
    title: "Luxury Residence",
    location: "Perth, WA",
    type: "Residential",
    completion: "2023",
    description: "High-end custom residence featuring premium materials and architectural excellence.",
    features: ["5 Bedrooms", "Pool & Spa", "Home Theater", "Wine Cellar"],
    image: "/projects/placeholder-4.jpg"
  }
];

const categories = [
  {
    name: "All Projects",
    value: "all"
  },
  {
    name: "Residential",
    value: "residential"
  },
  {
    name: "Commercial",
    value: "commercial"
  },
  {
    name: "Multi-Unit",
    value: "multi-unit"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <StickyHeader />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gtb-navy mb-6">
                  Our Projects
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore a selection of residential and commercial projects delivered by TOFA Group across Australia
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Project Categories - For future filtering */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category.value === "all" ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerReveal>
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                      {/* Project Image */}
                      <div className="aspect-video bg-gradient-to-br from-gtb-navy/10 to-gtb-aero/10 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Building2 className="h-24 w-24 text-gtb-navy/20" />
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-gtb-navy text-white px-4 py-2 rounded-full text-sm font-medium">
                            {project.type}
                          </span>
                        </div>
                      </div>

                      {/* Project Details */}
                      <CardHeader>
                        <CardTitle className="text-2xl text-gtb-navy mb-2">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center text-gray-600 text-sm space-x-4">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {project.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.completion}
                          </span>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-gray-600 mb-4">
                          {project.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gtb-navy mb-2">Key Features</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {project.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="h-4 w-4 text-gtb-aero mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Project Capabilities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gtb-navy mb-4">
                  Our Construction Capabilities
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Delivering quality projects across Australia
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid md:grid-cols-3 gap-8">
                <MotionDiv variants={staggerItem}>
                  <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-4">
                      <HomeIcon className="h-12 w-12 text-gtb-aero" />
                    </div>
                    <h3 className="text-xl font-bold text-gtb-navy mb-2">Residential</h3>
                    <p className="text-gray-600">
                      Single and multi-unit residential construction across Australia
                    </p>
                  </Card>
                </MotionDiv>

                <MotionDiv variants={staggerItem}>
                  <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-4">
                      <Building2 className="h-12 w-12 text-gtb-aero" />
                    </div>
                    <h3 className="text-xl font-bold text-gtb-navy mb-2">Commercial</h3>
                    <p className="text-gray-600">
                      Office, retail, and industrial construction projects
                    </p>
                  </Card>
                </MotionDiv>

                <MotionDiv variants={staggerItem}>
                  <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="h-12 w-12 text-gtb-aero" />
                    </div>
                    <h3 className="text-xl font-bold text-gtb-navy mb-2">Quality Assured</h3>
                    <p className="text-gray-600">
                      Every project meets strict quality and compliance standards
                    </p>
                  </Card>
                </MotionDiv>
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-gtb-navy to-gtb-navy/90 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Project with TOFA Group
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Contact us to discuss your residential or commercial construction requirements
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

