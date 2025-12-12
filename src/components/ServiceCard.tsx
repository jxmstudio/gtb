"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { AnimatedButton } from './motion/AnimatedButton';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  href: string;
  ctaText?: string;
  icon?: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  href,
  ctaText = "Learn More",
  icon
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div
      className="h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="h-full border-gray-200/60 bg-gradient-to-br from-white via-emerald-50/10 to-white relative overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Animated gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(107, 142, 35, 0.05), rgba(107, 142, 35, 0.1))"
          }}
          animate={{
            background: isHovered ? [
              "linear-gradient(135deg, rgba(107, 142, 35, 0.05), rgba(107, 142, 35, 0.1))",
              "linear-gradient(135deg, rgba(107, 142, 35, 0.1), rgba(107, 142, 35, 0.05))",
              "linear-gradient(135deg, rgba(107, 142, 35, 0.05), rgba(107, 142, 35, 0.1))"
            ] : []
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gtb-aero/5 to-transparent rounded-bl-full"></div>
        
        <CardHeader className="relative">
          <div className="flex items-start space-x-3 mb-3">
            {icon && (
              <motion.div 
                className="bg-gradient-to-br from-gtb-aero via-tofa-green-light to-gtb-aero p-3 rounded-xl border-2 border-gtb-aero/30 flex-shrink-0 shadow-lg relative overflow-hidden"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 10,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                animate={{
                  boxShadow: [
                    "0 4px 6px -1px rgba(107, 142, 35, 0.2)",
                    "0 10px 15px -3px rgba(107, 142, 35, 0.3)",
                    "0 4px 6px -1px rgba(107, 142, 35, 0.2)",
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)"
                  }}
                  animate={{
                    x: ["-100%", "200%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
                <div className="relative text-white">
                  {icon}
                </div>
              </motion.div>
            )}
            <CardTitle className="text-xl font-bold text-gtb-navy leading-tight pt-1">{title}</CardTitle>
          </div>
          <CardDescription className="text-gray-700 leading-relaxed text-[15px] font-medium">
            {description}
          </CardDescription>
        </CardHeader>
      <CardContent className="space-y-5 relative">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start space-x-3 text-sm text-gray-700 leading-relaxed group/item"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 6 }}
            >
              <motion.div 
                className="relative flex-shrink-0 mt-1.5"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.15
                }}
              >
                <div className="w-2 h-2 bg-gtb-aero rounded-full shadow-sm" />
                
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-gtb-aero"
                  animate={{
                    scale: [1, 2],
                    opacity: [0.6, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.15
                  }}
                />
              </motion.div>
              <span className="group-hover/item:text-gtb-navy transition-colors duration-200 font-medium">{feature}</span>
            </motion.li>
          ))}
        </ul>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <AnimatedButton 
            asChild 
            className="w-full bg-gradient-to-r from-gtb-aero to-tofa-green-light hover:from-tofa-green-light hover:to-gtb-aero text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link href={href} className="flex items-center justify-center">
              {ctaText}
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.span>
            </Link>
          </AnimatedButton>
        </motion.div>
      </CardContent>
      </Card>
    </motion.div>
  );
};

