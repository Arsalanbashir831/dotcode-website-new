// import { ComingSoonPage } from "@/components/coming-soon/coming-soon-page";
import { LandingPage } from "@/components/landing/landing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://dotcodesolution.com/#organization",
  name: "Dotcode Solutions",
  url: "https://dotcodesolution.com",
  logo: "https://dotcodesolution.com/assets/dotcode-logo.png",
  email: "hello@dotcode.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "SoftwareApplication",
      "@id": "https://dotcodesolution.com/#quickaccounts",
      name: "QuickAccounts",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://dotcodesolution.com",
      description:
        "Wholesale business software for managing stock, purchases, customer accounts, cash and ledgers, with setup, supported data migration and team training.",
      featureList: [
        "Stock records",
        "Multi-outlet and multi-warehouse inventory",
        "Stock transfers between locations",
        "Serial number traceability",
        "Warranty claims and RMA workflows",
        "Returns and product replacements",
        "Purchase records",
        "Customer accounts",
        "Cash records and ledgers",
        "Business setup, supported data migration and team training",
      ],
      publisher: { "@id": "https://dotcodesolution.com/#organization" },
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage />
    </>
  );
}
