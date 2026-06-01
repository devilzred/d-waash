import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/#products`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/#story`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}