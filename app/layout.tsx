import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./lib/metadata";
import Navbar from "./lib/components/navbar";
import Footer from "./lib/components/footer";
import ScrollReveal from "./lib/components/scroll-reveal";

/* ─── Google Fonts via next/font (zero layout shift, self-hosted automatically) ─── */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/* ─── Global site metadata ─── */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "D-Waash – Your Daily Hygiene | Kerala Hygiene Products Brand",
    template: "%s | D-Waash – Your Daily Hygiene",
  },
  description: siteConfig.description,
  keywords: [
    "D-Waash",
    "hygiene products Kerala",
    "detergent powder Kerala",
    "fabric softener",
    "bathroom cleaner",
    "toilet cleaner Kerala",
    "bar soap Kerala",
    "anti ant powder",
    "Nilambur hygiene brand",
    "daily hygiene products",
  ],
  authors: [{ name: "D-Waash" }],
  creator: "D-Waash",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "D-Waash",
    title: "D-Waash – Your Daily Hygiene",
    description: siteConfig.description,
    images: [
      {
        // ← Place a 1200×630 px image at /public/images/og-default.jpg
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "D-Waash – Your Daily Hygiene Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D-Waash – Your Daily Hygiene",
    description: siteConfig.description,
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // ← Paste your Search Console verification token here after claiming the site
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
  },
};

/* ─── Organisation JSON-LD structured data (rich results in Google) ─── */
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "D-Waash",
  alternateName: "D-Waash Your Daily Hygiene",
  url: siteConfig.url,
  logo: siteConfig.logo,
  description: siteConfig.description,
  foundingDate: "2021-04",
  founder: { "@type": "Person", name: "Mr. Thafseel" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["en", "ml"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        {/* Organisation structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="bg-surface-body text-gray-700 font-body">
        <Navbar />
        <main className="pt-8">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}