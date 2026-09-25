import type { Metadata } from "next";
import "@fontsource-variable/manrope";

import "./globals.css";

export const metadata: Metadata = {
  title: "Wholesale Accounting Software | QuickAccounts by Dotcode",
  description:
    "QuickAccounts helps wholesalers organize stock, purchases, customer accounts, cash and ledgers with unlimited users, setup and training.",
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
