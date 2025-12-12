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
    lg: 'h-16 w-auto'
  };

  const logoSrc = '/logo.png';

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${variant === 'inverted' ? 'bg-white/10 p-2 rounded-[12px]' : ''}`}>
        <Image
          src={logoSrc}
          alt="TOFA Group - Residential & Commercial Construction"
          width={size === 'sm' ? 100 : size === 'md' ? 120 : size === 'lg' ? 180 : 140}
          height={size === 'sm' ? 32 : size === 'md' ? 40 : size === 'lg' ? 64 : 48}
          className={`${sizeClasses[size]} object-contain transition-all duration-300 hover:scale-105 drop-shadow-sm`}
          priority
          suppressHydrationWarning
        />
      </div>
    </div>
  );
};
