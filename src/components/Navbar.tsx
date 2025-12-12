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
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Build Now, Pay Later', href: '/build-now-pay-later', highlight: true },
  { name: 'Team', href: '/team' },
  { name: 'FAQs', href: '/faqs' },
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatedButton asChild className="bg-gradient-to-r from-gtb-aero to-tofa-green-light hover:from-tofa-green-light hover:to-gtb-aero text-white rounded-lg px-6 py-2 font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                <Link href="/contact">Free Consultation</Link>
              </AnimatedButton>
            </motion.div>
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
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
                        isActive ? 'text-gtb-navy bg-gradient-to-r from-gtb-aero/10 to-transparent' : 'text-gray-700 hover:text-gtb-navy hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        {item.name}
                        {(item as NavigationItem).highlight && (
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
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div 
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navigation.length * 0.05 }}
              >
                <AnimatedButton asChild className="w-full bg-gradient-to-r from-gtb-aero to-tofa-green-light hover:from-tofa-green-light hover:to-gtb-aero text-white rounded-lg font-semibold shadow-md">
                  <Link href="/contact">Free Consultation</Link>
                </AnimatedButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
