import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description: "Contact TOFA Group for a free consultation on your Melbourne construction project. Call 1300 000 685 or fill out our form. We respond within 1 business day.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
