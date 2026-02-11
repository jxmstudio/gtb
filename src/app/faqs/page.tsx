"use client";

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RevealOnScroll, StaggerReveal } from '@/components/motion/Reveals';
import { MotionDiv, staggerItem } from '@/components/motion/MotionPrimitives';
import Link from 'next/link';
import { 
  ChevronDown,
  ChevronUp,
  ArrowRight,
  MessageCircle,
  Phone
} from 'lucide-react';

const faqCategories = [
  {
    category: "Getting Started",
    faqs: [
      {
        question: "What types of projects does TOFA Group deliver?",
        answer: "TOFA Group delivers residential and commercial construction projects across Australia. This includes single-family homes, multi-unit residential developments, commercial fit-outs, office buildings, and industrial projects."
      },
      {
        question: "What areas do you service?",
        answer: "We deliver projects Australia-wide. Our proven systems and strong network enable us to maintain consistent quality and project oversight across multiple locations throughout Australia."
      },
      {
        question: "How do I get started with my project?",
        answer: "Start with a free consultation where we'll discuss your vision, requirements, and budget. From there, we'll develop a comprehensive plan, obtain necessary permits, and guide you through each stage of the construction process."
      },
      {
        question: "What is the typical project timeline?",
        answer: "Timelines vary based on project scope and complexity. During your initial consultation, we'll provide a detailed timeline specific to your project. We manage schedules closely to ensure on-time delivery."
      }
    ]
  },
  {
    category: "Construction Process",
    faqs: [
      {
        question: "What level of oversight does TOFA Group provide?",
        answer: "We provide end-to-end project management and oversight throughout the entire construction lifecycle. This includes quality assurance, compliance management, timeline tracking, and regular communication with our clients."
      },
      {
        question: "How is project quality ensured?",
        answer: "Every project undergoes strict quality and compliance checks throughout construction. We maintain high standards through regular inspections, documentation, and adherence to Australian building codes and regulations."
      },
      {
        question: "Will I receive regular updates on my project?",
        answer: "Yes. Transparent communication is a core part of our service. You'll receive regular updates on project progress, milestones, and any relevant developments throughout your build."
      },
      {
        question: "What happens if there are delays or issues?",
        answer: "We proactively manage risks and timelines to minimize delays. If issues arise, we communicate immediately and work to resolve them efficiently while keeping your project on track."
      }
    ]
  },
  {
    category: "Financing Options",
    faqs: [
      {
        question: "What is Build Now, Pay Later?",
        answer: "Build Now, Pay Later is a flexible financing solution allowing eligible clients to commence construction without a large upfront payment. Payments are structured over time with terms tailored to your situation."
      },
      {
        question: "Who is eligible for Build Now, Pay Later?",
        answer: "Eligibility is subject to income verification, credit assessment, and meeting our financing partners' criteria. Requirements typically include Australian residency, stable employment, good credit history, and meeting minimum project values."
      },
      {
        question: "Does financing affect project quality?",
        answer: "No. All projects receive the same quality oversight, compliance management, and construction standards regardless of financing method. Build quality is never compromised."
      },
      {
        question: "Are there other financing options available?",
        answer: "Yes. We can discuss various financing approaches during your consultation and help you identify options that suit your circumstances and project requirements."
      }
    ]
  },
  {
    category: "Project Management",
    faqs: [
      {
        question: "What is included in project management?",
        answer: "Our project management includes planning coordination, permit acquisition, construction scheduling, quality oversight, compliance management, budget tracking, and stakeholder communication throughout the project lifecycle."
      },
      {
        question: "Can I make changes during construction?",
        answer: "Changes can typically be accommodated depending on the stage of construction. We'll assess the impact on timeline and budget, and work with you to implement approved changes efficiently."
      },
      {
        question: "What warranties or guarantees are provided?",
        answer: "Projects are delivered with appropriate building warranties as required by Australian law. Specific warranty details are provided during contract discussions and vary by project type and scope."
      },
      {
        question: "How are costs controlled during the project?",
        answer: "We provide detailed budget estimates upfront and track costs throughout construction. Regular reporting ensures transparency, and any significant variations are communicated immediately for approval."
      }
    ]
  },
  {
    category: "After Completion",
    faqs: [
      {
        question: "What happens at project handover?",
        answer: "At completion, we conduct final inspections, address any outstanding items, provide all necessary documentation, and formally hand over your completed project. We ensure everything meets our quality standards before handover."
      },
      {
        question: "Is there support after completion?",
        answer: "Yes. We provide support after completion for any questions or concerns. Warranty provisions cover defects, and we're available to address any post-completion matters."
      },
      {
        question: "Can TOFA Group help with future projects?",
        answer: "Absolutely. Many clients return to us for additional projects. We'd be happy to discuss future residential or commercial construction needs as they arise."
      }
    ]
  }
];

export default function FAQs() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gtb-navy mb-6">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Find answers to common questions about working with TOFA Group on your construction project
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <RevealOnScroll>
                    <h2 className="text-2xl font-bold text-gtb-navy mb-6">
                      {category.category}
                    </h2>
                  </RevealOnScroll>

                  <StaggerReveal>
                    <div className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => {
                        const itemId = `${categoryIndex}-${faqIndex}`;
                        const isOpen = openItems.includes(itemId);

                        return (
                          <MotionDiv key={faqIndex} variants={staggerItem}>
                            <Card 
                              className="cursor-pointer hover:shadow-md transition-shadow"
                              onClick={() => toggleItem(itemId)}
                            >
                              <CardHeader>
                                <div className="flex justify-between items-start">
                                  <CardTitle className="text-lg pr-8">
                                    {faq.question}
                                  </CardTitle>
                                  <button 
                                    className="flex-shrink-0 text-gtb-aero hover:text-gtb-navy transition-colors"
                                    aria-label={isOpen ? "Collapse answer" : "Expand answer"}
                                  >
                                    {isOpen ? (
                                      <ChevronUp className="h-6 w-6" />
                                    ) : (
                                      <ChevronDown className="h-6 w-6" />
                                    )}
                                  </button>
                                </div>
                              </CardHeader>
                              {isOpen && (
                                <CardContent>
                                  <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </CardContent>
                              )}
                            </Card>
                          </MotionDiv>
                        );
                      })}
                    </div>
                  </StaggerReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <Card className="bg-gradient-to-br from-gtb-navy to-gtb-navy/90 text-white p-8 md:p-12">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                  <p className="text-xl mb-8 text-white/90">
                    Our team is here to help. Contact TOFA Group to discuss your project or get answers to any questions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/contact" 
                      className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg transition-colors inline-flex items-center justify-center"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Contact Us
                    </Link>
                    <Link 
                      href="/services"
                      className="bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-gtb-navy px-8 py-4 rounded-lg text-lg font-bold shadow-lg transition-all inline-flex items-center justify-center"
                    >
                      View Our Services
                    </Link>
                  </div>
                </div>
              </Card>
            </RevealOnScroll>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gtb-navy to-gtb-navy-light text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-10 text-white max-w-2xl mx-auto">
              Contact TOFA Group today for a consultation on your residential or commercial construction needs
            </p>
            <Link
              href="/contact"
              className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-colors inline-flex items-center justify-center group"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

