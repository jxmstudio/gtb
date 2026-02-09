"use client";

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
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from clients who have completed their construction projects with TOFA Group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gtb-navy flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
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
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to start your construction project?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gtb-aero hover:bg-gtb-aero-light text-white rounded-lg transition-colors duration-200 font-medium shadow-md"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
