import type { Metadata } from "next";

const BASE_URL = "https://www.dwaash.com"; // ← Replace with your actual domain

export const siteConfig = {
  name: "D-Waash",
  tagline: "Your Daily Hygiene",
  description:
    "D-Waash is a Kerala-based hygiene products brand offering bar soap, detergent powder, fabric softener, bathroom cleaner, toilet cleaner and anti-ant powder. Quality you can trust, every day.",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`, // ← Place your logo at /public/images/logo.png
  phone: "+91 9961108415",             // ← Contact number
  phone2: "+91 7994108415",           // ← Customer Care
  salesPhone: "+91 8606548393",       // ← Sales & Marketing
  email: "dwaashstore@gmail.com",            
  address: {
    street: "D712 Line , Bommasandra",     
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560099",              
    country: "IN",
  },
  social: {
    whatsapp: "918606548393",
    contactWhatsapp: "919961108415",
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
  const ogImage = image ?? `${BASE_URL}/images/logo.png`;

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