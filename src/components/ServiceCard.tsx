"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
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
    <Card className="h-full border-gray-200/60 bg-white hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gtb-aero/5 to-transparent rounded-bl-full"></div>
      
      <CardHeader className="relative">
        <div className="flex items-start space-x-3 mb-3">
          {icon && (
            <div className="bg-gtb-aero p-3 rounded-xl flex-shrink-0 shadow-md text-white">
              {icon}
            </div>
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
            <li 
              key={index} 
              className="flex items-start space-x-3 text-sm text-gray-700 leading-relaxed"
            >
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-2 h-2 bg-gtb-aero rounded-full" />
              </div>
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          href={href} 
          className="w-full bg-gtb-aero hover:bg-gtb-aero-light text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200 rounded-lg px-6 py-3 inline-flex items-center justify-center group/btn"
        >
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  );
};
