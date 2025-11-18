import "./globals.css";

export const metadata = {
  title: "George The Broker - TofaGroup | Wholesale Building Connector",
  description: "Take the guesswork out of building your first home. Partnered with Australia's largest builders in Western suburbs Melbourne.",
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
