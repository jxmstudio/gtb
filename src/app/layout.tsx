import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor"],
  "@id": "https://www.tofagroup.com.au/#business",
  "name": "TOFA Group",
  "description": "Licensed residential and commercial builder serving Melbourne & surrounds, specialising in custom homes, knockdown rebuilds, renovations, and commercial construction.",
  "url": "https://www.tofagroup.com.au",
  "telephone": "+611300000685",
  "email": "info@tofagroup.com.au",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "PO BOX 256",
    "addressLocality": "Avondale Heights",
    "addressRegion": "VIC",
    "postalCode": "3034",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -37.7478,
    "longitude": 144.8642
  },
  "areaServed": [
    { "@type": "City", "name": "Melbourne" },
    { "@type": "Suburb", "name": "Avondale Heights" },
    { "@type": "Suburb", "name": "Essendon" },
    { "@type": "Suburb", "name": "Moonee Ponds" },
    { "@type": "Suburb", "name": "Keilor" },
    { "@type": "Suburb", "name": "Taylors Lakes" },
    { "@type": "Suburb", "name": "Aberfeldie" },
    { "@type": "Suburb", "name": "Airport West" }
  ],
  "priceRange": "$$$$",
  "openingHours": "Mo-Fr 09:00-18:00",
  "sameAs": [
    "https://www.facebook.com/groups/1680469966691932/",
    "https://www.instagram.com/thetofagroup/"
  ]
};

export const metadata: Metadata = {
  title: {
    default: "TOFA Group | Custom Home Builder Melbourne",
    template: "%s | TOFA Group"
  },
  description: "Melbourne's trusted custom home builder. 500+ projects delivered across Avondale Heights, Essendon, Keilor & surrounds. Licensed & insured.",
  keywords: [
    "custom home builder Melbourne",
    "luxury home builder Melbourne",
    "home builder Melbourne",
    "builder Keilor",
    "builder Avondale Heights",
    "builder Essendon",
    "knockdown rebuild Melbourne",
    "renovation builder Melbourne",
    "residential builder Melbourne",
    "commercial builder Melbourne"
  ],
  openGraph: {
    siteName: "TOFA Group",
    locale: "en_AU",
    type: "website",
    title: "TOFA Group | Melbourne's Trusted Custom Home Builder",
    description: "500+ projects delivered across Melbourne. Custom homes, knockdown rebuilds, renovations & commercial construction. Licensed & insured.",
    url: "https://www.tofagroup.com.au",
    images: [
      {
        url: "https://www.tofagroup.com.au/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TOFA Group — Melbourne's Trusted Custom Home Builder",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOFA Group | Melbourne's Trusted Custom Home Builder",
    description: "500+ projects delivered across Melbourne. Custom homes, knockdown rebuilds, renovations & commercial construction. Licensed & insured.",
    images: ["https://www.tofagroup.com.au/og-image.jpg"],
  },
  alternates: {
    canonical: 'https://www.tofagroup.com.au',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "3U71Ho8B_EPa2tnCexDgigGTPYSDldHlyOqKLiZhciI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
