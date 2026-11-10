import type { Metadata } from "next";

import { NotFoundContent } from "@/components/i18n/not-found-content";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested Dotcode Solutions page could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundContent />;
}
