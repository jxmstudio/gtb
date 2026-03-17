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

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(parsed.data),
  });

  if (!res.ok) {
    console.error('Google Sheets webhook failed', await res.text());
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
