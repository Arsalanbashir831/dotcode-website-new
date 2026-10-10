import type { MetadataRoute } from "next";

const BASE_URL = "https://dotcodesolution.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/solutions/wholesale-inventory",
    "/features/business-accounting",
    "/features/multi-warehouse-inventory",
    "/features/serial-number-tracking",
    "/features/warranty-management",
    "/industries/electronics-distributors",
    "/industries/computer-hardware-wholesalers",
    "/industries/multi-outlet-retailers",
    "/industries/merchandise-wholesalers",
  ].map((route) => ({
      url: `${BASE_URL}${route}`,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    }));
}
