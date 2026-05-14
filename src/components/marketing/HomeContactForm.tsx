'use client';

import { useState, type FormEvent } from 'react';
import { Send, CheckCircle, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { analytics } from '@/lib/analytics';

/**
 * HomeContactForm — inline enquiry form for the homepage. Posts to the
 * same /api/lead endpoint as the dedicated /contact page form (which in
 * turn writes to GOOGLE_SHEETS_WEBHOOK_URL — no separate backend needed).
 *
 * The brief specified a single "Name" field; the API schema still
 * requires firstName + lastName, so we split the input on the first
 * space at submit time. Single-word names fall back to using the same
 * value for both halves so validation passes without surfacing a
 * cryptic error to the user.
 */

const enquiryTypes = [
  'First Home Buyer - New Build',
  'First Home Buyer - Investment',
  'Investment Property - Turnkey',
  'Investment Property - Custom Build',
  'Knockdown Rebuild',
  'Renovation or Extension',
  'Commercial Build',
  'Finance Assistance',
  'General Inquiry',
];

function splitName(full: string): { firstName: string; lastName: string } {
  const trimmed = full.trim();
  const idx = trimmed.indexOf(' ');
  if (idx === -1) return { firstName: trimmed, lastName: trimmed };
  return {
    firstName: trimmed.slice(0, idx),
    lastName: trimmed.slice(idx + 1).trim() || trimmed,
  };
}

export function HomeContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const { firstName, lastName } = splitName(name);

    try {
      // TODO: GOOGLE_SHEETS_WEBHOOK_URL must be set in Vercel env vars
      // for the lead to reach the TOFA Group sheet — see /api/lead.
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          enquiryType,
          message,
          newsletter: false,
        }),
      });

      if (!res.ok) throw new Error('Submission failed');

      analytics.trackLeadGenerated('home_contact_form');
      analytics.trackFormSubmit('home_contact_form', true);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setEmail('');
        setPhone('');
        setEnquiryType('');
        setMessage('');
      }, 5000);
    } catch {
      analytics.trackFormSubmit('home_contact_form', false);
      setError("Something went wrong. Please try again or call us on 1300 000 685.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs font-bold text-gtb-aero mb-3 tracking-widest uppercase">
            Get in Touch
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gtb-navy leading-tight font-brand mb-4">
            Send us a message
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 lg:p-10">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-gtb-aero mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gtb-navy mb-2">Message sent.</h3>
              <p className="text-gray-600">
                Thanks — we&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="home-enquiry-type">Select your enquiry type *</Label>
                <Select value={enquiryType} onValueChange={setEnquiryType}>
                  <SelectTrigger className="mt-1" id="home-enquiry-type">
                    <SelectValue placeholder="Select your enquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    {enquiryTypes.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="home-name">Name *</Label>
                <Input
                  id="home-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="home-email">Email *</Label>
                  <Input
                    id="home-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="home-phone">Phone *</Label>
                  <Input
                    id="home-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="04XX XXX XXX"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="home-message">Message *</Label>
                <Textarea
                  id="home-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Tell us about your project, budget, timeline, or any specific requirements..."
                  required
                  className="mt-1"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 -mt-2" role="alert">{error}</p>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting || !enquiryType}
                  className="inline-flex items-center justify-center bg-gtb-aero hover:bg-gtb-aero-light disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold px-7 py-3.5 rounded-lg transition-colors flex-1 sm:flex-none"
                >
                  {submitting ? 'Sending…' : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
                <a
                  href="tel:1300000685"
                  className="inline-flex items-center justify-center border border-gtb-navy text-gtb-navy hover:bg-gtb-navy hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  1300 000 685
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
