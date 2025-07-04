import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Project Juice",
  description: "VAPE OILS",
  openGraph: {
    title: "Project Juice",
    description: "High-quality vape oils for enthusiasts.",
    url: "https://project-juice.com",
    siteName: "Project Juice",
    images: [
      {
        url: "https://www.projectjuice.pl/_next/image?url=%2Fassets%2Fphoto.png&w=640&q=100", // Podmień na swój realny link do grafiki
        alt: "Project Juice - Vape Oils",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@projectjuice", // Podmień na realne konto Twitter, jeśli masz
    images: ["https://www.projectjuice.pl/_next/image?url=%2Fassets%2Fphoto.png&w=640&q=100g"], // Taki sam obraz jak w Open Graph
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <SpeedInsights />
      </body>
    </html>
  );
}
