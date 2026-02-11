"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PartnerLogo {
  name: string;
  logo: string;
  url?: string;
}

// Actual partner logos from TOFA Group projects
const partners: PartnerLogo[] = [
  { name: "Royston Homes", logo: "/Logos w tofa/royston_logo_rgb_noBackground.png" },
  { name: "Hattan Homes", logo: "/Logos w tofa/Hattan-Logo-white.png" },
  { name: "Hermitage Homes", logo: "/Logos w tofa/Hermitage-Homes-Logo_July23_horz_rev_web_small.png" },
  { name: "Mirrastone", logo: "/Logos w tofa/Mirrastone-logo-landscape-white-rgb.png" },
  { name: "Porter Davis", logo: "/Logos w tofa/691b9cea444a569747f8aeff_Logo_Red.svg" },
  { name: "Partner 1", logo: "/Logos w tofa/252115351_112169304597937_224164103459195242_n.jpg" },
  { name: "Partner 2", logo: "/Logos w tofa/524893340_18062424908205125_4790257449684816253_n.jpg" },
  { name: "Partner Logo", logo: "/Logos w tofa/header-logo.svg" },
  { name: "Partner 3", logo: "/Logos w tofa/logo.png" },
];

export default function PartnerLogos() {
  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="bg-gray-50 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Construction Excellence
          </h3>
          <p className="text-sm text-gray-500">
            Quality projects delivered across Australia
          </p>
        </div>

        {/* Infinite auto-rotating carousel */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling container */}
            <motion.div
            className="flex gap-12 items-center"
                animate={{ 
              x: [0, -partners.length * 180],
                }}
                transition={{ 
              x: {
                  repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
                  suppressHydrationWarning
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 group"
                whileHover={{ 
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 300 }
                }}
                suppressHydrationWarning
              >
                <div className="relative w-32 h-16 transition-all duration-300 opacity-80 group-hover:opacity-100" suppressHydrationWarning>
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    suppressHydrationWarning
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* More partners link */}
        <div className="text-center mt-8">
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
