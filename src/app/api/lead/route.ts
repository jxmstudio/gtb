import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const ContactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  enquiryType: z.string().min(1),
  message: z.string().min(1),
  newsletter: z.boolean(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = ContactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('GOOGLE_SHEETS_WEBHOOK_URL is not set');
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      redirect: 'follow',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ timestamp: new Date().toISOString(), ...parsed.data }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Google Sheets webhook failed', res.status, text);
      return NextResponse.json({ error: 'Failed to save submission' }, { status: 502 });
    }
  } catch (err) {
    console.error('Google Sheets fetch error', err);
    return NextResponse.json({ error: 'Failed to reach webhook' }, { status: 502 });
  }

  // Send email notification — fire-and-forget (never blocks the success response)
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { firstName, lastName, email, phone, enquiryType, message, newsletter } = parsed.data;
    resend.emails.send({
      from: 'TOFA Group Leads <onboarding@resend.dev>',
      to: 'info@tofagroup.com.au',
      subject: `New Lead: ${firstName} ${lastName} — ${enquiryType}`,
      text: [
        'New contact form submission on TOFA Group website.',
        '',
        `Name:          ${firstName} ${lastName}`,
        `Email:         ${email}`,
        `Phone:         ${phone}`,
        `Enquiry Type:  ${enquiryType}`,
        `Newsletter:    ${newsletter ? 'Yes' : 'No'}`,
        '',
        'Message:',
        message,
        '',
        'View all leads: https://docs.google.com/spreadsheets/d/1fPkxu2Qz26sRCpGpiPqYej0aiui-gkkICNQjNd4hGgg/edit',
      ].join('\n'),
    }).catch(err => console.error('Resend error', err));
  }

  return NextResponse.json({ success: true });
}
