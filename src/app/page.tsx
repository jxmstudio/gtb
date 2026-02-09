"use client";

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import PartnerLogos from '@/components/marketing/PartnerLogos';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight,
  CheckCircle,
  Building2,
  Shield,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Construction Excellence Partners */}
        <PartnerLogos />
        
        {/* Featured Project Showcase */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gtb-navy/80 to-gtb-navy/40 z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80')] bg-cover bg-center"></div>
                <div className="absolute bottom-8 left-8 z-20 text-white">
                  <div className="bg-gtb-aero text-white px-4 py-2 rounded-lg inline-block mb-4 font-bold">
                    RESIDENTIAL CONSTRUCTION
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Modern Family Homes</h3>
                  <p className="text-white/90">Quality builds across Australia</p>
                </div>
              </div>
              
              {/* Content Side */}
              <div>
                <div className="text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">Our Expertise</div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-6 leading-tight">
                  Building Excellence Across Australia
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  TOFA Group delivers comprehensive construction solutions for residential and commercial projects. 
                  From initial consultation to final handover, we manage every aspect of your build with unwavering 
                  commitment to quality and timeline delivery.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start space-x-3">
                    <div className="bg-gtb-aero/10 p-2 rounded-lg flex-shrink-0">
                      <Shield className="h-6 w-6 text-gtb-aero" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gtb-navy mb-1">Licensed & Insured</h4>
                      <p className="text-sm text-gray-600">Full compliance and warranty coverage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-gtb-aero/10 p-2 rounded-lg flex-shrink-0">
                      <Clock className="h-6 w-6 text-gtb-aero" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gtb-navy mb-1">On-Time Delivery</h4>
                      <p className="text-sm text-gray-600">Proven track record of completion</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-gtb-aero/10 p-2 rounded-lg flex-shrink-0">
                      <Award className="h-6 w-6 text-gtb-aero" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gtb-navy mb-1">Quality Assured</h4>
                      <p className="text-sm text-gray-600">Rigorous standards and inspections</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-gtb-aero/10 p-2 rounded-lg flex-shrink-0">
                      <Building2 className="h-6 w-6 text-gtb-aero" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gtb-navy mb-1">Full Project Management</h4>
                      <p className="text-sm text-gray-600">End-to-end construction oversight</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/projects"
                  className="inline-flex items-center bg-gtb-navy hover:bg-gtb-navy-light text-white px-8 py-4 rounded-lg font-semibold transition-colors group"
                >
                  View Our Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Modern Layout */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">What We Do</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-6">
                Construction Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive construction solutions tailored to your project requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Residential Construction */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
                <div className="h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gtb-navy/90 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="bg-gtb-aero text-white px-3 py-1 rounded text-xs font-bold inline-block mb-2">RESIDENTIAL</div>
                    <h3 className="text-2xl font-bold">Custom Homes</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-gtb-aero mr-3 flex-shrink-0" />
                      <span>Design & Build Services</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-gtb-aero mr-3 flex-shrink-0" />
                      <span>Multi-Dwelling Developments</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-gtb-aero mr-3 flex-shrink-0" />
                      <span>Renovations & Extensions</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-gtb-aero mr-3 flex-shrink-0" />
                      <span>Full Compliance Management</span>
                    </li>
                  </ul>
                  <Link 
                    href="/services"
                    className="text-gtb-aero font-semibold flex items-center group/link hover:text-gtb-navy transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Commercial Construction */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
                <div className="h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gtb-navy/90 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="bg-gtb-aero text-white px-3 py-1 rounded text-xs font-bold inline-block mb-2">COMMERCIAL</div>
                    <h3 className="text-2xl font-bold">Business Projects</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-gtb-aero mr-3 flex-shrink-0" />
                      <span>Office & Retail Spaces</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-gtb-aero mr-3 flex-shrink-0" />
                      <span>Industrial Facilities</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-gtb-aero mr-3 flex-shrink-0" />
                      <span>Fit-Outs & Refurbishments</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-gtb-aero mr-3 flex-shrink-0" />
                      <span>Timeline & Budget Control</span>
                    </li>
                  </ul>
                  <Link 
                    href="/services"
                    className="text-gtb-aero font-semibold flex items-center group/link hover:text-gtb-navy transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Build Now, Pay Later */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
                <div className="h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gtb-navy/90 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="bg-gtb-aero text-white px-3 py-1 rounded text-xs font-bold inline-block mb-2">FINANCING</div>
                    <h3 className="text-2xl font-bold">Flexible Payments</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-gtb-aero mr-3 flex-shrink-0" />
                      <span>Build Now, Pay Later Options</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-gtb-aero mr-3 flex-shrink-0" />
                      <span>Flexible Payment Structures</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-gtb-aero mr-3 flex-shrink-0" />
                      <span>Subject to Eligibility</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-gtb-aero mr-3 flex-shrink-0" />
                      <span>All Project Types Welcome</span>
                    </li>
                  </ul>
                  <Link 
                    href="/build-now-pay-later"
                    className="text-gtb-aero font-semibold flex items-center group/link hover:text-gtb-navy transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-16 bg-gtb-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-gtb-aero mb-2">500+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gtb-aero mb-2">15+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gtb-aero mb-2">$75M+</div>
                <div className="text-white/80">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gtb-aero mb-2">98%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Clean Modern Design */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">Client Feedback</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-6">
                Trusted by Australians Nationwide
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-gtb-aero">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-gtb-aero mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  TOFA Group delivered our residential project on time and within budget. The quality exceeded our expectations and the team was professional throughout.
                </p>
                <div>
                  <div className="font-bold text-gtb-navy">Sarah & Michael Chen</div>
                  <div className="text-sm text-gray-600">Melbourne, VIC</div>
                  <div className="text-xs text-gtb-aero font-medium mt-1">Custom 4BR Family Home</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-gtb-aero">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-gtb-aero mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Outstanding construction management from start to finish. Every stage was completed to the highest standard with excellent communication throughout.
                </p>
                <div>
                  <div className="font-bold text-gtb-navy">David Rodriguez</div>
                  <div className="text-sm text-gray-600">Sydney, NSW</div>
                  <div className="text-xs text-gtb-aero font-medium mt-1">Commercial Renovation</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-gtb-aero">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-gtb-aero mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Build Now, Pay Later option made our dream home possible. Professional service from consultation through to handover.
                </p>
                <div>
                  <div className="font-bold text-gtb-navy">Emma Thompson</div>
                  <div className="text-sm text-gray-600">Brisbane, QLD</div>
                  <div className="text-xs text-gtb-aero font-medium mt-1">New Residential Build</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Bold & Direct */}
        <section className="py-20 bg-gradient-to-br from-gtb-navy to-gtb-navy-light relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80')] bg-cover bg-center"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Build?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Get a free consultation and discover how TOFA Group can bring your construction project to life
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
                href="tel:1300000685"
                className="bg-white text-gtb-navy hover:bg-gray-100 px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                1300 000 685
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
