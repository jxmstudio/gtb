'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { RevealOnScroll } from '@/components/motion/Reveals';
import { MotionH2, MotionP } from '@/components/motion/MotionPrimitives';
import Testimonials from '@/components/marketing/Testimonials';
import PartnerLogos from '@/components/marketing/PartnerLogos';
import { AnimatedButton } from '@/components/motion/AnimatedButton';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle,
  Send,
  Calendar,
  MessageCircle
} from 'lucide-react';

const enquiryTypes = [
  'First Home Buyer - New Build',
  'First Home Buyer - Investment',
  'Investment Property - Turnkey',
  'Investment Property - Custom Build',
  'KiwiSaver Rollover',
  'Finance Assistance',
  'General Inquiry',
  'Other'
];

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6 text-gtb-aero" />,
    title: "Phone",
    details: "1300 000 685",
    description: "Call us for immediate assistance"
  },
  {
    icon: <Mail className="h-6 w-6 text-gtb-aero" />,
    title: "Email", 
    details: "info@tofagroup.com.au",
    description: "Send us your questions anytime"
  },
  {
    icon: <MapPin className="h-6 w-6 text-gtb-aero" />,
    title: "Office",
    details: "PO BOX 256, Avondale Heights, VIC 3034",
    description: "Delivering projects Australia-wide"
  },
  {
    icon: <Clock className="h-6 w-6 text-gtb-aero" />,
    title: "Business Hours",
    details: "Mon-Fri: 9AM-6PM",
    description: "Weekend appointments available"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        enquiryType: '',
        message: '',
        newsletter: false
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center max-w-4xl mx-auto">
                <MotionH2 className="text-4xl lg:text-6xl font-bold text-gtb-navy mb-6">
                  Get In Touch
                </MotionH2>
                <MotionP className="text-xl text-gray-600 mb-8">
                  Ready to start your building journey? Book a free consultation or get in touch with any questions.
                </MotionP>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <PartnerLogos />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gtb-navy">Send us a message</CardTitle>
                          <CardDescription>
                            {"Fill out the form below and we'll get back to you within 24 hours."}
                          </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-gtb-aero mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gtb-navy mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for your inquiry. We&apos;ll be in touch soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="enquiryType">Enquiry Type *</Label>
                        <Select
                          value={formData.enquiryType}
                          onValueChange={(value) => handleInputChange('enquiryType', value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your enquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {enquiryTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          required
                          rows={4}
                          className="mt-1"
                          placeholder="Tell us about your project, budget, timeline, or any specific requirements..."
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="newsletter"
                          checked={formData.newsletter}
                          onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                          className="rounded border-gray-300 text-gtb-aero focus:ring-gtb-aero"
                        />
                        <Label htmlFor="newsletter" className="text-sm text-gray-600">
                          Subscribe to our newsletter for updates on new packages and market insights
                        </Label>
                      </div>

                      <AnimatedButton
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gtb-aero hover:bg-gtb-aero-light text-white"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </AnimatedButton>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gtb-navy">Contact Information</CardTitle>
                  <CardDescription>
                    Multiple ways to get in touch with our team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gtb-aero/10 p-2 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gtb-navy">{info.title}</h3>
                        <p className="text-lg text-gray-700">{info.details}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gtb-navy">Quick Actions</CardTitle>
                  <CardDescription>
                    Get started with these popular options.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <AnimatedButton asChild className="w-full bg-gtb-navy hover:bg-gtb-navy-light text-white">
                    <a href="tel:1300000685">
                      <Phone className="mr-2 h-4 w-4" />
                      Call 1300 000 685
                    </a>
                  </AnimatedButton>
                  <AnimatedButton asChild variant="outline" className="w-full border-gtb-aero text-gtb-aero hover:bg-gtb-aero hover:text-white">
                    <a href="mailto:info@tofagroup.com.au">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </AnimatedButton>
                  <AnimatedButton asChild variant="outline" className="w-full border-gtb-navy text-gtb-navy hover:bg-gtb-navy hover:text-white">
                    <a href="/services">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      View Services
                    </a>
                  </AnimatedButton>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-gtb-aero/5 border-gtb-aero/20">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-gtb-aero mx-auto mb-2" />
                    <h3 className="font-semibold text-gtb-navy mb-1">Quick Response</h3>
                    <p className="text-sm text-gray-600">
                      We typically respond to all inquiries within 2-4 hours during business hours.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gtb-navy to-gtb-navy-light text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Start Building?
            </h2>
            <p className="text-xl mb-10 text-white max-w-2xl mx-auto">
              Book a free consultation to discuss your project and discover how we can help you save time and money
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services"
                className="bg-gtb-aero hover:bg-gtb-aero-light text-white px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-colors inline-flex items-center justify-center group"
              >
                View Our Services
              </Link>
              <Link 
                href="/projects"
                className="bg-white text-gtb-navy hover:bg-gray-100 px-10 py-5 rounded-lg text-lg font-bold shadow-xl transition-colors inline-flex items-center justify-center"
              >
                View Our Projects
              </Link>
              </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
