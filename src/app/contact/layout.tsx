import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact TOFA Group | Free Consultation | Melbourne Home Builder",
  description: "Book a free, no-obligation consultation with TOFA Group — Melbourne's trusted custom home builder. Call 1300 000 685 or enquire online. Servicing Avondale Heights, Essendon, Keilor, Moonee Ponds & surrounds.",
  alternates: { canonical: 'https://tofagroup.com.au/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
