import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact TOFA Group | Free Quote · Melbourne Home Builder",
  description: "Talk to Melbourne's luxury custom home builder. Free 30-min consultation, fixed-price quote in 7 days. Call 1300 000 685 or enquire online.",
  alternates: { canonical: 'https://www.tofagroup.com.au/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
