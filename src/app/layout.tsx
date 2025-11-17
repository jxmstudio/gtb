import { MotionConfig } from "framer-motion";
import PageTransition from "@/components/motion/PageTransition";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
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
