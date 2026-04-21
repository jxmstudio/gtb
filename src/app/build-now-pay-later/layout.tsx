import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Build Now Pay Later Melbourne | Flexible Home Building Finance | TOFA Group",
  description: "Build your Melbourne home now and pay later with TOFA Group's flexible finance partners. Start construction without a large upfront deposit — talk to our team today.",
  alternates: { canonical: 'https://www.tofagroup.com.au/build-now-pay-later' },
};

export default function BuildNowPayLaterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
