import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Building FAQs | Custom Home Builder Melbourne | TOFA Group",
  description: "Answers to common questions about building a custom home in Melbourne. Timelines, costs, knockdown rebuilds, renovations, financing — answered by TOFA Group's expert builders.",
  alternates: { canonical: 'https://www.tofagroup.com.au/faqs' },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of projects does TOFA Group deliver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TOFA Group delivers custom homes, knockdown rebuilds, renovations, extensions, and commercial construction across Melbourne and surrounds."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We service Melbourne and surrounding suburbs including Avondale Heights, Essendon, Moonee Ponds, Keilor, Taylors Lakes and greater Melbourne."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get started with my project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with a free consultation where we discuss your vision, requirements, and budget. We then develop a comprehensive plan, obtain permits, and guide you through every stage of the build."
      }
    },
    {
      "@type": "Question",
      "name": "What is the typical project timeline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timelines vary based on project scope. A typical custom home takes 12–18 months from design to handover. We provide a detailed timeline during your initial consultation."
      }
    },
    {
      "@type": "Question",
      "name": "What is Build Now, Pay Later?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Build Now, Pay Later is a flexible financing solution allowing eligible clients to start construction without a large upfront payment. Terms are tailored to your situation and subject to approval."
      }
    },
    {
      "@type": "Question",
      "name": "How is project quality ensured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every TOFA Group project undergoes strict quality and compliance checks throughout construction, including regular inspections and adherence to all Australian building codes and regulations."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer a warranty on completed homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All projects come with statutory warranty coverage in line with Victorian building regulations. We provide full warranty documentation at handover."
      }
    }
  ]
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
