// import { ComingSoonPage } from "@/components/coming-soon/coming-soon-page";
import { LandingPage } from "@/components/landing/landing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://dotcodesolutions.com/#organization",
  name: "Dotcode Solutions",
  url: "https://dotcodesolutions.com",
  logo: "https://dotcodesolutions.com/assets/dotcode-logo.png",
  email: "arsalanbashir831@gmail.com",
  areaServed: [
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United States" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "SoftwareApplication",
      "@id": "https://dotcodesolutions.com/#quickaccounts",
      name: "QuickAccounts",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://dotcodesolutions.com",
      description:
        "Inventory and stock management software for CCTV distributors, computer hardware wholesalers and electronics dealers in UAE, UK, USA and Pakistan. Track serial numbers, manage warranty claims, RMA returns and multi-warehouse stock across branches.",
      featureList: [
        "Serial number tracking for CCTV cameras, RAM, hard drives and electronics",
        "Warranty claim and RMA management for distributors",
        "Multi-warehouse and multi-outlet inventory management",
        "Stock transfers between branches and warehouses",
        "Invoice lookup by serial number",
        "Purchase and stock records for wholesale businesses",
        "Customer accounts, cash records and ledgers",
        "Returns and product replacement workflows",
        "Business setup, data migration and team training",
        "Suitable for CCTV dealers, RAM distributors, hard drive wholesalers",
      ],
      publisher: { "@id": "https://dotcodesolutions.com/#organization" },
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
