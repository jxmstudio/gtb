import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Services Melbourne",
  description: "TOFA Group offers residential construction, commercial builds, knockdown rebuilds, renovations, design & build, and project management across Melbourne's northwest. Licensed and insured.",
  alternates: { canonical: 'https://www.tofagroup.com.au/services' },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
