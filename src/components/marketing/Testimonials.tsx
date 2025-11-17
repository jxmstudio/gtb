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
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it - hear from our satisfied clients who have built their dream homes and investment properties.
          </p>
        </motion.div>

        <StaggerReveal staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <MotionDiv key={testimonial.id} variants={staggerItem}>
                <Card className="p-6 h-full border-gray-200/60 bg-white">
                  {/* Rating - Only show on mobile */}
                  <div className="flex items-center space-x-1 mb-5 md:hidden">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gray-300 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <motion.blockquote 
                    className="text-gray-700 mb-6 italic leading-relaxed text-[15px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    &quot;{testimonial.quote}&quot;
                  </motion.blockquote>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    <motion.div 
                      className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 border-2 border-gray-200"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={testimonial.photo || "/api/placeholder/80/80"}
                        alt={`${testimonial.name} photo`}
                        fill
                        className="object-cover"
                        suppressHydrationWarning
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gtb-navy text-[15px]">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.suburb}
                      </div>
                      <motion.div 
                        className="text-xs text-gtb-aero font-medium mt-0.5"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {testimonial.project}
                      </motion.div>
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
            className="inline-flex items-center px-6 py-3 bg-gtb-navy text-white rounded-[15px] hover:bg-gtb-navy-light transition-colors duration-200 font-medium shadow-md"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Building Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
