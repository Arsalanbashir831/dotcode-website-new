import type { Metadata } from "next";
import "@fontsource-variable/manrope";

import "./globals.css";

export const metadata: Metadata = {
  title: "Coming Soon | Dotcode",
  description:
    "Dotcode is updating its website. We will be back online very soon.",
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
