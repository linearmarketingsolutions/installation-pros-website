import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./hvac-styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Installation Pros SoCal | HVAC Installation Rancho Cucamonga",
  description: "Professional HVAC installation in Rancho Cucamonga & Southern California. Family-owned, 5-star rated AC & heating services. Licensed CAC #1041882. Free estimates!",
  keywords: ["HVAC installation Rancho Cucamonga", "AC installation", "furnace installation", "air conditioning", "HVAC contractor", "Southern California"],
  authors: [{ name: "Installation Pros SoCal" }],
  creator: "Installation Pros SoCal",
  publisher: "Installation Pros SoCal",
  robots: "index, follow",
  openGraph: {
    title: "Installation Pros SoCal | Expert HVAC Installation",
    description: "Family-owned HVAC installation in Rancho Cucamonga. 5-star rated, licensed CAC #1041882. AC, heating, ductwork & more!",
    type: "website",
    locale: "en_US",
    siteName: "Installation Pros SoCal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Installation Pros SoCal | HVAC Installation",
    description: "Expert HVAC installation in Rancho Cucamonga. Family-owned, 5-star rated!",
  },
  alternates: {
    canonical: "https://installationprossocal.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// Local Business Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Installation Pros SoCal",
  image: "https://installationprossocal.com/logo.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rancho Cucamonga",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.1064,
    longitude: -117.5931,
  },
  url: "https://installationprossocal.com",
  telephone: "+1-909-345-4360",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "53",
  },
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "HVAC Installation",
  provider: {
    "@type": "HVACBusiness",
    name: "Installation Pros SoCal",
  },
  areaServed: {
    "@type": "State",
    name: "California",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "HVAC Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Air Conditioning Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Furnace Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ductwork Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Thermostat Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "HVAC for Home Renovations",
        },
      },
    ],
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does AC installation cost in Rancho Cucamonga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AC installation costs vary based on home size, system type, and efficiency rating. On average, homeowners in Rancho Cucamonga can expect to invest between $4,000-$8,000 for a complete installation. We offer free estimates to give you an accurate quote for your specific needs.",
      },
    },
    {
      "@type": "Question",
      name: "How long does HVAC installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential HVAC installations are completed in 1-2 days. However, larger homes, complex ductwork modifications, or full system replacements may take 3-5 days. We always provide a clear timeline during your estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer financing for HVAC installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We partner with financing providers to offer flexible payment options for qualified homeowners. During your consultation, we can discuss financing plans that work with your budget.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve in Southern California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We proudly serve Rancho Cucamonga and surrounding areas including Ontario, Upland, Fontana, Chino, Chino Hills, Corona, and throughout the Inland Empire. Contact us to confirm service in your area.",
      },
    },
  ],
};

export default function HVACLayout({
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
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
