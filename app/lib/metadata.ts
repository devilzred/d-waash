import type { Metadata } from "next";

const BASE_URL = "https://www.dwaash.com"; // ← Replace with your actual domain

export const siteConfig = {
  name: "D-Waash",
  tagline: "Your Daily Hygiene",
  description:
    "D-Waash is a Kerala-based hygiene products brand offering bar soap, detergent powder, fabric softener, bathroom cleaner, toilet cleaner and anti-ant powder. Quality you can trust, every day.",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`, // ← Place your logo at /public/images/logo.png
  phone: "+91 8606548393",             // ← Replace with real phone
  email: "dwaashstore@gmail.com",            // ← Replace with real email
  address: {
    street: "D712 Line , Bommasandra",     // ← Replace
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560099",              // ← Replace
    country: "IN",
  },
  social: {
    instagram: "https://instagram.com/dwaash",   // ← Replace
    facebook: "https://facebook.com/dwaash",     // ← Replace
    whatsapp: "+91 8606548393",                   // ← Replace
  },
  geo: {
    lat: 11.2807,   // ← Update with exact coordinates
    lng: 76.2195,
  },
};

export function buildMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogImage = image ?? `${BASE_URL}/images/og-default.jpg`; // ← Place a 1200x630 OG image here

  return {
    title: `${title} | D-Waash – Your Daily Hygiene`,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "D-Waash",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}