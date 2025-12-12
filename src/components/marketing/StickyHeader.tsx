"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedButton } from "../motion/AnimatedButton";
import { useAnalytics } from "@/lib/analytics";
import Link from "next/link";

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const analytics = useAnalytics();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show sticky header after scrolling 100px
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-bold text-gtb-navy">
                  TOFA Group
                </Link>
              </div>

              {/* CTA Button */}
              <div className="hidden md:block">
                <AnimatedButton asChild size="sm" className="bg-gtb-aero hover:bg-gtb-aero-light text-white">
                  <Link 
                    href="/contact"
                    onClick={() => analytics.trackButtonClick("Free Consultation", "sticky_header")}
                  >
                    Free Consultation
                  </Link>
                </AnimatedButton>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
