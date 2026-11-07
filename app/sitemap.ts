import type { MetadataRoute } from "next";

const BASE_URL = "https://dotcodesolutions.com";
const LAST_CONTENT_UPDATE = new Date("2026-11-07T00:00:00.000Z");

// Keep published, indexable routes here. Add each new page when it is
// published so it is included in the next sitemap response.
const featureRoutes = [
  "/features/client-invoicing",
  "/features/time-and-fee-billing",
  "/features/recurring-billing",
  "/features/client-balances",
  "/features/expense-tracking",
  "/features/project-profitability",
  "/features/cash-and-bank",
  "/features/vendor-bills",
  "/features/reports",
  "/features/multi-office",
];

const audienceRoutes = [
  "/who-its-for/consulting-firms",
  "/who-its-for/law-firms",
  "/who-its-for/tech-and-software-companies",
  "/who-its-for/it-services-and-managed-service-providers",
  "/who-its-for/marketing-and-creative-agencies",
  "/who-its-for/accounting-audit-and-tax-practices",
  "/who-its-for/architects-and-engineering-firms",
  "/who-its-for/recruitment-and-staffing-agencies",
  "/who-its-for/training-coaching-and-education-providers",
];

const routes = [
  "/",
  "/features",
  "/who-its-for",
  "/pricing",
  "/implementation",
  "/company",
  "/custom-software",
  ...featureRoutes,
  ...audienceRoutes,
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: LAST_CONTENT_UPDATE,
  }));
}
