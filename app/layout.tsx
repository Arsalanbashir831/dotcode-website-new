import type { Metadata } from "next";
import "@fontsource-variable/manrope";

import { JsonLd } from "@/components/seo/json-ld";
import { siteEntityGraph } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dotcodesolutions.com"),
  title: {
    default: "Easy Accounting Software for Consulting & Service Firms | QuickAccounts",
    template: "%s | QuickAccounts",
  },
  description:
    "Simple accounting for consultants, law firms, tech companies and agencies. Client invoicing, retainers, expenses and reports. One-time license, setup included.",
  keywords: [
    "accounting software for consulting firms",
    "accounting software for service businesses",
    "accounting software for law firms",
    "billing software for professional services",
    "accounting software for agencies",
    "accounting software for software companies",
    "retainer billing software",
    "client invoicing software",
    "project profitability software",
    "accounting software one-time license",
    "QuickAccounts",
    "Dotcode Solutions",
  ],
  applicationName: "Dotcode Solutions",
  category: "Accounting software",
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
    title: "Easy Accounting Software for Consulting & Service Firms | QuickAccounts",
    description:
      "Bill clients, track every expense and see which projects make money. One-time license, setup and training included.",
    images: [{ url: "/assets/dotcode-logo.png", alt: "Dotcode Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Accounting Software for Consulting & Service Firms | QuickAccounts",
    description:
      "Bill clients, track every expense and see which projects make money. One-time license, setup and training included.",
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
        <Analytics />
      </body>
    </html>
  );
}
