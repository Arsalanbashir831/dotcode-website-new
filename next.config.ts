import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""} https://www.youtube.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://img.youtube.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.youtube.com",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
  "media-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dotcodesolutions.com" }],
        destination: "https://dotcodesolutions.com/:path*",
        permanent: true,
      },
      // Retail and wholesale repositioning: retired service-firm pages.
      { source: "/who-its-for", destination: "/industries", permanent: true },
      { source: "/who-its-for/:path*", destination: "/industries", permanent: true },
      { source: "/features/client-invoicing", destination: "/features/accounting", permanent: true },
      { source: "/features/time-and-fee-billing", destination: "/features/accounting", permanent: true },
      { source: "/features/recurring-billing", destination: "/features/accounting", permanent: true },
      { source: "/features/expense-tracking", destination: "/features/accounting", permanent: true },
      { source: "/features/project-profitability", destination: "/features/accounting", permanent: true },
      { source: "/features/cash-and-bank", destination: "/features/accounting", permanent: true },
      { source: "/features/reports", destination: "/features/accounting", permanent: true },
      { source: "/features/client-balances", destination: "/features/ledger-tracking", permanent: true },
      { source: "/features/vendor-bills", destination: "/features/ledger-tracking", permanent: true },
      { source: "/features/multi-office", destination: "/features/multi-outlet-management", permanent: true },
      // Earlier retired inventory and retail pages, mapped to their closest current page.
      { source: "/solutions/:path*", destination: "/features/stock-management", permanent: true },
      { source: "/industries/clothing-garment-retailers-wholesalers", destination: "/industries/clothing-boutiques", permanent: true },
      { source: "/industries/food-restaurant-supply", destination: "/industries/restaurants-cafes-fast-food", permanent: true },
      { source: "/industries/fmcg-wholesalers-distributors", destination: "/industries/fmcg-distributors", permanent: true },
      { source: "/industries/automotive-motorcycle-spare-parts", destination: "/industries/auto-parts", permanent: true },
      { source: "/industries/building-materials-tiles-sanitary-ware", destination: "/industries/building-materials", permanent: true },
      { source: "/industries/pharmaceutical-medical-supply", destination: "/industries/pharmacies-medical-stores", permanent: true },
      { source: "/industries/cosmetics-beauty-distributors", destination: "/industries/cosmetics-beauty", permanent: true },
      { source: "/industries/furniture-home-furnishing", destination: "/industries/furniture-home-decor", permanent: true },
      { source: "/industries/stationery-school-supply", destination: "/industries/stationery-book-shops", permanent: true },
      { source: "/industries/agricultural-supply", destination: "/industries/agri-inputs-dealers", permanent: true },
      { source: "/industries/electronics-distributors", destination: "/industries/electronics-home-appliances", permanent: true },
      { source: "/industries/computer-hardware-wholesalers", destination: "/industries/computer-it-hardware", permanent: true },
      { source: "/industries/:slug(cctv-distributors|hard-drive-distributors|merchandise-wholesalers|multi-outlet-retailers)", destination: "/industries", permanent: true },
      { source: "/features/business-accounting", destination: "/features/accounting", permanent: true },
      { source: "/features/multi-warehouse-inventory", destination: "/features/multi-outlet-management", permanent: true },
      { source: "/features/pos-system-integration", destination: "/features/pos-system", permanent: true },
      { source: "/features/serial-number-tracking", destination: "/features", permanent: true },
      { source: "/features/warranty-management", destination: "/features", permanent: true },
      { source: "/features/rma-replacement-tracking", destination: "/features", permanent: true },
      { source: "/custom-erp-development", destination: "/custom-software", permanent: true },
      { source: "/regions/:path*", destination: "/", permanent: true },
      { source: "/guides/:path*", destination: "/features", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        ],
      },
    ];
  },
};

export default nextConfig;
