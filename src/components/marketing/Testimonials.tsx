"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Testimonial {
  id: string;
  name: string;
  suburb: string;
  quote: string;
  rating: number;
  project: string;
  photo?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah & Michael Chen",
    suburb: "Melbourne, VIC",
    quote: "TOFA Group delivered our residential project on time and within budget. The quality of workmanship exceeded our expectations and the team was professional throughout the entire build.",
    rating: 5,
    project: "Custom 4BR Family Home",
    photo: "/api/placeholder/80/80"
  },
  {
    id: "2",
    name: "David Rodriguez",
    suburb: "Sydney, NSW",
    quote: "Outstanding construction management from start to finish. Every stage was completed to the highest standard and communication was excellent throughout the project.",
    rating: 5,
    project: "Commercial Renovation",
    photo: "/api/placeholder/80/80"
  },
  {
    id: "3",
    name: "Emma Thompson",
    suburb: "Brisbane, QLD",
    quote: "The Build Now, Pay Later option made our dream home possible. The flexibility in payment combined with quality construction made all the difference.",
    rating: 5,
    project: "New Residential Build",
    photo: "/api/placeholder/80/80"
  },
  {
    id: "4",
    name: "James & Lisa Wilson",
    suburb: "Perth, WA",
    quote: "Professional service from consultation through to handover. TOFA Group's attention to detail and commitment to quality really set them apart.",
    rating: 5,
    project: "Luxury Family Home",
    photo: "/api/placeholder/80/80"
  },
  {
    id: "5",
    name: "Maria Santos",
    suburb: "Adelaide, SA",
    quote: "Excellent project management and quality construction. The team handled everything professionally and delivered exactly what was promised.",
    rating: 5,
    project: "Duplex Development",
    photo: "/api/placeholder/80/80"
  },
  {
    id: "6",
    name: "Robert & Jennifer Lee",
    suburb: "Gold Coast, QLD",
    quote: "From planning to completion, TOFA Group exceeded our expectations. The build quality is exceptional and we couldn't be happier with the result.",
    rating: 5,
    project: "Coastal Property Build",
    photo: "/api/placeholder/80/80"
  }
];

export default function Testimonials() {
  // Duplicate testimonials array for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-gtb-aero mb-4 tracking-wider uppercase">Client Feedback</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-6">
            Trusted by Australians Nationwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from clients who have completed their construction projects with TOFA Group
          </p>
        </div>

        {/* Rotating Carousel */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -testimonials.length * 400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
            suppressHydrationWarning
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[380px]"
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                suppressHydrationWarning
              >
                <div className="bg-gray-50 rounded-xl p-8 h-full border-l-4 border-gtb-aero hover:shadow-lg transition-shadow">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="h-8 w-8 text-gtb-aero mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 min-h-[120px]">
                    {testimonial.quote}
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                    <div className="w-12 h-12 rounded-full bg-gtb-navy flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gtb-navy">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.suburb}
                      </div>
                      <div className="text-xs text-gtb-aero font-medium mt-0.5">
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 text-lg mb-6">
            Ready to start your construction project?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gtb-aero hover:bg-gtb-aero-light text-white rounded-lg transition-colors duration-200 font-semibold shadow-lg text-lg"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
