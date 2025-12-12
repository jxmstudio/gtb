import "./globals.css";

export const metadata = {
  title: "TOFA Group | Residential & Commercial Construction Australia",
  description: "TOFA Group delivers high-quality residential and commercial construction projects across Australia. From planning to completion, we manage every stage of the build to ensure quality, transparency, and on-time delivery.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
