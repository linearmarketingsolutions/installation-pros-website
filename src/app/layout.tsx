import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import FaviconAnimator from "./components/FaviconAnimator";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Installation Pros | Appliance & Plumbing Installation — Rancho Cucamonga, CA",
  description:
    "Family-owned appliance and plumbing fixture installation serving the Inland Empire, Orange County & Southern California. 5.0 stars, 180 Yelp reviews. Call (909) 768-3650.",
  keywords:
    "appliance installation Rancho Cucamonga, dishwasher installation, water heater installation, range hood installation, plumbing fixture installation, Inland Empire, Orange County",
  authors: [{ name: "Installation Pros" }],
  creator: "Installation Pros",
  publisher: "Installation Pros",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Installation Pros | Appliance & Plumbing Installation",
    description:
      "Flat-rate appliance & plumbing installation. 2-hour windows. Free haul-away. Serving SoCal since day one.",
    url: "https://installationprossocal.com",
    siteName: "Installation Pros",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Installation Pros | Appliance & Plumbing Installation",
    description: "5.0 stars. Flat-rate. 2-hour arrival windows. Serving SoCal.",
  },
  alternates: {
    canonical: "https://installationprossocal.com",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Installation Pros",
  telephone: "(909) 768-3650",
  url: "https://installationprossocal.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rancho Cucamonga",
    addressRegion: "CA",
    postalCode: "91730",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.1064,
    longitude: -117.5931,
  },
  openingHours: "Mo-Fr 08:00-19:00",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "180",
  },
  areaServed: [
    "Rancho Cucamonga",
    "Ontario",
    "Upland",
    "Fontana",
    "Riverside",
    "Corona",
    "Chino",
    "Chino Hills",
    "Diamond Bar",
    "Anaheim",
    "Orange",
    "Irvine",
    "San Bernardino",
    "Palm Springs",
    "Temecula",
    "San Clemente",
    "Huntington Beach",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Appliance Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Installation Pros",
  },
  areaServed: {
    "@type": "State",
    name: "California",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Installation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dishwasher Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oven Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Refrigerator Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Toilet Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Faucet Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Heater Installation" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install dishwashers if there's no existing cutout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Basic dishwasher installation starts at $205. Contact us for custom cutout situations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you haul away old appliances?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, haul-away is free of charge (some exceptions for oversized appliances).",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve the Inland Empire, Orange County, and surrounding areas including Rancho Cucamonga, Ontario, Upland, Riverside, Corona, Diamond Bar, Chino Hills, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer discounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — 15% off for Military, Police, and Fire personnel.",
      },
    },
    {
      "@type": "Question",
      name: "What payment do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept credit cards and cryptocurrency.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Yelp-verified licensed business.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${barlowCondensed.variable} ${inter.variable} font-body antialiased bg-white text-brand-black`}
      >
        <FaviconAnimator />
        {children}
      </body>
    </html>
  );
}
