import Link from "next/link";

export function ProductDefinitionSection() {
  return (
    <section className="qa-product-definition" aria-labelledby="what-is-quickaccounts">
      <div className="qa-container">
        <p className="qa-eyebrow">Product overview</p>
        <h2 id="what-is-quickaccounts">What is QuickAccounts?</h2>
        <p>
          QuickAccounts by Dotcode Solutions is inventory, serial-number,
          warranty, RMA, and accounting software for wholesale distributors and
          stock-led businesses. It connects purchasing, sales, warehouse stock,
          customer and supplier accounts, cash records, and product service
          history in one system. Teams can trace an individual CCTV camera, RAM
          module, hard drive, or other serialized product from receipt through
          sale, invoice lookup, warranty review, return, and replacement. The
          online lifetime license supports unlimited users for $850 plus $40 per
          month for hosting. The offline lifetime license is $1,200 for one user
          with local data storage. Standard setup, supported data migration, and
          team training are included. Businesses should confirm integrations,
          data formats, permissions, customizations, and deployment needs during
          a guided demo before selecting a license.
        </p>
        <div className="qa-product-definition-links">
          <Link href="/pricing">Compare license options</Link>
          <Link href="/implementation">Review implementation</Link>
        </div>
      </div>
    </section>
  );
}
