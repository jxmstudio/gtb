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
  "foundingDate": "2010",
  "image": [
    "https://www.tofagroup.com.au/tofaphotos/Verv_PROJECTS_Terano.jpg",
    "https://www.tofagroup.com.au/tofaphotos/Verv_PROJECTS_Acacia.jpg",
    "https://www.tofagroup.com.au/tofaphotos/Verv_PROJECTS_Clara.jpg"
  ],
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.tofagroup.com.au/TofaGroup_Logo_Green_Web_1920px.png",
    "width": 1920,
    "height": 640
  },
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
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "TOFA Group Construction Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Construction",
          "description": "Custom home construction across Melbourne — single and double-storey new builds delivered to client brief.",
          "url": "https://www.tofagroup.com.au/services/residential-construction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Construction",
          "description": "Office, retail, industrial, medical, and mixed-use commercial builds and fit-outs across Melbourne.",
          "url": "https://www.tofagroup.com.au/services/commercial-construction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Knockdown Rebuild",
          "description": "End-to-end knockdown rebuild service — demolition permits, design, and construction of a brand-new home on your existing block.",
          "url": "https://www.tofagroup.com.au/services/knockdown-rebuild"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Renovations & Extensions",
          "description": "Home renovations, extensions, and second-storey additions across Melbourne's northwest.",
          "url": "https://www.tofagroup.com.au/services/renovations-extensions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Design & Build",
          "description": "Integrated design and construction under one contract — single point of accountability from concept to handover.",
          "url": "https://www.tofagroup.com.au/services/design-and-build"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Project Management",
          "description": "Independent construction project management and owner-builder support services across Melbourne.",
          "url": "https://www.tofagroup.com.au/services/project-management"
        }
      }
    ]
  },
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
