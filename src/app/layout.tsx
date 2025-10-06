import type { Metadata } from "next";
import { Montserrat, Arsenal } from "next/font/google";
import { MotionConfig } from "framer-motion";
import PageTransition from "@/components/motion/PageTransition";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const arsenal = Arsenal({
  variable: "--font-arsenal",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "George The Broker - TofaGroup | Wholesale Building Connector",
  description: "Take the guesswork out of building your first home. Partnered with Australia's largest builders in Western suburbs Melbourne.",
  keywords: "first home buyer Melbourne, turnkey homes, cheap turnkey, Western suburbs Melbourne, building consultant, TofaGroup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${arsenal.variable} antialiased`}
      >
        <MotionConfig reducedMotion="user">
          <PageTransition>
            <div className="pt-16">
              {children}
            </div>
          </PageTransition>
        </MotionConfig>
      </body>
    </html>
  );
}
