import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { RevealOnScroll, StaggerReveal } from '@/components/motion/Reveals';
import { MotionDiv, MotionH2, MotionP, staggerItem } from '@/components/motion/MotionPrimitives';
import StickyHeader from '@/components/marketing/StickyHeader';
import Testimonials from '@/components/marketing/Testimonials';
import PartnerLogos from '@/components/marketing/PartnerLogos';
import { AnimatedButton } from '@/components/motion/AnimatedButton';
import Link from 'next/link';
import { 
  Home as HomeIcon, 
  DollarSign, 
  MapPin, 
  Calendar,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const packages = [
  {
    title: "Starter Investment Package",
    location: "Point Cook, VIC",
    price: "$650,000",
    bedrooms: "3",
    bathrooms: "2",
    features: [
      "Fully furnished and tenant-ready",
      "Professional tenant placement",
      "Property management included",
      "Expected ROI: 6.5%",
      "Ready for immediate rental"
    ],
    image: "/api/placeholder/400/300",
    status: "Available",
    cta: "View Details"
  },
  {
    title: "Premium Family Home",
    location: "Werribee, VIC", 
    price: "$780,000",
    bedrooms: "4",
    bathrooms: "3",
    features: [
      "Modern open-plan design",
      "High-end finishes throughout",
      "Landscaped backyard",
      "Double garage",
      "Energy efficient features"
    ],
    image: "/api/placeholder/400/300",
    status: "Available",
    cta: "View Details"
  },
  {
    title: "Luxury Investment Villa",
    location: "Tarneit, VIC",
    price: "$920,000",
    bedrooms: "4",
    bathrooms: "3",
    features: [
      "Premium location near amenities",
      "High rental yield potential",
      "Modern architectural design",
      "Smart home features",
      "Expected ROI: 7.2%"
    ],
    image: "/api/placeholder/400/300",
    status: "Coming Soon",
    cta: "Register Interest"
  }
];

const packageOfTheWeek = {
  title: "Package of the Week",
  subtitle: "Exclusive Turnkey Investment",
  location: "Point Cook, VIC",
  price: "$650,000",
  originalPrice: "$720,000",
  savings: "$70,000",
  description: "This stunning 3-bedroom investment property is fully furnished and ready for immediate rental. Located in the heart of Point Cook with excellent transport links and amenities.",
  features: [
    "Fully furnished and tenant-ready",
    "Professional tenant placement included",
    "Property management for 12 months",
    "Expected rental yield: 6.5%",
    "Ready for immediate occupancy"
  ],
  image: "/api/placeholder/600/400"
};

export default function Packages() {
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
                  Investment Packages
                </MotionH2>
                <MotionP className="text-xl text-gray-600 mb-8">
                  Turnkey investment properties ready for immediate rental income. No hassle, maximum returns.
                </MotionP>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AnimatedButton asChild size="lg" className="bg-gtb-aero hover:bg-gtb-aero-light text-white text-lg px-8 py-4">
                    <Link href="/contact">
                      Get Investment Advice
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </AnimatedButton>
                  <AnimatedButton asChild variant="outline" size="lg" className="border-gtb-navy text-gtb-navy hover:bg-gtb-navy hover:text-white text-lg px-8 py-4">
                    <Link href="/investors">Investment Guide</Link>
                  </AnimatedButton>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <PartnerLogos />

        {/* Package of the Week */}
        <section className="py-20 bg-gtb-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <MotionH2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {packageOfTheWeek.title}
                </MotionH2>
                <MotionP className="text-xl text-gray-300">
                  {packageOfTheWeek.subtitle}
                </MotionP>
              </div>
            </RevealOnScroll>
            
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gray-200 h-80 lg:h-auto flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <HomeIcon className="h-16 w-16 mx-auto mb-4" />
                    <p>Property Image</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="h-5 w-5 text-gtb-aero" />
                    <span className="text-gray-600">{packageOfTheWeek.location}</span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-3xl font-bold text-gtb-navy">{packageOfTheWeek.price}</span>
                      <span className="text-lg text-gray-500 line-through">{packageOfTheWeek.originalPrice}</span>
                      <span className="bg-gtb-aero text-white px-2 py-1 rounded text-sm font-medium">
                        Save {packageOfTheWeek.savings}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{packageOfTheWeek.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {packageOfTheWeek.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-gtb-aero" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <AnimatedButton className="w-full bg-gtb-aero hover:bg-gtb-aero-light text-white">
                    Register Interest
                    <Calendar className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* All Packages */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <MotionH2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-4">
                  Available Packages
                </MotionH2>
                <MotionP className="text-xl text-gray-600">
                  Browse our current selection of turnkey investment properties.
                </MotionP>
              </div>
            </RevealOnScroll>
            
            <StaggerReveal staggerDelay={0.1}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <MotionDiv key={index} variants={staggerItem}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="bg-gray-200 h-48 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <HomeIcon className="h-12 w-12 mx-auto mb-2" />
                          <p>Property Image</p>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gtb-navy">{pkg.title}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            pkg.status === 'Available' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {pkg.status}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-4">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{pkg.location}</span>
                        </div>
                        
                        <div className="text-2xl font-bold text-gtb-navy mb-4">{pkg.price}</div>
                        
                        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <HomeIcon className="h-4 w-4" />
                            <span>{pkg.bedrooms} bed</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <HomeIcon className="h-4 w-4" />
                            <span>{pkg.bathrooms} bath</span>
                          </div>
                        </div>
                        
                        <ul className="space-y-1 mb-6">
                          {pkg.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 text-gtb-aero" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <AnimatedButton asChild className="w-full" variant="outline">
                          <Link href="/contact">
                            {pkg.cta}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </AnimatedButton>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Investment Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <MotionH2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-4">
                  Why Choose Our Investment Packages?
                </MotionH2>
                <MotionP className="text-xl text-gray-600">
                  Turnkey properties designed for maximum returns with zero hassle.
                </MotionP>
              </div>
            </RevealOnScroll>
            
            <StaggerReveal staggerDelay={0.1}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <MotionDiv variants={staggerItem}>
                  <Card className="text-center p-6">
                    <div className="bg-gtb-aero/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-gtb-aero" />
                    </div>
                    <h3 className="text-xl font-semibold text-gtb-navy mb-2">High Returns</h3>
                    <p className="text-gray-600">Average 6-7% rental yields with strong capital growth potential.</p>
                  </Card>
                </MotionDiv>
                
                <MotionDiv variants={staggerItem}>
                  <Card className="text-center p-6">
                    <div className="bg-gtb-aero/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-gtb-aero" />
                    </div>
                    <h3 className="text-xl font-semibold text-gtb-navy mb-2">Zero Hassle</h3>
                    <p className="text-gray-600">Fully managed properties with tenant placement and ongoing support.</p>
                  </Card>
                </MotionDiv>
                
                <MotionDiv variants={staggerItem}>
                  <Card className="text-center p-6">
                    <div className="bg-gtb-aero/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <DollarSign className="h-8 w-8 text-gtb-aero" />
                    </div>
                    <h3 className="text-xl font-semibold text-gtb-navy mb-2">Exclusive Pricing</h3>
                    <p className="text-gray-600">Access to bulk pricing and exclusive deals not available to the public.</p>
                  </Card>
                </MotionDiv>
                
                <MotionDiv variants={staggerItem}>
                  <Card className="text-center p-6">
                    <div className="bg-gtb-aero/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Star className="h-8 w-8 text-gtb-aero" />
                    </div>
                    <h3 className="text-xl font-semibold text-gtb-navy mb-2">Quality Assured</h3>
                    <p className="text-gray-600">Only properties from Australia&apos;s most reputable builders.</p>
                  </Card>
                </MotionDiv>
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 bg-gtb-navy">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <MotionH2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Invest?
              </MotionH2>
              <MotionP className="text-xl text-gray-300 mb-8">
                Book a consultation to discuss your investment goals and find the perfect property package.
              </MotionP>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton asChild size="lg" className="bg-gtb-aero hover:bg-gtb-aero-light text-white text-lg px-8 py-4">
                  <Link href="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Investment Consultation
                  </Link>
                </AnimatedButton>
                <AnimatedButton asChild variant="outline" size="lg" className="border-white text-gtb-navy bg-white hover:bg-gray-100 text-lg px-8 py-4">
                  <Link href="/investors">Investment Guide</Link>
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
