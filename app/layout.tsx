import type { Metadata } from "next";
import "@fontsource-variable/manrope";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dotcodesolutions.com"),
  title: {
    default: "Stock & Inventory Management Software for CCTV, RAM & Hardware Dealers | QuickAccounts",
    template: "%s | QuickAccounts by Dotcode",
  },
  description:
    "QuickAccounts is wholesale inventory and stock management software for CCTV distributors, RAM dealers and computer hardware wholesalers in UAE, UK, USA and Pakistan. Track serial numbers, manage warranty claims, handle RMA returns and control multi-warehouse stock across all your branches.",
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
  applicationName: "QuickAccounts",
  category: "Business software",
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
    title: "Stock & Inventory Software for CCTV, RAM & Hardware Dealers | QuickAccounts",
    description:
      "Manage stock, serial numbers, warranty claims and RMA returns for CCTV distributors, RAM dealers and computer hardware wholesalers across UAE, UK, USA and Pakistan.",
    images: [{ url: "/assets/dotcode-logo.png", alt: "QuickAccounts by Dotcode Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock & Inventory Software for CCTV, RAM & Hardware Dealers | QuickAccounts",
    description:
      "Manage stock, serial numbers, warranty claims and RMA returns for CCTV distributors, RAM dealers and hardware wholesalers in UAE, UK, USA and Pakistan.",
    images: ["/assets/dotcode-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
