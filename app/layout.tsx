import type { Metadata } from "next";
import "@fontsource-variable/manrope";

import { JsonLd } from "@/components/seo/json-ld";
import { siteEntityGraph } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dotcodesolutions.com"),
  title: {
    default: "Wholesale Inventory & RMA Software | Dotcode Solutions",
    template: "%s | Dotcode Solutions",
  },
  description:
    "Dotcode Solutions connects wholesale inventory, serial tracking, warranty, RMA and accounting workflows, with setup, migration and team training.",
  keywords: [
    "inventory management software UAE",
    "stock management software Pakistan",
    "CCTV distributor inventory software",
    "RAM wholesaler stock management",
    "hard drive distributor software",
    "serial number tracking software",
    "warranty management software for distributors",
    "RMA management software",
    "wholesale inventory software UK",
    "electronics distributor software USA",
    "multi-warehouse inventory management",
    "computer hardware wholesaler software",
    "wholesale stock tracking software",
    "CCTV dealer management software",
    "electronics warranty tracking",
    "QuickAccounts",
    "Dotcode Solutions",
  ],
  applicationName: "Dotcode Solutions",
  category: "Business software",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "1254x1254" }],
    apple: [{ url: "/favicon.png", sizes: "1254x1254" }],
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
  openGraph: {
    type: "website",
    siteName: "Dotcode Solutions",
    title: "Wholesale Inventory & RMA Software | Dotcode Solutions",
    description:
      "Manage wholesale stock, serial numbers, warranty claims, RMA returns and accounts in one connected system.",
    images: [{ url: "/assets/dotcode-logo.png", alt: "Dotcode Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wholesale Inventory & RMA Software | Dotcode Solutions",
    description:
      "Manage wholesale stock, serial numbers, warranty claims, RMA returns and accounts in one connected system.",
    images: ["/assets/dotcode-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <JsonLd data={siteEntityGraph} />
        {children}
      </body>
    </html>
  );
}
