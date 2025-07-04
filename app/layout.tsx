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
    url: "https://www.projectjuice.pl",
    siteName: "Project Juice",
    images: [
      {
        url: "https://www.projectjuice.pl/assets/photo.png",
        alt: "Project Juice - Vape Oils",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@projectjuice",
    images: ["https://www.projectjuice.pl/assets/photo.png"],
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
