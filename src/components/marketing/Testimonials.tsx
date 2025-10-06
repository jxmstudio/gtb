"use client";

import { motion } from "framer-motion";
import { StaggerReveal } from "../motion/Reveals";
import { MotionDiv, staggerItem } from "../motion/MotionPrimitives";
import { Card } from "../ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

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
    suburb: "Point Cook, VIC",
    quote: "George helped us find the perfect builder for our first home. The process was smooth and we saved over $50,000!",
    rating: 5,
    project: "First Home - 4BR Family Home",
    photo: "/api/placeholder/80/80"
  },
  {
    id: "2",
    name: "David Rodriguez",
    suburb: "Werribee, VIC",
    quote: "As an investor, George's turnkey packages have been a game-changer. Great returns and zero hassle.",
    rating: 5,
    project: "Investment Property Portfolio",
    photo: "/api/placeholder/80/80"
  },
  {
    id: "3",
    name: "Emma Thompson",
    suburb: "Tarneit, VIC",
    quote: "The finance assistance was incredible. They helped us navigate the first home buyer grants and saved us months of paperwork.",
    rating: 5,
    project: "KiwiSaver Rollover + New Build",
    photo: "/api/placeholder/80/80"
  },
  {
    id: "4",
    name: "James & Lisa Wilson",
    suburb: "Hoppers Crossing, VIC",
    quote: "We were overwhelmed by the building process until we found George. His expertise and connections made everything so much easier.",
    rating: 5,
    project: "Custom Family Home",
    photo: "/api/placeholder/80/80"
  },
  {
    id: "5",
    name: "Maria Santos",
    suburb: "Truganina, VIC",
    quote: "The builder matching service was spot on. We got exactly what we wanted within our budget and timeline.",
    rating: 5,
    project: "First Home - 3BR Townhouse",
    photo: "/api/placeholder/80/80"
  },
  {
    id: "6",
    name: "Robert & Jennifer Lee",
    suburb: "Wyndham Vale, VIC",
    quote: "George's team made our investment property purchase seamless. The property is already generating great rental income.",
    rating: 5,
    project: "Investment Property - Turnkey",
    photo: "/api/placeholder/80/80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gtb-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients who have built their dream homes and investment properties.
          </p>
        </motion.div>

        <StaggerReveal staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <MotionDiv key={testimonial.id} variants={staggerItem}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-600 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={testimonial.photo || "/api/placeholder/80/80"}
                        alt={`${testimonial.name} photo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gtb-navy">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.suburb}
                      </div>
                      <div className="text-xs text-gtb-aero font-medium mt-1">
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </StaggerReveal>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Ready to join our satisfied clients?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gtb-navy text-white rounded-lg hover:bg-gtb-navy-light transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Building Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
