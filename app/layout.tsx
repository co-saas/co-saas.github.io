import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoSaaS - Trova collaboratori per il tuo progetto SaaS o open source",
  description:
    "CoSaaS è il marketplace perfetto per connettere founder di progetti SaaS, open source e startup con collaboratori qualificati. Pubblica il tuo progetto e trova il team ideale per il successo!",
  authors: [{ name: "CoSaaS Team", url: "https://cosaas.github.io" }],
  keywords: [
    "SaaS",
    "open source",
    "startup",
    "collaboratori",
    "freelancer",
    "developer",
    "trova lavoro remoto",
    "marketplace progetti",
    "lavoro remoto",
  ],
  metadataBase: new URL("https://cosaas.github.io"),
  alternates: {
    canonical: "https://cosaas.github.io",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "CoSaaS - Connetti owner di progetti con collaboratori",
    description:
      "Scopri CoSaaS, la piattaforma per connettere startup e progetti SaaS con talenti qualificati. Pubblica il tuo progetto o trova collaborazioni ora!",
    url: "https://cosaas.com",
    siteName: "CoSaaS",
    locale: "it_IT",
    images: [
      {
        url: "https://cosaas.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CoSaaS - Trova collaboratori per il tuo progetto SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoSaaS - Connetti owner di progetti con collaboratori",
    description:
      "Il miglior marketplace per startup, SaaS e progetti open source! Trova collaboratori e fai crescere il tuo progetto con CoSaaS.",
    images: ["https://cosaas.com/og-image.jpg"],
    creator: "@cosaas",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased md:max-w-5xl mx-auto px-6 md:px-2`}
      >
        {children}
      </body>
    </html>
  );
}
