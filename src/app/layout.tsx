import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://trennfreund.com'),
  title: "TrennFreund | B2B Abfallmanagement",
  description: "Die kompromisslose B2B-App für Handwerk und Abbruch. Digitale Dokumentation von Bauabfällen – direkt auf der Baustelle, entwickelt für die strengen Vorgaben der neuen GewAbfV.",
  keywords: ["B2B", "Abfallmanagement", "Handwerk", "Abbruch", "GewAbfV", "Baudokumentation", "Baustelle", "App"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TrennFreund | B2B Abfallmanagement',
    description: 'Digitale Dokumentation von Bauabfällen – direkt auf der Baustelle, entwickelt für die strengen Vorgaben der neuen GewAbfV.',
    url: 'https://trennfreund.com',
    siteName: 'TrennFreund',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TrennFreund - Digitale Baustellen-Doku',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrennFreund | B2B Abfallmanagement',
    description: 'Digitale Dokumentation von Bauabfällen – direkt auf der Baustelle, entwickelt für die strengen Vorgaben der neuen GewAbfV.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="antialiased">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@300..600,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "@id": "https://trennfreund.com/#application",
                "name": "TrennFreund",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android (PWA)",
                "description": "Die kompromisslose B2B-App für Handwerk und Abbruch. Digitale Dokumentation von Bauabfällen – direkt auf der Baustelle, entwickelt für die strengen Vorgaben der neuen GewAbfV.",
                "offers": {
                  "@type": "Offer",
                  "price": "49.00",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://trennfreund.com/#organization",
                "name": "TrennFreund",
                "url": "https://trennfreund.com",
                "description": "Startup aus NRW, spezialisiert auf KI-gestützte Baustellendokumentation nach GewAbfV für Abbruch- und Baufirmen.",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Nordrhein-Westfalen",
                  "addressCountry": "DE"
                }
              }
            ])
          }}
        />
      </head>
      <body className={`${inter.variable} ${barlow.variable} font-sans selection:bg-safety-green bg-white text-zinc-700 min-h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
