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

const siteUrl = "https://arclintelligence.com";

export const metadata: Metadata = {
  title: {
    default: "ArcleIntelligence — 5.82B Parameter Multimodal AI",
    template: "%s | ArcleIntelligence",
  },
  description:
    "A 5.82B parameter multimodal AI model being built independently by a student developer. Zero corporate funding. Text, images, documents, audio, video — all in one model.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ArcleIntelligence",
    title: "ArcleIntelligence — 5.82B Parameter Multimodal AI",
    description:
      "A 5.82B parameter multimodal AI model being built independently by a student developer. Zero corporate funding.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ArcleIntelligence — 5.82B Parameter Multimodal AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArcleIntelligence — 5.82B Parameter Multimodal AI",
    description:
      "A 5.82B parameter multimodal AI model being built independently by a student developer. Zero corporate funding.",
    images: ["/og-image.png"],
    creator: "@arclintelligence",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F0E8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${cormorant.variable} ${syne.variable} ${ibmMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}
