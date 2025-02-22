import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://multi-lang-currency-site.vercel.app/";
  const currentDate = new Date().toISOString().split("T")[0];

  // Static pages
  const pages = ["", "/about", "/contact"];

  const staticPages: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 0.8
  }));

  // Dynamic pages
  const dynamicEntries: MetadataRoute.Sitemap = routing.locales.map(
    (locale) => ({
      url: `${baseUrl}/${locale}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0
    })
  );

  return [...staticPages, ...dynamicEntries];
}
