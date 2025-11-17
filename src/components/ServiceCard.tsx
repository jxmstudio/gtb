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
  return (
    <Card className="h-full border-gray-200/60 bg-white/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-start space-x-3 mb-3">
          {icon && (
            <motion.div 
              className="bg-gradient-to-br from-gtb-aero/20 to-gtb-aero/8 p-2.5 rounded-[12px] border-2 border-gtb-aero/20 flex-shrink-0 shadow-md"
              whileHover={{ 
                scale: 1.15, 
                rotate: 10,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              animate={{
                boxShadow: [
                  "0 4px 6px -1px rgba(107, 142, 35, 0.1)",
                  "0 8px 12px -2px rgba(107, 142, 35, 0.15)",
                  "0 4px 6px -1px rgba(107, 142, 35, 0.1)",
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {icon}
            </motion.div>
          )}
          <CardTitle className="text-xl font-bold text-gtb-navy leading-tight">{title}</CardTitle>
        </div>
        <CardDescription className="text-gray-600 leading-relaxed text-[15px]">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <ul className="space-y-2.5">
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start space-x-3 text-sm text-gray-700 leading-relaxed"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 4 }}
            >
              <motion.div 
                className="w-2 h-2 bg-gtb-aero rounded-full flex-shrink-0 mt-1.5 shadow-sm"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                  boxShadow: [
                    "0 0 0 0 rgba(107, 142, 35, 0.4)",
                    "0 0 8px 2px rgba(107, 142, 35, 0.6)",
                    "0 0 0 0 rgba(107, 142, 35, 0.4)",
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.15
                }}
              />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
        <AnimatedButton asChild variant="outline" className="w-full border-2 border-gtb-navy/20 text-gtb-navy hover:bg-gtb-navy hover:text-white hover:border-gtb-navy font-medium">
          <Link href={href}>
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </AnimatedButton>
      </CardContent>
    </Card>
  );
};
