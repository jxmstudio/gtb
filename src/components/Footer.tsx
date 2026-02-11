'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Residential Construction', href: '/services' },
    { name: 'Commercial Construction', href: '/services' },
    { name: 'Project Management', href: '/services' },
    { name: 'Design & Build', href: '/services' },
    { name: 'Build Now, Pay Later', href: '/build-now-pay-later' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Meet the Team', href: '/team' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'First Home Buyers', href: '/first-home-buyers' },
    { name: 'Investors', href: '/investors' },
    { name: 'Services', href: '/services' },
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
            <p className="text-white text-sm leading-relaxed">
              TOFA Group delivers high-quality residential and commercial construction projects across Australia.
            </p>
            <p className="text-gtb-aero text-sm font-semibold">
              Delivering projects Australia-wide
            </p>
            <div className="space-y-2">
              <div className="flex items-start space-x-2 text-sm text-white">
                <MapPin className="h-4 w-4 flex-shrink-0 text-gtb-aero mt-0.5" />
                <div>
                  <p>PO BOX 256</p>
                  <p>Avondale Heights, VIC 3034</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white">
                <Phone className="h-4 w-4 flex-shrink-0 text-gtb-aero" />
                <a href="tel:1300000685" className="hover:text-gtb-aero transition-colors duration-200">
                  1300 000 685
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white">
                <Mail className="h-4 w-4 flex-shrink-0 text-gtb-aero" />
                <a href="mailto:info@tofagroup.com.au" className="hover:text-gtb-aero transition-colors duration-200">
                  info@tofagroup.com.au
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-gtb-aero text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-gtb-aero text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-gtb-aero text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-gtb-aero text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/groups/1680469966691932/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gtb-aero transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/thetofagroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gtb-aero transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gtb-aero transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm text-white text-center">
              <p className="font-medium">
                &copy; {new Date().getFullYear()} TOFA Group. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-sm text-white leading-relaxed text-center max-w-4xl mx-auto">
            <strong>Disclaimer:</strong> All projects are subject to contract and are delivered in accordance with Australian building standards and regulations. Information provided is general in nature and should not be considered financial or legal advice. TOFA Group recommends consulting with appropriate professionals for advice specific to your circumstances.
          </p>
        </div>
      </div>
    </footer>
  );
};
