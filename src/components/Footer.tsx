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
    <footer className="bg-gradient-to-br from-gtb-navy via-gtb-navy to-gtb-navy-light text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 blueprint-grid"></div>
      </div>
      
      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(107, 142, 35, 0.1), transparent)",
            "radial-gradient(circle at 80% 80%, rgba(107, 142, 35, 0.15), transparent)",
            "radial-gradient(circle at 20% 80%, rgba(107, 142, 35, 0.1), transparent)",
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Logo size="lg" variant="inverted" />
            </motion.div>
            <p className="text-gray-300 text-sm leading-relaxed">
              TOFA Group delivers high-quality residential and commercial construction projects across Australia.
            </p>
            <motion.p 
              className="text-gtb-aero text-sm font-semibold flex items-center gap-2"
              animate={{ 
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity
              }}
            >
              <span className="w-2 h-2 bg-gtb-aero rounded-full animate-pulse"></span>
              Delivering projects Australia-wide
            </motion.p>
            <div className="space-y-2">
              <motion.div 
                className="flex items-center space-x-2 text-sm text-gray-300 group"
                whileHover={{ x: 4, color: "#ffffff" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="h-4 w-4 flex-shrink-0 text-gtb-aero" />
                <span>Australia-wide</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-sm text-gray-300 group"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-gtb-aero" />
                <a href="tel:+61300000000" className="hover:text-white transition-colors duration-200">
                  +61 3 0000 0000
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-sm text-gray-300 group"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-gtb-aero" />
                <a href="mailto:contact@tofagroup.com.au" className="hover:text-white transition-colors duration-200">
                  contact@tofagroup.com.au
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gtb-aero text-sm transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-gtb-aero transition-colors duration-200"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gtb-aero text-sm transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-gtb-aero transition-colors duration-200"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gtb-aero text-sm transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-gtb-aero transition-colors duration-200"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gtb-aero text-sm transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-gtb-aero transition-colors duration-200"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div 
          className="mt-12 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <motion.a
                href="#"
                className="text-gray-300 hover:text-gtb-aero transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                aria-label="Facebook"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300 hover:text-gtb-aero transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                aria-label="Instagram"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300 hover:text-gtb-aero transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
            <div className="text-sm text-gray-300 text-center">
              <p className="font-medium">
                &copy; {new Date().getFullYear()} TOFA Group. All rights reserved.
              </p>
              <p className="mt-1 text-gray-400">
                ABN: XX XXX XXX XXX
              </p>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-400 leading-relaxed text-center max-w-4xl mx-auto">
            <strong>Disclaimer:</strong> All projects are subject to contract and are delivered in accordance with Australian building standards and regulations. Information provided is general in nature and should not be considered financial or legal advice. TOFA Group recommends consulting with appropriate professionals for advice specific to your circumstances.
          </p>
        </div>
      </div>
    </footer>
  );
};
