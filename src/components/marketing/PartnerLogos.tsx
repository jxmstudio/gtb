"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Image from "next/image";

interface PartnerLogo {
  name: string;
  logo: string;
  url?: string;
}

// Placeholder partner logos - replace with actual partner logos
const partners: PartnerLogo[] = [
  { name: "Builder 1", logo: "/api/placeholder/120/60" },
  { name: "Builder 2", logo: "/api/placeholder/120/60" },
  { name: "Builder 3", logo: "/api/placeholder/120/60" },
  { name: "Builder 4", logo: "/api/placeholder/120/60" },
  { name: "Builder 5", logo: "/api/placeholder/120/60" },
  { name: "Builder 6", logo: "/api/placeholder/120/60" },
];

export default function PartnerLogos() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Trusted by Australia&apos;s leading builders
          </h3>
          <p className="text-sm text-gray-500">
            We work with the most reputable builders in Melbourne
          </p>
        </div>

        {/* Desktop: Static grid */}
        <div className="hidden md:grid md:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative w-24 h-12 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Horizontal scroll with snap */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                className="flex-shrink-0 snap-center"
              >
                <div className="relative w-20 h-10 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* More partners link */}
        <div className="text-center mt-6">
          <motion.a
            href="/about"
            className="text-sm text-gray-500 hover:text-gtb-navy transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View all our partners →
          </motion.a>
        </div>
      </div>
    </div>
  );
}
