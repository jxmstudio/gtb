import React from 'react';
import { AnimatedButton } from './motion/AnimatedButton';
import { Card } from './ui/card';
import { RevealOnScroll } from './motion/Reveals';
import { MotionDiv, MotionH1, MotionP, staggerContainer, staggerItem } from './motion/MotionPrimitives';
import HeroLeadForm from './lead/HeroLeadForm';
// TrustStrip and PartnerLogos are used on pages, not directly inside this Hero now
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

interface HeroProps {
  headline?: string;
  subline?: string;
  showTrustIndicators?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  headline = "Take the guesswork out of building your first home",
  subline = "Partnered with Australia's largest builders in Western suburbs Melbourne",
  showTrustIndicators = true
}) => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background with radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gtb-aero/5 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <MotionDiv 
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <MotionDiv className="space-y-6" variants={staggerItem}>
              <MotionH1 
                className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gtb-navy leading-[1.1]"
                variants={staggerItem}
              >
                {headline}
              </MotionH1>
              <MotionP 
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl"
                variants={staggerItem}
              >
                {subline}
              </MotionP>
            </MotionDiv>

            {/* Single Primary CTA */}
            <MotionDiv className="flex flex-col sm:flex-row gap-4" variants={staggerItem}>
              <AnimatedButton asChild size="lg" className="bg-gtb-aero hover:bg-gtb-aero-light text-white text-lg px-8 py-4 shadow-xl rounded-2xl font-semibold">
                <Link href="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </AnimatedButton>
              <AnimatedButton asChild variant="outline" size="lg" className="border-gtb-navy text-gtb-navy hover:bg-gtb-navy hover:text-white text-lg px-8 py-4 rounded-2xl">
                <Link href="/services">View Our Services</Link>
              </AnimatedButton>
            </MotionDiv>

            {/* Trust Indicators */}
            {showTrustIndicators && (
              <MotionDiv className="space-y-3" variants={staggerItem}>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-gtb-aero" />
                  <span>No obligation consultation</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-gtb-aero" />
                  <span>Access to exclusive builder deals</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-gtb-aero" />
                  <span>Finance assistance available</span>
                </div>
              </MotionDiv>
            )}
          </MotionDiv>

          {/* Visual/Stats */}
          <RevealOnScroll direction="right" delay={0.2}>
            <div className="space-y-6">
              <Card className="p-8 bg-white shadow-xl rounded-2xl border-0">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-gtb-aero/10 p-4 rounded-full">
                      <Star className="h-8 w-8 text-gtb-aero" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gtb-navy">500+</h3>
                  <p className="text-gray-600 font-medium">Happy homeowners connected</p>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center bg-white shadow-lg rounded-2xl border-0">
                  <h4 className="text-2xl font-bold text-gtb-navy">15+</h4>
                  <p className="text-sm text-gray-600 font-medium">Partner Builders</p>
                </Card>
                <Card className="p-6 text-center bg-white shadow-lg rounded-2xl border-0">
                  <h4 className="text-2xl font-bold text-gtb-navy">$2M+</h4>
                  <p className="text-sm text-gray-600 font-medium">Saved by Clients</p>
                </Card>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Lead Form Section */}
        {showTrustIndicators && (
          <div className="mt-20">
            <HeroLeadForm />
          </div>
        )}
      </div>
    </section>
  );
};
