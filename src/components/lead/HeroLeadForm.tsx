"use client";

import { z } from "zod";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useAnalytics } from "@/lib/analytics";
import { motion } from "framer-motion";

const LeadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  suburb: z.string().min(2, "Please enter your suburb or postcode"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
});

type LeadFormData = z.infer<typeof LeadSchema>;

export default function HeroLeadForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<LeadFormData>>({});
  const analytics = useAnalytics();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    
    const fd = new FormData(e.currentTarget);
    const data: LeadFormData = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      suburb: String(fd.get("suburb") || ""),
      budget: String(fd.get("budget") || ""),
      timeline: String(fd.get("timeline") || ""),
    };

    const parsed = LeadSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Partial<LeadFormData> = {};
      parsed.error.issues.forEach((error) => {
        const field = error.path[0] as keyof LeadFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      // Track successful lead generation
      analytics.trackLeadGenerated("hero_form", parsed.data.budget);
      analytics.trackFormSubmit("hero_lead_form", true);

      // Reset form
      (e.target as HTMLFormElement).reset();
      
      // Show success message (you could replace this with a toast)
      alert("Thanks! We'll be in touch within 24 hours to discuss your building project.");
      
    } catch {
      analytics.trackFormSubmit("hero_lead_form", false);
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full max-w-4xl mx-auto"
    >
      <form onSubmit={onSubmit} className="grid gap-3 md:grid-cols-5 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
        <div className="md:col-span-1">
          <Input
            name="name"
            placeholder="Full name"
            className={`w-full ${errors.name ? 'border-red-500' : ''}`}
            required
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        
        <div className="md:col-span-1">
          <Input
            name="email"
            placeholder="Email address"
            type="email"
            className={`w-full ${errors.email ? 'border-red-500' : ''}`}
            required
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        
        <div className="md:col-span-1">
          <Input
            name="suburb"
            placeholder="Suburb / Postcode"
            className={`w-full ${errors.suburb ? 'border-red-500' : ''}`}
            required
          />
          {errors.suburb && <p className="text-red-500 text-xs mt-1">{errors.suburb}</p>}
        </div>
        
        <div className="md:col-span-1">
          <Select name="budget" required>
            <SelectTrigger className={errors.budget ? 'border-red-500' : ''}>
              <SelectValue placeholder="Budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="400-600k">$400k–$600k</SelectItem>
              <SelectItem value="600-800k">$600k–$800k</SelectItem>
              <SelectItem value="800-1m">$800k–$1M</SelectItem>
              <SelectItem value="1m-1.5m">$1M–$1.5M</SelectItem>
              <SelectItem value="1.5m+">$1.5M+</SelectItem>
            </SelectContent>
          </Select>
          {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
        </div>
        
        <div className="md:col-span-1">
          <Select name="timeline" required>
            <SelectTrigger className={errors.timeline ? 'border-red-500' : ''}>
              <SelectValue placeholder="Timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-3m">0–3 months</SelectItem>
              <SelectItem value="3-6m">3–6 months</SelectItem>
              <SelectItem value="6-12m">6–12 months</SelectItem>
              <SelectItem value="12m+">12+ months</SelectItem>
            </SelectContent>
          </Select>
          {errors.timeline && <p className="text-red-500 text-xs mt-1">{errors.timeline}</p>}
        </div>
        
        <Button 
          type="submit" 
          disabled={loading} 
          className="md:col-span-5 bg-gtb-aero hover:bg-gtb-aero-light text-white font-semibold py-3"
          onClick={() => analytics.trackButtonClick("Find Your Builder", "hero_form")}
        >
          {loading ? "Finding Your Builder..." : "Find Your Builder"}
        </Button>
        
        <p className="text-xs text-gray-600 md:col-span-5 text-center">
          No obligation consultation. We&apos;ll only contact you about your enquiry.
        </p>
      </form>
    </motion.div>
  );
}
