import type { MetadataRoute } from "next";

const BASE_URL = "https://dotcodesolutions.com";
const LAST_CONTENT_UPDATE = new Date("2026-10-17T00:00:00.000Z");

// Keep published, indexable routes grouped by search intent. Add each new page
// here when it is published so it is included in the next sitemap response.
const commercialRoutes = [
  "/custom-erp-development",
  "/solutions/wholesale-inventory",
  "/features/business-accounting",
  "/features/multi-warehouse-inventory",
  "/features/serial-number-tracking",
  "/features/warranty-management",
];

const industryRoutes = [
  "/industries/electronics-distributors",
  "/industries/computer-hardware-wholesalers",
  "/industries/multi-outlet-retailers",
  "/industries/merchandise-wholesalers",
];

// Educational/resource routes can be added here as they go live.
const educationalRoutes: string[] = [];

const resourceRoutes = [
  "/blog",
  "/guides/warranty-claim-management",
  "/guides/serial-number-inventory-tracking",
  "/guides/excel-to-erp-migration",
];

const routes = [
  "/",
  "/pricing",
  "/implementation",
  "/features",
  "/industries",
  "/features/rma-replacement-tracking",
  "/industries/cctv-distributors",
  "/industries/hard-drive-distributors",
  "/regions/uae",
  "/regions/uk",
  "/regions/us",
  ...commercialRoutes,
  ...industryRoutes,
  ...educationalRoutes,
  ...resourceRoutes,
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: LAST_CONTENT_UPDATE,
  }));
}
