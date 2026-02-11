'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  CheckCircle,
  Home,
  Building2,
  Paintbrush,
  ShieldCheck,
  Clock,
  DollarSign,
  Phone,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

const whoIsThisFor = [
  {
    icon: <Home className="h-8 w-8" />,
    title: "First Home Builders",
    description: "Get into your new home sooner without waiting years to save the full amount upfront."
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Property Investors",
    description: "Start generating rental returns while managing your construction payments over time."
  },
  {
    icon: <Paintbrush className="h-8 w-8" />,
    title: "Renovators & Extenders",
    description: "Transform your existing property now with flexible payment arrangements."
  }
];

const howItWorks = [
  {
    step: "01",
    title: "Free Consultation",
    description: "We assess your project, discuss your goals, and determine your eligibility for flexible payment options."
  },
  {
    step: "02",
    title: "Tailored Payment Plan",
    description: "We structure a payment plan around your project timeline and financial situation — no cookie-cutter solutions."
  },
  {
    step: "03",
    title: "Build Begins",
    description: "Construction starts on schedule. You pay in stages as milestones are completed, with full transparency at every step."
  }
];

const benefits = [
  { text: "No large upfront lump sum required" },
  { text: "Flexible payment structures tailored to you" },
  { text: "Available for residential & commercial projects" },
  { text: "Same build quality and project oversight" },
  { text: "Progress payments aligned to construction milestones" },
  { text: "Subject to eligibility — we help you through the process" },
];

const faqs = [
  {
    question: "What types of projects are eligible?",
    answer: "Build Now, Pay Later is available for new residential builds, commercial construction, renovations, and extensions across Australia. Projects must meet minimum value requirements."
  },
  {
    question: "How is this different from a standard construction loan?",
    answer: "Unlike traditional construction loans, our flexible payment structures are designed to reduce the upfront financial burden. We work with financing partners to offer tailored solutions that align payments with construction milestones."
  },
  {
    question: "Will this affect the quality of my build?",
    answer: "Absolutely not. Every project receives the same quality oversight, compliance management, and construction standards regardless of the payment method chosen."
  },
  {
    question: "How do I know if I'm eligible?",
    answer: "Eligibility depends on factors including income, credit history, and project scope. The best way to find out is to book a free consultation — we'll assess your situation and guide you through the options."
  },
  {
    question: "Are there any hidden fees?",
    answer: "We believe in full transparency. All fees, terms, and conditions are disclosed upfront before you commit. There are no hidden charges."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-lg font-semibold text-gtb-navy group-hover:text-gtb-aero transition-colors pr-4">
          {question}
        </span>
        <ChevronDown className={`h-5 w-5 text-gtb-aero flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function BuildNowPayLater() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* ===== HERO SECTION — Bold, full-width, HomePay-style ===== */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
              alt="Modern construction project"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gtb-navy/90 via-gtb-navy/75 to-gtb-navy/40" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center bg-gtb-aero/20 border border-gtb-aero/40 px-4 py-2 rounded-full mb-8">
                  <DollarSign className="h-4 w-4 text-gtb-aero mr-2" />
                  <span className="text-sm font-semibold text-white tracking-wide">Flexible Payment Solutions</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                  Build Now,<br />
                  <span className="text-gtb-aero">Pay Later.</span>
                </h1>

                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-xl">
                  Start your construction project today with flexible payment options. No large upfront costs — just quality building, on your terms.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-8 py-4 rounded-lg text-lg font-bold shadow-xl transition-all duration-200 inline-flex items-center justify-center group"
                  >
                    Check Your Eligibility
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="tel:1300000685"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-200 inline-flex items-center justify-center"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    1300 000 685
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== VALUE PROPOSITION STRIP ===== */}
        <section className="bg-gtb-navy py-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-white/20">
              <div className="flex items-center justify-center gap-3 py-2">
                <ShieldCheck className="h-6 w-6 text-gtb-aero" />
                <span className="text-white font-medium">Same Quality Guaranteed</span>
              </div>
              <div className="flex items-center justify-center gap-3 py-2">
                <Clock className="h-6 w-6 text-gtb-aero" />
                <span className="text-white font-medium">Start Building Sooner</span>
              </div>
              <div className="flex items-center justify-center gap-3 py-2">
                <DollarSign className="h-6 w-6 text-gtb-aero" />
                <span className="text-white font-medium">Flexible Payment Plans</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHO IS THIS FOR? ===== */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-bold text-gtb-aero tracking-wider uppercase mb-4 block">Who Is This For?</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-6">
                Built for People Ready to Build
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Whether you&apos;re building your first home, investing, or renovating — flexible payments make it possible.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {whoIsThisFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gray-50 hover:bg-white rounded-2xl p-8 border border-gray-100 hover:border-gtb-aero/30 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-gtb-aero/10 rounded-2xl flex items-center justify-center text-gtb-aero mb-6 group-hover:bg-gtb-aero group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gtb-navy mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS — 3 Steps ===== */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-bold text-gtb-aero tracking-wider uppercase mb-4 block">Simple Process</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gtb-navy mb-6">
                Three Steps to Get Started
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We&apos;ve made it straightforward so you can focus on what matters — your project.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-gtb-aero/20 via-gtb-aero to-gtb-aero/20" />

              {howItWorks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  {/* Step number */}
                  <div className="relative z-10 w-16 h-16 bg-white border-4 border-gtb-aero rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <span className="text-2xl font-bold text-gtb-navy">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gtb-navy mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BENEFITS — Split Layout ===== */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left — Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                    alt="Completed TOFA Group residential project"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating stats card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                  <div className="text-3xl font-bold text-gtb-aero">100+</div>
                  <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
                </div>
              </motion.div>

              {/* Right — Benefits list */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-bold text-gtb-aero tracking-wider uppercase mb-4 block">Why Choose This Option?</span>
                <h2 className="text-4xl font-bold text-gtb-navy mb-8">
                  Financial flexibility without compromising quality
                </h2>
                
                <div className="space-y-5">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gtb-aero/10 flex items-center justify-center mt-0.5">
                        <CheckCircle className="h-4 w-4 text-gtb-aero" />
                      </div>
                      <span className="text-gray-700 text-lg">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg transition-all duration-200 inline-flex items-center group"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== FAQs — Accordion Style ===== */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-bold text-gtb-aero tracking-wider uppercase mb-4 block">Got Questions?</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gtb-navy">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
            >
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="relative py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
              alt="Modern building"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gtb-navy/80" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                Ready to Start Your Build?
              </h2>
              <p className="text-xl text-white mb-10 max-w-2xl mx-auto drop-shadow-md">
                Book a free consultation to find out if Build Now, Pay Later is right for your project. No obligation, no pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-all duration-200 inline-flex items-center justify-center group"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="tel:1300000685"
                  className="bg-white text-gtb-navy hover:bg-gray-100 px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-all duration-200 inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1300 000 685
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== DISCLAIMER ===== */}
        <section className="py-8 bg-gray-100 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500 leading-relaxed">
              <strong>Disclaimer:</strong> Build Now, Pay Later financing is subject to eligibility criteria and approval. Terms, conditions, fees, and interest rates apply. This information is general in nature and does not constitute financial advice. TOFA Group recommends consulting with a financial advisor to determine suitability for your circumstances.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
