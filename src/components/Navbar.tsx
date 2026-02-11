'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Residential Construction', href: '/services#residential' },
      { name: 'Commercial Construction', href: '/services#commercial' },
      { name: 'Design & Build', href: '/services#design-build' },
      { name: 'Build Now, Pay Later', href: '/build-now-pay-later' },
    ]
  },
  { name: 'Projects', href: '/projects' },
  { 
    name: 'Resources', 
    href: '#',
    dropdown: [
      { name: 'First Home Buyers', href: '/first-home-buyers' },
      { name: 'Investors', href: '/investors' },
      { name: 'Meet the Team', href: '/team' },
      { name: 'FAQs', href: '/faqs' },
    ]
  },
  { name: 'Contact', href: '/contact' },
] as const;

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
          <Link href="/" className="flex-shrink-0">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.dropdown && item.dropdown.some(sub => pathname === sub.href));
                const hasDropdown = 'dropdown' in item && item.dropdown;
                
                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => hasDropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`px-4 py-2 text-sm font-medium transition-colors duration-200 relative flex items-center gap-1 ${
                        isActive 
                          ? 'text-gtb-navy' 
                          : 'text-gray-700 hover:text-gtb-navy'
                      }`}
                    >
                      {item.name}
                      {hasDropdown && <ChevronDown className="h-4 w-4" />}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gtb-aero"></span>
                      )}
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {hasDropdown && activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gtb-aero/10 hover:text-gtb-navy transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              href="/contact"
              className="bg-gtb-aero hover:bg-gtb-aero-light text-white rounded-lg px-6 py-2.5 font-medium transition-colors duration-200"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gtb-navy p-2 transition-colors"
              aria-label="Toggle menu"
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
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-1 bg-white max-h-[80vh] overflow-y-auto">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                const hasDropdown = 'dropdown' in item && item.dropdown;
                
                return (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
                        isActive ? 'text-gtb-navy bg-gtb-aero/10' : 'text-gray-700 hover:text-gtb-navy hover:bg-gray-50'
                      }`}
                      onClick={() => !hasDropdown && setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {hasDropdown && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gtb-navy hover:bg-gray-50 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4">
                <Link 
                  href="/contact"
                  className="block w-full text-center bg-gtb-aero hover:bg-gtb-aero-light text-white rounded-lg px-6 py-2.5 font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
