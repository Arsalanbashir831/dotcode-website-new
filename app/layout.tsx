import type { Metadata } from "next";
import "@fontsource-variable/manrope";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dotcodesolutions.com"),
  title: {
    default: "Inventory Management Software for Wholesalers | QuickAccounts",
    template: "%s | QuickAccounts by Dotcode",
  },
  description:
    "Manage wholesale inventory across outlets and warehouses, track serial numbers, support warranty and replacement workflows, and keep purchases, customer accounts and ledgers organized with QuickAccounts.",
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Dotcode Solutions",
    title: "Inventory Management Software for Wholesalers | QuickAccounts",
    description:
      "Manage inventory across outlets and warehouses, track serial numbers, handle warranty workflows and organize wholesale accounts with QuickAccounts.",
    url: "/",
    images: [{ url: "/assets/dotcode-logo.png", alt: "Dotcode Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inventory Management Software for Wholesalers | QuickAccounts",
    description:
      "Manage inventory across outlets and warehouses, track serial numbers, handle warranty workflows and organize wholesale accounts with QuickAccounts.",
    images: ["/assets/dotcode-logo.png"],
  },
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
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
