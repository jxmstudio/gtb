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
      {/* Layered Background with construction theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30"></div>
      
      {/* Blueprint grid pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-40"></div>
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(107, 142, 35, 0.15), rgba(107, 142, 35, 0.05), transparent)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(10, 51, 112, 0.08), transparent)"
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>
      
      {/* Diagonal accent lines */}
      <div className="absolute inset-0 diagonal-lines opacity-50"></div>
      
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
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                    <CheckCircle className="h-5 w-5 text-gtb-aero flex-shrink-0" />
                  <span>Free project consultation & quote</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                    <CheckCircle className="h-5 w-5 text-gtb-aero flex-shrink-0" />
                  <span>Full compliance & warranty coverage</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                    <CheckCircle className="h-5 w-5 text-gtb-aero flex-shrink-0" />
                  <span>Flexible payment options available</span>
                </div>
              </MotionDiv>
            )}
          </MotionDiv>

          {/* Visual/Stats */}
          <RevealOnScroll direction="right" delay={0.2}>
            <div className="space-y-5">
              {/* Featured Stat Card */}
              <motion.div
                className="relative group"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-8 bg-gradient-to-br from-white via-emerald-50/20 to-white border-2 border-gtb-aero/20 shadow-xl overflow-hidden">
                  {/* Animated background shimmer */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(107, 142, 35, 0.1), transparent)"
                    }}
                    animate={{ 
                      x: ["-100%", "100%"]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <div className="relative text-center space-y-4">
                    <motion.div 
                      className="flex justify-center"
                      animate={{ 
                        rotate: [0, 5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="relative">
                        <motion.div 
                          className="bg-gradient-to-br from-gtb-aero via-tofa-green-light to-gtb-aero p-4 rounded-2xl shadow-lg"
                    animate={{ 
                            boxShadow: [
                              "0 10px 30px -10px rgba(107, 142, 35, 0.3)",
                              "0 15px 40px -10px rgba(107, 142, 35, 0.5)",
                              "0 10px 30px -10px rgba(107, 142, 35, 0.3)"
                            ]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                          }}
                        >
                          <CheckCircle className="h-8 w-8 text-white" />
                        </motion.div>
                        
                        {/* Pulsing rings */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 border-gtb-aero"
                          animate={{
                            scale: [1, 1.3],
                            opacity: [0.6, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 border-gtb-aero"
                          animate={{
                            scale: [1, 1.3],
                            opacity: [0.6, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: 0.5
                          }}
                        />
                      </div>
                    </motion.div>
                    
                    <div className="space-y-2">
                      <motion.h3 
                        className="text-5xl font-bold bg-gradient-to-r from-gtb-navy via-gtb-aero to-gtb-navy bg-clip-text text-transparent"
                        animate={{ 
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{ 
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{
                          backgroundSize: "200% 200%"
                    }}
                  >
                    500+
                  </motion.h3>
                      <p className="text-gray-700 font-semibold text-base">Happy homeowners connected</p>
                      <p className="text-sm text-gray-500">Across Australia</p>
                    </div>
                </div>
              </Card>
              </motion.div>

              {/* Side Stats */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-6 text-center bg-gradient-to-br from-slate-50 to-white border-slate-200/60 shadow-md card-hover-lift relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gtb-navy/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative">
                      <motion.h4 
                        className="text-3xl font-bold text-gtb-navy"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        $75M+
                      </motion.h4>
                      <p className="text-sm text-gray-600 font-medium mt-2">Projects Delivered</p>
                    </div>
                </Card>
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-6 text-center bg-gradient-to-br from-emerald-50/50 to-white border-gtb-aero/20 shadow-md card-hover-lift relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gtb-aero/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative">
                      <motion.h4 
                        className="text-3xl font-bold text-gtb-aero"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      >
                        $2M+
                      </motion.h4>
                      <p className="text-sm text-gray-600 font-medium mt-2">Saved by Clients</p>
                    </div>
                </Card>
                </motion.div>
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
