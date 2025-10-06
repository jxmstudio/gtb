import React from 'react';
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
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="bg-gtb-aero/10 p-2 rounded-lg">
              {icon}
            </div>
          )}
          <CardTitle className="text-xl text-gtb-navy">{title}</CardTitle>
        </div>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-gtb-aero rounded-full flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <AnimatedButton asChild variant="outline" className="w-full border-gtb-navy text-gtb-navy hover:bg-gtb-navy hover:text-white">
          <Link href={href}>
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </AnimatedButton>
      </CardContent>
    </Card>
  );
};
