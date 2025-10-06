import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const LeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  suburb: z.string().min(2),
  budget: z.string().min(1),
  timeline: z.string().min(1),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const parsed = LeadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsed.error.errors },
        { status: 400 }
      );
    }

    const { name, email, suburb, budget, timeline } = parsed.data;

    // Here you would typically:
    // 1. Save to your database
    // 2. Send to your CRM (HubSpot, Salesforce, etc.)
    // 3. Send email notifications
    // 4. Add to your email marketing platform

    // For now, we'll just log the lead data
    console.log('New lead received:', {
      name,
      email,
      suburb,
      budget,
      timeline,
      timestamp: new Date().toISOString(),
      source: 'hero_form',
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real implementation, you might want to:
    // - Send a confirmation email to the user
    // - Notify your sales team
    // - Add to your CRM system
    // - Track in your analytics

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead captured successfully',
        leadId: `lead_${Date.now()}` // Generate a temporary ID
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
