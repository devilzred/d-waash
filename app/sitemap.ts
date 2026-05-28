import type { MetadataRoute } from "next";
import { products } from "./lib/products";
import { siteConfig } from "./lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
  ];

  return [...staticRoutes];
}