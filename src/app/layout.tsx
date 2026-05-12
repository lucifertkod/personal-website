import type { Metadata } from "next";
import { Cormorant_Garamond, Syne, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArcleIntelligence | Editorial Edition",
  description: "Avoid all technical complexity. Run the world's most powerful, offline, on-device, privacy-focused, state-of-the-art AI assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${syne.variable} ${ibmMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}