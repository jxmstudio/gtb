import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedButton } from './motion/AnimatedButton';
import { Card } from './ui/card';
import { RevealOnScroll } from './motion/Reveals';
import { MotionDiv, MotionH1, MotionP, staggerContainer, staggerItem } from './motion/MotionPrimitives';
import HeroLeadForm from './lead/HeroLeadForm';
import { Logo } from './Logo';
// TrustStrip and PartnerLogos are used on pages, not directly inside this Hero now
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface HeroProps {
  headline?: string;
  subline?: string;
  showTrustIndicators?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  headline = "Building Quality Projects Across Australia",
  subline = "TOFA Group delivers residential and commercial construction with confidence. From planning to completion, we manage every stage of your build to ensure quality, transparency, and on-time delivery.",
  showTrustIndicators = true
}) => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background with radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-blue-50/20"></div>
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at top right, rgba(107, 142, 35, 0.12), transparent)",
            "radial-gradient(ellipse at top right, rgba(107, 142, 35, 0.08), transparent)",
            "radial-gradient(ellipse at top right, rgba(107, 142, 35, 0.12), transparent)",
          ]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-green-50/20"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <MotionDiv 
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Logo */}
            <MotionDiv className="mb-8" variants={staggerItem}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <Logo size="lg" className="mb-0" />
                  <motion.div
                    className="absolute -inset-2 bg-gtb-aero/5 rounded-2xl blur-xl -z-10"
                    animate={{
                      opacity: [0.3, 0.5],
                      scale: [1, 1.1]
                    }}
                    transition={{
                      opacity: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                      scale: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                    }}
                  />
                </div>
              </motion.div>
            </MotionDiv>
            
            <MotionDiv className="space-y-6" variants={staggerItem}>
              <MotionH1 
                className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gtb-navy leading-[1.1] tracking-tight"
                variants={staggerItem}
              >
                {headline}
              </MotionH1>
              <MotionP 
                className="text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed max-w-2xl"
                variants={staggerItem}
              >
                {subline}
              </MotionP>
            </MotionDiv>

            {/* Single Primary CTA */}
            <MotionDiv className="flex flex-col sm:flex-row gap-4" variants={staggerItem}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatedButton asChild size="lg" className="bg-gtb-aero hover:bg-gtb-aero-light text-white text-lg px-8 py-4 shadow-lg rounded-[15px] font-semibold animate-pulse-glow">
                  <Link href="/contact">
                    Book Free Consultation
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                    </motion.span>
                  </Link>
                </AnimatedButton>
              </motion.div>
              <AnimatedButton asChild variant="outline" size="lg" className="border-2 border-gtb-aero/30 text-gtb-aero hover:bg-gtb-aero hover:text-white hover:border-gtb-aero text-lg px-8 py-4 rounded-[15px] font-medium">
                <Link href="/services">View Our Services</Link>
              </AnimatedButton>
            </MotionDiv>

            {/* Trust Indicators */}
            {showTrustIndicators && (
              <MotionDiv className="space-y-3 pt-2" variants={staggerItem}>
                <motion.div 
                  className="flex items-center space-x-3 text-sm text-gray-700"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0
                    }}
                  >
                    <CheckCircle className="h-5 w-5 text-gtb-aero flex-shrink-0" />
                  </motion.div>
                  <span>No obligation consultation</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 text-sm text-gray-700"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.3
                    }}
                  >
                    <CheckCircle className="h-5 w-5 text-gtb-aero flex-shrink-0" />
                  </motion.div>
                  <span>Access to exclusive builder deals</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 text-sm text-gray-700"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.6
                    }}
                  >
                    <CheckCircle className="h-5 w-5 text-gtb-aero flex-shrink-0" />
                  </motion.div>
                  <span>Finance assistance available</span>
                </motion.div>
              </MotionDiv>
            )}
          </MotionDiv>

          {/* Visual/Stats */}
          <RevealOnScroll direction="right" delay={0.2}>
            <div className="space-y-5">
              <Card className="p-8 bg-white border-gray-200/60">
                <div className="text-center space-y-4">
                  <motion.div 
                    className="flex justify-center"
                    animate={{ 
                      rotate: [0, 3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                      scale: { duration: 4, repeat: Infinity, repeatType: "reverse", repeatDelay: 2, ease: "easeInOut" }
                    }}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-gtb-aero/25 to-gtb-aero/10 p-3 rounded-[15px] border border-gtb-aero/20 shadow-lg"
                      animate={{ 
                        rotate: [0, 3],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                        scale: { duration: 4, repeat: Infinity, repeatType: "reverse", repeatDelay: 2, ease: "easeInOut" }
                      }}
                    >
                      <CheckCircle className="h-6 w-6 text-gtb-aero" />
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="text-3xl font-bold text-gtb-navy"
                    animate={{ 
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    500+
                  </motion.h3>
                  <p className="text-gray-600 font-medium text-[15px]">Happy homeowners connected</p>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center bg-white border-gray-200/60">
                  <h4 className="text-2xl font-bold text-gtb-navy">15+</h4>
                  <p className="text-sm text-gray-600 font-medium mt-1">Projects Delivered</p>
                </Card>
                <Card className="p-6 text-center bg-white border-gray-200/60">
                  <h4 className="text-2xl font-bold text-gtb-navy">$2M+</h4>
                  <p className="text-sm text-gray-600 font-medium mt-1">Saved by Clients</p>
                </Card>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Lead Form Section */}
        {showTrustIndicators && (
          <div className="mt-16 lg:mt-20">
            <HeroLeadForm />
          </div>
        )}
      </div>
    </section>
  );
};
