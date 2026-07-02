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
  metadataBase: new URL('https://arcleintelligence-six.vercel.app'),
  title: "ArcleIntelligence | Editorial Edition",
  description: "Avoid all technical complexity. Run the world's most powerful, offline, on-device, privacy-focused, state-of-the-art AI assistant.",
  openGraph: {
    type: 'website',
    siteName: 'ArcleIntelligence',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${syne.variable} ${ibmMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        {/* TODO: Confirm foundingDate "2026" matches your AWS Activate application exactly */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ArcleIntelligence",
              "url": "https://arcleintelligence-six.vercel.app",
              "logo": "https://arcleintelligence-six.vercel.app/logos/arc-intelligence.png",
              "description": "Fully offline, on-device, privacy-first AI assistant. No cloud dependency, no data leaving your device.",
              "founder": {
                "@type": "Person",
                "name": "Abhinav Anand"
              },
              "foundingDate": "2026",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Katihar",
                "addressRegion": "Bihar",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "lucifertkod2007aa@gmail.com",
                "contactType": "customer support"
              },
              "sameAs": [
                "https://youtube.com/@luciferthetechnicalgamerz8278",
                "https://www.instagram.com/abhinavanand8608",
                "https://x.com/Anonomus090806"
              ]
            })
          }}
        />
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}