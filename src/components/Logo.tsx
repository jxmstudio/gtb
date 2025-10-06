import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'inverted';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  variant = 'default' 
}) => {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-12 w-auto'
  };

  // For inverted variant, we might want to use a white version of the logo
  // For now, using the same logo but with appropriate background handling
  const logoSrc = variant === 'inverted' 
    ? '/TofaGroup_Logo_Black_Web_1920px.png' // You might want to create a white version
    : '/TofaGroup_Logo_Black_Web_1920px.png';

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${variant === 'inverted' ? 'bg-white/10 p-2 rounded-lg' : ''}`}>
        <Image
          src={logoSrc}
          alt="George The Broker - TofaGroup"
          width={size === 'sm' ? 120 : size === 'md' ? 150 : 180}
          height={size === 'sm' ? 32 : size === 'md' ? 40 : 48}
          className={`${sizeClasses[size]} object-contain`}
          priority
        />
      </div>
    </div>
  );
};
