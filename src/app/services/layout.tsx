import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Services Melbourne",
  description: "TOFA Group offers Build Now Pay Later, Super/KiwiSaver rollover guidance, construction finance, residential builds, knockdown rebuilds, renovations, and design & build across Melbourne's northwest. Fully insured, working with licensed builders.",
  alternates: { canonical: 'https://www.tofagroup.com.au/services' },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
