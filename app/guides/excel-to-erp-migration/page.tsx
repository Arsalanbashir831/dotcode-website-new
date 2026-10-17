import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

const description = "A practical checklist for preparing product, stock, customer and transaction data before moving from spreadsheets to ERP.";

export const metadata: Metadata = {
  title: "Excel-to-ERP Migration Guide",
  description,
  alternates: { canonical: "/guides/excel-to-erp-migration" },
};

export default function GuidePage() {
  return <SeoLandingPage
    path="/guides/excel-to-erp-migration"
    description={description}
    contentType="BlogPosting"
    datePublished="2026-10-17"
    dateModified="2026-10-17"
    eyebrow="Guide"
    title="Prepare your wholesale records for an Excel-to-ERP migration"
    intro="An Excel-to-ERP migration works best when the business separates master records from transaction history before importing anything. Begin with products, customers, suppliers, locations and opening stock, then decide which purchases, sales and account balances must move. Standardize product names, units and identifiers; remove duplicates; and flag missing serial numbers instead of guessing. Assign an owner who can approve mapping decisions and reconcile totals. Next, import a representative sample that covers several products, warehouses and customers. Compare the result with the source workbook and document any transformation rules before the full migration. Dotcode can assess supported migration during implementation, but the exact scope depends on the structure and condition of the supplied files. Keep an untouched archive of the source data and agree on a cutover point before users begin entering live transactions in QuickAccounts."
    sections={[
      { heading: "Separate master data from history", body: "Identify products, customers, locations and opening stock separately from purchases, sales and historical transactions." },
      { heading: "Normalize the fields people actually use", body: "Resolve duplicate product names, inconsistent units, missing serials and unclear customer accounts before importing anything." },
      { heading: "Validate with a representative sample", body: "Test a sample across warehouses, products and customers, then reconcile the result with the source files before go-live." },
    ]}
    faqs={[{ question: "Can Dotcode migrate our Excel records?", answer: "Supported migration may be available. Share representative files during the implementation discussion so the scope and data quality can be assessed." }]}
  />;
}
