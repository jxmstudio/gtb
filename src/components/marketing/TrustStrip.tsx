"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface TrustStat {
  value: string;
  label: string;
  suffix?: string;
}

const stats: TrustStat[] = [
  { value: "500+", label: "homeowners connected" },
  { value: "15+", label: "partner builders" },
  { value: "$2M+", label: "saved via deals" },
];

export default function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counters, setCounters] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    if (!isInView) return;

    const animateCounters = () => {
      stats.forEach((stat, index) => {
        const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
        if (isNaN(numericValue)) return;

        const duration = 2000; // 2 seconds
        const steps = 60; // 60 steps for smooth animation
        const stepDuration = duration / steps;
        const increment = numericValue / steps;

        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= numericValue) {
            current = numericValue;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [index]: Math.floor(current)
          }));
        }, stepDuration);
      });
    };

    // Start animation after a short delay
    const timer = setTimeout(animateCounters, 200);
    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              className="space-y-2"
            >
              <div className="text-3xl md:text-4xl font-bold text-gtb-navy">
                {counters[index] !== undefined ? counters[index] : 0}
                {stat.suffix || stat.value.replace(/[0-9]/g, '')}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
