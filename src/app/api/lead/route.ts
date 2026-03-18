import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

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
      redirect: 'follow', // Google Apps Script returns a 302 — follow it
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(), // Apps Script expects this field
        ...parsed.data,
      }),
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

  return NextResponse.json({ success: true });
}
