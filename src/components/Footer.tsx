import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Builder Connection', href: '/services#builder-connection' },
    { name: 'Finance Assistance', href: '/services#finance' },
    { name: 'KiwiSaver Rollover', href: '/services#kiwisaver' },
    { name: 'Turnkey Packages', href: '/packages' },
    { name: 'Investment Properties', href: '/investors' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Process', href: '/about#process' },
    { name: 'Testimonials', href: '/about#testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gtb-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="lg" variant="inverted" />
            <p className="text-gray-300 text-sm leading-relaxed">
              TofaGroup - Helping first-time home buyers and investors connect with Australia&apos;s most reputable builders in Western suburbs Melbourne.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Western Suburbs, Melbourne</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <a href="tel:+61300000000" className="hover:text-white transition-colors duration-200">
                  +61 3 0000 0000
                </a>
                <span className="text-xs text-gray-400">(Open 9-5 Mon-Fri)</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>hello@georgethebroker.com.au</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get the First-Home Buyer Guide</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Download our free guide with tips, grants, and everything you need to know about building your first home.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-gtb-aero hover:bg-gtb-aero-light text-white rounded-lg">
                Get Free Guide
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-gray-300 text-sm">
              © 2025 George The Broker - TofaGroup. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
