'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { AnimatedButton } from './motion/AnimatedButton';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Packages', href: '/packages' },
  { name: 'Contact', href: '/contact' },
] as const;

type NavigationItem = {
  name: string;
  href: string;
  highlight?: boolean;
};

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white shadow-sm border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/" className="flex-shrink-0">
              <Logo size="md" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                const navItem = item as NavigationItem;
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                        isActive 
                          ? 'text-gtb-navy' 
                          : 'text-gray-600 hover:text-gtb-navy'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.name}
                        {navItem.highlight && (
                          <motion.span 
                            className="px-2 py-0.5 text-xs font-medium bg-gtb-aero/20 text-gtb-aero rounded-full"
                            animate={{ 
                              scale: [1, 1.05, 1],
                              opacity: [0.8, 1, 0.8]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            Popular
                          </motion.span>
                        )}
                      </span>
                      <motion.span 
                        className={`absolute bottom-0 left-0 h-0.5 bg-gtb-aero transition-all duration-200 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                        whileHover={{ height: "2px" }}
                      ></motion.span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <AnimatedButton asChild className="bg-gtb-aero hover:bg-gtb-aero-light text-white rounded-lg px-5 py-2 font-medium">
              <Link href="/contact">Free Consultation</Link>
            </AnimatedButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gtb-navy p-2"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      isActive ? 'text-gtb-navy bg-gtb-aero/5' : 'text-gray-700 hover:text-gtb-navy'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      {item.name}
                      {(item as NavigationItem).highlight && (
                        <span className="px-1.5 py-0.5 text-xs font-medium bg-gtb-aero/10 text-gtb-aero rounded-full">
                          Popular
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}
              <div className="pt-4">
                <AnimatedButton asChild className="w-full bg-gtb-aero hover:bg-gtb-aero-light text-white rounded-lg font-medium">
                  <Link href="/contact">Free Consultation</Link>
                </AnimatedButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
